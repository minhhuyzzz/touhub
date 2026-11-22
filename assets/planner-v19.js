/* TOUR-HUB – AI Travel Planner v19: chi phí hợp lý + tối ưu theo ngân sách.
   Ghi đè generatePlan / calcCosts / renderPlan / exportPDF của app.js.
   Mọi mức giá là ước tính tham khảo (chưa gồm vé máy bay / đi lại liên tỉnh). */
(function () {
  'use strict';
  var g = function (id) { return document.getElementById(id); };
  var money = function (n) { return new Intl.NumberFormat('vi-VN').format(Math.round(n)) + 'đ'; };
  var say = function (m, t) { if (typeof window.toast === 'function') window.toast(m, t); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };

  /* Hạng lưu trú: giá / phòng / đêm (2 người), hệ số ăn uống & di chuyển theo hạng */
  var TIERS = [
    { k: 'eco', label: 'Homestay / nhà nghỉ sạch', room: 400000, mealCap: 70000, brk: 35000, car: 120000 },
    { k: 'std', label: 'Khách sạn 3★', room: 850000, mealCap: 120000, brk: 0, car: 160000 },
    { k: 'cmf', label: 'Khách sạn 4★', room: 1700000, mealCap: 200000, brk: 0, car: 220000 },
    { k: 'lux', label: 'Resort / khách sạn 5★', room: 3500000, mealCap: 350000, brk: 0, car: 350000 }
  ];
  var DMULT = { 'Hà Nội': 1, 'Hạ Long': 1.05, 'Sa Pa': .95, 'Huế': .9, 'Đà Nẵng': 1, 'Hội An': 1.05, 'Đà Lạt': .95, 'Nha Trang': 1.05, 'Phú Quốc': 1.25, 'TP.HCM': 1.1 };

  /* Vé tham quan / người (VNĐ, ước tính). Không có trong bảng: chợ, phố, hồ, bãi biển, chùa… = miễn phí */
  var FEE = {
    'Bà Nà Hills': 900000, 'Cầu Vàng': 0, 'Vinpearl Land': 880000, 'VinWonders': 950000, 'Đại Nội Huế': 200000,
    'Lăng Tự Đức': 150000, 'Lăng Khải Định': 150000, 'Vịnh Hạ Long': 290000, 'Hang Sửng Sốt': 0, 'Đảo Titop': 0,
    'Đỉnh Fansipan': 800000, 'Cáp treo Hòn Thơm': 700000, 'Đảo Hòn Mun': 350000, 'Hoàng thành Thăng Long': 30000,
    'Văn Miếu': 30000, 'Lăng Bác': 0, 'Bảo tàng Dân tộc học': 40000, 'Phố cổ Hội An': 120000, 'Địa đạo Củ Chi': 125000,
    'Dinh Độc Lập': 65000, 'Bảo tàng Chứng tích': 40000, 'Thánh địa Mỹ Sơn': 150000, 'Ngũ Hành Sơn': 40000,
    'Rừng dừa Bảy Mẫu': 150000, 'Thung lũng Tình Yêu': 100000, 'Ga Đà Lạt': 10000, 'Tháp Bà Ponagar': 30000,
    'Suối khoáng nóng': 300000, 'Bản Cát Cát': 70000, 'Thác Bạc': 20000, 'Làng gốm Thanh Hà': 35000, 'Suối Tranh': 40000,
    'Đồi chè Cầu Đất': 30000, 'Thiền viện Trúc Lâm': 0, 'Chợ phiên Bắc Hà': 0
  };
  var feeOf = function (n) { return FEE.hasOwnProperty(n) ? FEE[n] : 0; };
  var ACT2 = { beach: ['Tắm biển & thư giãn', 0], nature: ['Dạo thiên nhiên & chụp ảnh', 50000], adventure: ['Hoạt động trải nghiệm ngoài trời', 250000], shopping: ['Mua sắm đặc sản & quà lưu niệm', 0], relax: ['Cà phê view đẹp & thư giãn', 60000] };

  /* ---- dựng kế hoạch cho một hạng cụ thể ---- */
  function addMin(t, m) { var p = t.split(':').map(Number), mi = p[1] + m, h = p[0] + Math.floor(mi / 60); mi %= 60; return String(h % 24).padStart(2, '0') + ':' + String(mi).padStart(2, '0'); }
  function hash(s) { var h = 7; for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 9973; return h; }
  function pickHotel(dest, tier, mult) {
    var base = { name: tier.label + ' · ' + dest, price: Math.round(tier.room * mult / 10000) * 10000 };
    if (tier.k === 'lux' && window.DB && DB.services) {
      var h = DB.services.filter(function (s) { return s.type === 'hotel' && s.loc === dest; })[0];
      if (h) return { name: h.name, price: h.price };
    }
    return base;
  }
  function build(base, ti, lean) {
    var tier = TIERS[ti], mult = DMULT[base.dest] || 1;
    var hotel = pickHotel(base.dest, tier, mult);
    var rooms = base.group === 'Một mình' ? 1 : base.group === 'Gia đình' ? Math.ceil(base.pax / 3) : Math.ceil(base.pax / 2);
    var cars = Math.ceil(base.pax / 4);
    var plan = {
      dest: base.dest, days: base.days, nights: Math.max(base.days - 1, 0), rooms: rooms, cars: cars, budget: base.budget, pax: base.pax,
      group: base.group, season: base.season, prefs: base.prefs, tier: ti, lean: !!lean, hotelName: hotel.name, hotelPrice: hotel.price,
      spots: base.spots, resIds: base.resIds, daysData: []
    };
    var si = 0, ri = 0;
    var spot = function () { return base.spots[si++ % base.spots.length]; };
    var res = function (cap, share) {
      var r = base.rest[ri++ % base.rest.length];
      var c = Math.min(r.price || cap, cap) * (share || 1);
      return { name: r.name, cost: Math.round(c / 5000) * 5000 };
    };
    for (var d = 0; d < base.days; d++) {
      var acts = [], t = '08:00';
      var b = res(Math.max(tier.mealCap * .6, 35000), .6); if (tier.brk) b.cost = Math.min(b.cost, tier.brk);
      acts.push({ time: t, name: 'Ăn sáng: ' + b.name, cat: 'food', cost: b.cost, note: 'Khởi đầu ngày mới', q: b.name + ', ' + base.dest });
      var s1 = spot(), tr1 = 10 + hash(s1) % 15; t = addMin(t, 75 + tr1);
      acts.push({ time: t, name: 'Tham quan: ' + s1, cat: 'ticket', cost: feeOf(s1), note: 'Di chuyển ~' + tr1 + ' phút' + (feeOf(s1) ? '' : ' · miễn phí/vào cổng tự do'), q: s1 + ', ' + base.dest });
      t = addMin(t, 135);
      var l = res(tier.mealCap);
      acts.push({ time: t, name: 'Ăn trưa: ' + l.name, cat: 'food', cost: l.cost, note: 'Đặc sản địa phương', q: l.name + ', ' + base.dest });
      t = addMin(t, 105);
      var a2 = null, p = base.prefs;
      for (var k in ACT2) { if (p.indexOf(k) > -1) { a2 = ACT2[k]; break; } }
      var s2 = spot(), tr2 = 10 + hash(s2) % 20; t = addMin(t, tr2);
      var a2name = a2 ? a2[0] + ' · ' + s2 : 'Tham quan: ' + s2, a2cost = a2 ? a2[1] : feeOf(s2);
      if (lean && a2cost > 100000) { a2name = 'Dạo thiên nhiên & chụp ảnh · ' + s2; a2cost = 0; }
      acts.push({ time: t, name: a2name, cat: 'ticket', cost: a2cost, note: 'Di chuyển ~' + tr2 + ' phút', q: s2 + ', ' + base.dest });
      var dn = res(tier.mealCap * 1.25);
      acts.push({ time: '19:00', name: 'Ăn tối: ' + dn.name, cat: 'food', cost: dn.cost, note: 'Món đặc trưng', q: dn.name + ', ' + base.dest });
      var show = p.indexOf('culture') > -1 && !lean;
      acts.push({ time: '20:45', name: show ? 'Show văn hóa nghệ thuật' : 'Dạo phố đêm', cat: 'ticket', cost: show ? 200000 : 0, note: '', q: base.dest + ' ' + (show ? 'nhà hát' : 'phố đi bộ') });
      plan.daysData.push({ acts: acts, transport: cars * tier.car });
    }
    return plan;
  }
  function calc(plan) {
    var food = 0, ticket = 0, transport = 0, pax = plan.pax;
    plan.daysData.forEach(function (day) {
      day.acts.forEach(function (a) { if (a.cat === 'food') food += a.cost * pax; else ticket += a.cost * pax; });
      transport += day.transport;
    });
    var lodging = plan.hotelPrice * (plan.rooms || 1) * (plan.nights != null ? plan.nights : plan.days);
    return { food: food, ticket: ticket, transport: transport, lodging: lodging, total: food + ticket + transport + lodging };
  }
  /* Chọn hạng cao nhất vẫn nằm trong ngân sách; nếu vẫn vượt thì giảm hoạt động tốn phí */
  function fit(base, maxTier) {
    for (var ti = maxTier; ti >= 0; ti--) {
      var p = build(base, ti, false); if (calc(p).total <= base.budget) return p;
      var q = build(base, ti, true); if (calc(q).total <= base.budget) return q;
    }
    var q = build(base, 0, true); return q;
  }
  function readBase() {
    var dest = g('aiDest').value, days = Math.round(+g('aiDays').value), budget = +g('aiBudget').value, pax = Math.round(+g('aiPax').value);
    var prefs = [].slice.call(document.querySelectorAll('#aiPrefs input:checked')).map(function (c) { return c.value; });
    if (!(days >= 1 && days <= 14)) { say('Số ngày phải từ 1 đến 14.', 'error'); return null; }
    if (!(pax >= 1 && pax <= 20)) { say('Số người phải từ 1 đến 20.', 'error'); return null; }
    if (!(budget >= 500000)) { say('Ngân sách tối thiểu 500.000đ.', 'error'); return null; }
    if (!prefs.length) { say('Chọn ít nhất 1 sở thích.', 'error'); return null; }
    var spots = (window.ATTRACTIONS && ATTRACTIONS[dest] ? ATTRACTIONS[dest] : ['Trung tâm thành phố', 'Bảo tàng địa phương', 'Công viên thành phố']).slice();
    for (var i = spots.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), x = spots[i]; spots[i] = spots[j]; spots[j] = x; }
    var rest = DB.foods.slice().sort(function (a, b) { return (b.city === dest ? 1 : 0) - (a.city === dest ? 1 : 0); }).filter(function (r) { return r.city === dest; });
    if (rest.length < 3) rest = rest.concat(DB.foods.filter(function (r) { return r.city !== dest; }).slice(0, 3));
    rest = rest.map(function (r) { return { id: r.id, name: r.name, price: r.price }; });
    return { dest: dest, days: days, budget: budget, pax: pax, group: g('aiGroup').value, season: g('aiSeason').value, prefs: prefs, spots: spots, rest: rest };
  }

  window.calcCosts = calc;

  window.generatePlan = function () {
    var base = readBase(); if (!base) return;
    window._planBase = base;
    var maxTier = 3; // chọn hạng cao nhất mà ngân sách cho phép
    window._plan = fit(base, maxTier);
    window.renderPlan();
    var c = calc(window._plan);
    say(c.total <= base.budget ? 'Đã tạo lịch trình trong ngân sách.' : 'Ngân sách thấp hơn mức tối thiểu ước tính.', c.total <= base.budget ? 'success' : 'warn');
  };

  /* Tối ưu: hạ một hạng nếu vượt ngân sách; nếu đã trong ngân sách thì chỉ ra mức tiết kiệm có thể đạt */
  window.optimizePlan = function () {
    var plan = window._plan, base = window._planBase; if (!plan || !base) return;
    base.budget = +g('aiBudget').value || base.budget;
    var before = calc(plan).total, next;
    if (before > base.budget) next = fit(base, Math.max(plan.tier - 1, 0));
    else if (plan.tier > 0) next = build(base, plan.tier - 1, true);
    else next = build(base, 0, true);
    var after = calc(next).total;
    if (after < before) { window._plan = next; window.renderPlan(); say('Đã tối ưu, tiết kiệm ' + money(before - after) + '.', 'success'); }
    else say('Lịch trình đã ở mức chi phí thấp nhất có thể.', 'info');
  };

  window.removeAct = function (di, ai) { window._plan.daysData[di].acts.splice(ai, 1); window.renderPlan(); say('Đã xóa hoạt động, chi phí đã tính lại.'); };

  window.renderPlan = function () {
    var plan = window._plan; if (!plan) return;
    var c = calc(plan), T = TIERS[plan.tier], pax = plan.pax, over = c.total - plan.budget;
    var pct = Math.min(100, Math.round(c.total / plan.budget * 100));
    g('planSummary').innerHTML = '<div style="background:var(--surface-2);padding:12px;border-radius:10px"><div><strong>' + esc(plan.dest) + '</strong> · ' + plan.days + ' ngày ' + plan.nights + ' đêm · ' + pax + ' người · ' + plan.rooms + ' phòng</div>' +
      '<div style="color:var(--text-muted);font-size:.85rem;margin-top:4px">' + esc(plan.group) + ' · Mùa ' + esc(plan.season) + '</div>' +
      '<div style="margin-top:6px"><strong style="color:var(--primary)">' + money(plan.budget) + '</strong> ngân sách · ~' + money(plan.budget / pax / plan.days) + '/người/ngày</div></div>';
    var html = '';
    plan.daysData.forEach(function (day, di) {
      var night = di < plan.nights, hotelCost = night ? plan.hotelPrice * plan.rooms : 0;
      var dayCost = hotelCost + day.transport + day.acts.reduce(function (s, a) { return s + a.cost * pax; }, 0);
      var route = (window.thGRoute ? window.thGRoute([plan.dest].concat(day.acts.filter(function (a) { return a.cat === 'ticket' && a.q; }).map(function (a) { return a.q; }))) : '#');
      html += '<div class="plan-day"><div class="plan-day-head"><h5>Ngày ' + (di + 1) + ' — ' + esc(plan.dest) + '</h5><span>' + money(dayCost) + '</span></div><div class="plan-day-body">' +
        (night ? '<div class="plan-item"><div class="plan-time"><i class="fas fa-bed"></i></div><div class="plan-content"><h6><i class="fas fa-hotel" style="color:var(--primary)"></i> ' + esc(plan.hotelName) + '</h6><small>Lưu trú · ' + money(plan.hotelPrice) + '/phòng/đêm × ' + plan.rooms + ' phòng</small></div><div class="plan-cost">' + money(hotelCost) + '</div></div>' : '') +
        day.acts.map(function (a, ai) {
          return '<div class="plan-item"><div class="plan-time">' + a.time + '</div><div class="plan-content"><h6>' + esc(a.name) + '</h6><small>' + esc(a.note || '') + (a.cat === 'food' ? ' · 🍜 Ăn uống' : ' · 🎟 Tham quan') + '</small></div>' +
            '<div class="plan-cost">' + (a.cost ? money(a.cost * pax) : 'Miễn phí') + '</div><div class="pi-actions">' +
            (a.q && window.thGOpen ? '<a title="Xem trên Google Maps" target="_blank" rel="noopener" href="' + window.thGOpen({ q: a.q }) + '"><i class="fas fa-location-dot"></i></a>' : '') +
            '<button title="Xóa" onclick="removeAct(' + di + ',' + ai + ')"><i class="fas fa-trash"></i></button></div></div>';
        }).join('') +
        '<div class="plan-item"><div class="plan-time"><i class="fas fa-taxi"></i></div><div class="plan-content"><h6>Di chuyển trong ngày</h6><small>' + plan.cars + ' xe Grab/taxi (4 người/xe) · <a target="_blank" rel="noopener" href="' + route + '">Xem lộ trình trên Google Maps</a></small></div><div class="plan-cost">' + money(day.transport) + '</div></div>' +
        '</div></div>';
    });
    var status = over <= 0 ? '<span class="badge success">✓ Trong ngân sách (còn ' + money(-over) + ')</span>' : '<span class="badge danger">⚠ Vượt ngân sách ' + money(over) + ' — giảm số ngày/người hoặc tăng ngân sách</span>';
    var cell = function (ic, lb, v) { return '<div class="cost-cell"><i class="fas fa-' + ic + '"></i><div class="lbl">' + lb + '</div><div class="val">' + money(v) + '</div></div>'; };
    var tips = [];
    if (over > 0 && plan.tier === 0 && plan.lean) tips.push('Ngân sách quá thấp cho lịch trình này: mức tối thiểu ước tính khoảng ' + money(c.total) + '. Hãy giảm số ngày/số người hoặc tăng ngân sách.');
    else if (over > 0) tips.push('Bấm “Tối ưu chi phí” để hạ hạng lưu trú/ăn uống.');
    else if (plan.tier < 3 && over < -TIERS[plan.tier + 1].room * plan.rooms * plan.nights * 0.3) tips.push('Ngân sách còn dư: tăng ngân sách để lên hạng cao hơn.');
    tips.push('Đi ngày thường và đúng “giờ vàng” để tránh đông, giá vé và dịch vụ thường dễ chịu hơn.');
    tips.push('Giá là ước tính tham khảo, chưa gồm vé máy bay/đi lại liên tỉnh, kiểm tra lại trước khi đặt.');
    var map = window.thGUrl ? '<div class="dash-card" style="margin-bottom:16px"><h5><i class="fas fa-map-marked-alt"></i> ' + esc(plan.dest) + ' trên Google Maps</h5><div class="mini-map" id="planMap" style="height:300px"></div></div>' : '';
    g('planResult').innerHTML =
      '<div class="dash-card" style="margin-bottom:16px"><div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px"><div><h5 style="margin:0">Lịch trình ' + plan.days + ' ngày · ' + esc(plan.dest) + '</h5>' +
      '<div style="margin-top:6px">Tổng: <strong style="color:var(--primary);font-size:1.2rem">' + money(c.total) + '</strong> · ' + status + '</div>' +
      '<div style="margin-top:4px;font-size:.85rem;color:var(--text-muted)">Hạng: ' + esc(T.label) + ' · dùng ' + pct + '% ngân sách' + (plan.lean ? ' · chế độ tiết kiệm' : '') + '</div></div>' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn btn-ghost" onclick="optimizePlan()"><i class="fas fa-wand-magic-sparkles"></i> Tối ưu chi phí</button><button class="btn btn-ghost" onclick="savePlan()"><i class="fas fa-save"></i> Lưu</button><button class="btn btn-primary" onclick="exportPDF()"><i class="fas fa-file-pdf"></i> Xuất PDF</button></div></div>' +
      '<div class="cost-grid">' + cell('bed', 'Lưu trú', c.lodging) + cell('utensils', 'Ăn uống', c.food) + cell('ticket', 'Vé tham quan', c.ticket) + cell('car', 'Di chuyển nội vùng', c.transport) + '</div>' +
      '<ul style="margin:12px 0 0;padding-left:18px;font-size:.86rem;color:var(--text-muted)">' + tips.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ul></div>' + map + html;
    if (window.thGMap) window.thGMap('planMap', { q: plan.dest + ', Việt Nam', zoom: 12 });
  };

  /* PDF: bỏ dấu thay vì xóa ký tự để không mất chữ */
  var plain = function (s) { return String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').replace(/[^\x20-\x7E]/g, ''); };
  window.exportPDF = function () {
    if (!window.jspdf) return say('Thư viện PDF đang tải, thử lại sau giây lát.', 'error');
    var plan = window._plan; if (!plan) return;
    var c = calc(plan), doc = new window.jspdf.jsPDF();
    doc.setFontSize(18); doc.text('TOUR-HUB - Lich trinh du lich', 14, 18);
    doc.setFontSize(11);
    doc.text(plain(plan.dest) + ' | ' + plan.days + ' ngay ' + plan.nights + ' dem | ' + plan.pax + ' nguoi | ' + plan.rooms + ' phong', 14, 28);
    doc.text('Luu tru ' + plain(money(c.lodging)) + ' | An uong ' + plain(money(c.food)) + ' | Ve ' + plain(money(c.ticket)) + ' | Di chuyen ' + plain(money(c.transport)), 14, 36);
    doc.text('TONG: ' + plain(money(c.total)) + '  (ngan sach ' + plain(money(plan.budget)) + ')', 14, 44);
    var y = 56;
    plan.daysData.forEach(function (day, i) {
      doc.setFontSize(12); doc.text('Ngay ' + (i + 1), 14, y); y += 6; doc.setFontSize(9);
      day.acts.forEach(function (a) { doc.text(a.time + ' - ' + plain(a.name).slice(0, 60) + ' - ' + (a.cost ? plain(money(a.cost * plan.pax)) : 'Mien phi'), 16, y); y += 5; if (y > 270) { doc.addPage(); y = 20; } });
      y += 4; if (y > 270) { doc.addPage(); y = 20; }
    });
    doc.setFontSize(8); doc.text('Gia la uoc tinh tham khao, chua gom ve may bay/di lai lien tinh.', 14, 285);
    doc.save('tourhub-lich-trinh.pdf'); say('Đã xuất PDF.', 'success');
  };
})();
