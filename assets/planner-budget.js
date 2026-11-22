/* TOUR-HUB — AI Planner: lịch trình bám sát ngân sách
 * Ghi đè window.generatePlan(). Nạp SAU planner-v19.js / app.js / router.js.
 * Giá là ước tính tham khảo (VNĐ), có thể thay đổi theo mùa & nhà cung cấp.
 */
(function () {
  'use strict';
  const K = 1000;
  const TAGS = { culture: 'Văn hóa', food: 'Ẩm thực', nature: 'Thiên nhiên', beach: 'Biển', adventure: 'Mạo hiểm', shopping: 'Mua sắm', relax: 'Nghỉ dưỡng' };
  const SLOTS = ['Sáng', 'Chiều', 'Tối'];
  const TIERS = ['Tiết kiệm', 'Tiêu chuẩn', 'Thoải mái'];
  const LODGE = [350, 700, 1500]; // k VNĐ / phòng / đêm
  const FOOD = [180, 300, 550];   // k VNĐ / người / ngày

  const a = (name, price, tags, slot) => ({ name, price: price * K, tags: tags.split(','), slot });
  const f = (name, price) => ({ name, price: price * K });

  // m: hệ số giá lưu trú/ăn uống; tr: phí di chuyển nội tỉnh / ngày / xe (k)
  const D = {
    'Hà Nội': { m: 1, tr: 120,
      act: [a('Hồ Hoàn Kiếm & đền Ngọc Sơn', 30, 'culture,relax', 0), a('Văn Miếu – Quốc Tử Giám', 70, 'culture', 0), a('Bảo tàng Dân tộc học', 40, 'culture', 0), a('Làng gốm Bát Tràng', 0, 'culture,shopping', 0),
        a('Dạo 36 phố phường', 0, 'culture,shopping,food', 1), a('Hoàng thành Thăng Long', 150, 'culture', 1), a('Nhà tù Hỏa Lò', 100, 'culture', 1), a('Chùa Trấn Quốc & hồ Tây', 0, 'culture,relax,nature', 1),
        a('Múa rối nước Thăng Long', 100, 'culture', 2), a('Phố đi bộ & chợ đêm', 0, 'shopping,food', 2), a('Cầu Long Biên ngắm hoàng hôn', 0, 'culture,relax', 2)],
      food: [f('Phở bò', 60), f('Bún chả', 70), f('Bún đậu mắm tôm', 60), f('Chả cá', 150), f('Cà phê trứng', 45)],
      tip: ['Xuân ẩm, hay mưa phùn — mang áo mưa nhẹ.', 'Hè nóng và dễ mưa rào — nên đi tham quan buổi sáng.', 'Thu là mùa đẹp nhất, thời tiết dễ chịu.', 'Đông lạnh về đêm — mang áo ấm.'] },
    'Hạ Long': { m: 1.05, tr: 150,
      act: [a('Tour thuyền ngắm vịnh (nửa ngày)', 350, 'nature,relax', 0), a('Đảo Ti Tốp', 80, 'beach,nature', 0), a('Chèo kayak làng chài Cửa Vạn', 250, 'adventure,nature', 0),
        a('Bãi biển Bãi Cháy', 0, 'beach,relax', 1), a('Sun World Hạ Long', 300, 'adventure', 1), a('Chợ Hạ Long & hải sản', 0, 'food,shopping', 1),
        a('Chợ đêm Hạ Long', 0, 'shopping,food', 2), a('Dạo cầu Bãi Cháy về đêm', 0, 'relax', 2)],
      food: [f('Chả mực', 120), f('Bánh cuốn chả mực', 50), f('Sá sùng', 150), f('Hải sản bình dân', 200)],
      tip: ['Xuân sương mù có thể che vịnh — kiểm tra thời tiết trước khi đặt tour.', 'Hè đẹp để tắm biển nhưng có thể có bão — theo dõi dự báo.', 'Thu trời trong, vịnh đẹp.', 'Đông lạnh, gió mạnh trên vịnh — mang áo gió.'] },
    'Sa Pa': { m: 1, tr: 150,
      act: [a('Bản Cát Cát', 70, 'culture,nature', 0), a('Trekking Lao Chải – Tả Van', 100, 'adventure,nature', 0), a('Fansipan (cáp treo)', 800, 'adventure,nature', 0),
        a('Núi Hàm Rồng', 100, 'nature', 1), a('Thác Bạc', 20, 'nature', 1), a('Nhà thờ đá & quảng trường', 0, 'culture,relax', 1), a('Mua đặc sản & thổ cẩm', 0, 'shopping', 1),
        a('Chợ đêm Sa Pa', 0, 'shopping,food', 2), a('Cà phê ngắm thung lũng', 0, 'relax', 2)],
      food: [f('Thắng cố', 80), f('Lợn cắp nách nướng', 150), f('Lẩu cá hồi', 200), f('Xôi ngũ sắc', 30)],
      tip: ['Xuân hoa đào, mận nở nhưng hay có sương mù.', 'Hè mưa nhiều, đường trơn — cẩn thận khi trekking.', 'Thu lúa chín, rất đẹp ở Tả Van.', 'Đông có thể dưới 5°C, đôi khi có băng giá — mang đồ rất ấm.'] },
    'Huế': { m: 0.9, tr: 100,
      act: [a('Đại Nội Huế', 200, 'culture', 0), a('Chợ Đông Ba', 0, 'shopping,food', 0), a('Chùa Thiên Mụ', 0, 'culture,relax', 1), a('Lăng Khải Định', 150, 'culture', 1), a('Lăng Tự Đức', 150, 'culture', 1),
        a('Thuyền sông Hương & ca Huế', 150, 'culture,relax', 2), a('Cầu Trường Tiền & phố đi bộ', 0, 'relax', 2), a('Cồn Hến ăn tối', 0, 'food,nature', 2)],
      food: [f('Bún bò Huế', 50), f('Bánh bèo – nậm – lọc', 50), f('Cơm hến', 30), f('Chè Huế', 20)],
      tip: ['Xuân thời tiết dễ chịu, hợp tham quan lăng tẩm.', 'Hè nắng gắt — tham quan sáng sớm hoặc chiều muộn.', 'Thu bắt đầu mùa mưa bão — theo dõi dự báo.', 'Đông mưa dầm, se lạnh — mang áo mưa.'] },
    'Đà Nẵng': { m: 1, tr: 110,
      act: [a('Bãi biển Mỹ Khê', 0, 'beach,relax', 0), a('Ngũ Hành Sơn', 40, 'culture,nature', 0), a('Bà Nà Hills', 900, 'adventure,nature', 0),
        a('Bán đảo Sơn Trà & chùa Linh Ứng', 0, 'nature,culture', 1), a('Bảo tàng Chăm', 60, 'culture', 1), a('Chợ Hàn & chợ Cồn', 0, 'shopping,food', 1), a('Asia Park', 200, 'adventure', 1),
        a('Cầu Rồng & cầu Tình Yêu', 0, 'culture,relax', 2), a('Phố ẩm thực đêm', 0, 'food', 2)],
      food: [f('Mì Quảng', 45), f('Bánh tráng cuốn thịt heo', 120), f('Hải sản Mỹ Khê', 250), f('Bánh xèo', 50)],
      tip: ['Xuân nắng đẹp, biển êm.', 'Hè là mùa tắm biển cao điểm, nắng gắt — nhớ chống nắng.', 'Thu bắt đầu mưa, có thể có bão.', 'Đông mưa lạnh, biển động — ưu tiên điểm trong nhà.'] },
    'Hội An': { m: 1, tr: 80,
      act: [a('Đạp xe làng rau Trà Quế', 0, 'nature,relax', 0), a('Phố cổ Hội An (vé tham quan)', 120, 'culture', 0), a('Rừng dừa Bảy Mẫu (thúng chai)', 150, 'nature,adventure', 0), a('Cù Lao Chàm (tour)', 500, 'beach,adventure', 0),
        a('Biển An Bàng', 0, 'beach,relax', 1), a('Lớp nấu ăn / làng gốm Thanh Hà', 200, 'food,culture', 1), a('Mua lồng đèn & đồ thủ công', 0, 'shopping', 1),
        a('Thả đèn hoa đăng sông Hoài', 50, 'culture,relax', 2), a('Chợ đêm Nguyễn Hoàng', 0, 'shopping,food', 2)],
      food: [f('Cao lầu', 50), f('Bánh mì Phượng', 30), f('Cơm gà Hội An', 45), f('Mì Quảng', 45)],
      tip: ['Xuân thời tiết đẹp nhất để dạo phố cổ.', 'Hè nắng gắt — đi phố cổ buổi sáng/tối.', 'Thu mưa nhiều, có thể ngập phố cổ.', 'Đông mưa lạnh, mang áo mưa.'] },
    'Đà Lạt': { m: 0.95, tr: 120,
      act: [a('Hồ Xuân Hương & chợ Đà Lạt', 0, 'relax,shopping', 0), a('Đồi chè Cầu Đất săn mây', 50, 'nature', 0), a('Núi Langbiang', 60, 'nature,adventure', 0),
        a('Crazy House', 60, 'culture', 1), a('Ga Đà Lạt', 10, 'culture', 1), a('Thác Datanla', 50, 'nature,adventure', 1), a('Vườn dâu / nông trại hoa', 60, 'nature,shopping', 1),
        a('Chợ đêm Đà Lạt', 0, 'food,shopping', 2), a('Cà phê view đồi thông', 0, 'relax', 2)],
      food: [f('Bánh tráng nướng', 25), f('Bánh căn', 40), f('Lẩu gà lá é', 150), f('Sữa đậu nành nóng', 15)],
      tip: ['Xuân hoa mai anh đào, rất đông khách.', 'Hè mát nhưng mưa chiều — mang áo mưa.', 'Thu dịu mát, hợp săn mây.', 'Đông se lạnh, về đêm có thể dưới 10°C — mang áo ấm.'] },
    'Nha Trang': { m: 1.05, tr: 110,
      act: [a('Bãi biển Trần Phú', 0, 'beach,relax', 0), a('Tháp Bà Ponagar', 30, 'culture', 0), a('Tour 4 đảo', 400, 'beach,adventure', 0),
        a('Viện Hải dương học', 40, 'culture,nature', 1), a('Tắm bùn khoáng', 250, 'relax', 1), a('VinWonders Nha Trang', 900, 'adventure', 1), a('Chùa Long Sơn', 0, 'culture', 1),
        a('Chợ đêm Nha Trang', 0, 'shopping,food', 2), a('Dạo biển buổi tối', 0, 'relax', 2)],
      food: [f('Bún sứa', 40), f('Nem nướng Ninh Hòa', 70), f('Bánh canh chả cá', 40), f('Hải sản', 250)],
      tip: ['Xuân nắng đẹp, biển êm.', 'Hè là mùa biển cao điểm — nhớ chống nắng.', 'Thu có mưa, giá phòng giảm.', 'Đông có thể biển động, nhiều đợt mưa.'] },
    'Phú Quốc': { m: 1.25, tr: 180,
      act: [a('Bãi Sao', 0, 'beach,relax', 0), a('Suối Tranh', 40, 'nature', 0), a('Lặn san hô / tour 4 đảo', 600, 'beach,adventure', 0),
        a('Nhà tù Phú Quốc', 0, 'culture', 1), a('Cơ sở nước mắm & vườn tiêu', 0, 'shopping,culture', 1), a('Cáp treo Hòn Thơm', 600, 'adventure,nature', 1), a('VinWonders Phú Quốc', 950, 'adventure', 1),
        a('Hoàng hôn Dinh Cậu', 0, 'relax', 2), a('Chợ đêm Phú Quốc', 0, 'food,shopping', 2)],
      food: [f('Gỏi cá trích', 150), f('Bún quậy', 60), f('Bún kèn', 50), f('Hải sản', 300)],
      tip: ['Xuân là mùa khô, biển đẹp.', 'Hè là mùa mưa, biển có thể động — kiểm tra lịch tàu/cano.', 'Thu mưa nhiều, giá thấp.', 'Đông là mùa khô, biển đẹp và đông khách — nên đặt sớm.'] },
    'TP.HCM': { m: 1.05, tr: 130,
      act: [a('Nhà thờ Đức Bà & Bưu điện TP', 0, 'culture', 0), a('Dinh Độc Lập', 65, 'culture', 0), a('Bảo tàng Chứng tích Chiến tranh', 40, 'culture', 0),
        a('Chợ Bến Thành', 0, 'shopping,food', 1), a('Chợ Lớn & chùa Bà Thiên Hậu', 0, 'culture', 1), a('Địa đạo Củ Chi (tour)', 300, 'culture,adventure', 1), a('Rừng ngập mặn Cần Giờ', 200, 'nature', 1),
        a('Phố đi bộ Nguyễn Huệ', 0, 'relax', 2), a('Phố ẩm thực Vĩnh Khánh', 0, 'food', 2), a('Bitexco Skydeck', 240, 'relax,culture', 2)],
      food: [f('Cơm tấm', 50), f('Hủ tiếu', 50), f('Bánh mì', 25), f('Ốc', 150)],
      tip: ['Xuân nắng nóng, khô ráo.', 'Hè là mùa mưa, thường mưa chiều — mang áo mưa.', 'Thu mưa nhiều, có thể ngập cục bộ.', 'Đông (mùa khô) dễ chịu nhất để đi chơi.'] }
  };

  const fmt = n => (Math.round(n / 10000) * 10000).toLocaleString('vi-VN') + 'đ';
  const val = (id, def) => { const el = document.getElementById(id); return el ? el.value : def; };

  function fixedCost(d, tier, days, pax, group) {
    const rooms = group === 'Một mình' ? 1 : Math.ceil(pax / 2);
    const nights = Math.max(days - 1, 0);
    return {
      rooms, nights,
      lodge: LODGE[tier] * K * d.m * rooms * nights,
      food: FOOD[tier] * K * d.m * pax * days * (group === 'Gia đình' ? 1.1 : 1),
      trans: d.tr * K * Math.ceil(pax / 3) * days
    };
  }
  const sum = c => c.lodge + c.food + c.trans;

  window.generatePlan = function generatePlan() {
    const destName = val('aiDest', 'Hà Nội');
    const d = D[destName] || D['Hà Nội'];
    const days = Math.min(14, Math.max(1, parseInt(val('aiDays', 3), 10) || 3));
    const budget = Math.max(0, parseInt(val('aiBudget', 5000000), 10) || 0);
    const pax = Math.min(20, Math.max(1, parseInt(val('aiPax', 2), 10) || 2));
    const group = val('aiGroup', 'Cặp đôi');
    const season = val('aiSeason', 'Xuân');
    const seasonIdx = Math.max(0, ['Xuân', 'Hè', 'Thu', 'Đông'].indexOf(season));
    const prefs = Array.from(document.querySelectorAll('#aiPrefs input:checked')).map(i => i.value);

    const reserve = 0.08;                 // quỹ dự phòng
    const usable = budget * (1 - reserve);

    // 1) Chọn hạng lưu trú/ăn uống cao nhất mà vẫn chừa >= ~14% cho hoạt động
    let tier = 0, fixed = fixedCost(d, 0, days, pax, group);
    for (let t = 2; t >= 0; t--) {
      const c = fixedCost(d, t, days, pax, group);
      if (sum(c) <= budget * 0.78) { tier = t; fixed = c; break; }
    }
    const tooLow = sum(fixed) > usable;
    let maxDays = days;
    if (tooLow) {
      maxDays = 0;
      for (let k = days; k >= 1; k--) { if (sum(fixedCost(d, 0, k, pax, group)) <= usable) { maxDays = k; break; } }
    }

    // 2) Chọn hoạt động theo sở thích, trong phần ngân sách còn lại
    let actBudget = Math.max(0, usable - sum(fixed));
    const dayPlan = Array.from({ length: days }, () => [null, null, null]);
    const cand = d.act.map(x => ({ ...x, score: x.tags.filter(t => prefs.includes(t)).length * 3 + (x.price === 0 ? 1 : 0) }))
      .sort((p, q) => q.score - p.score || p.price - q.price);
    let actTotal = 0;
    cand.forEach(x => {
      const cost = x.price * pax;
      if (cost > actBudget) return;
      if (prefs.length && x.score === (x.price === 0 ? 1 : 0) && x.price > 0) return; // trả phí mà không hợp sở thích → bỏ
      let best = -1, bestN = 99;
      dayPlan.forEach((slots, i) => {
        if (slots[x.slot]) return;
        const n = slots.filter(Boolean).length;
        if (n < bestN) { bestN = n; best = i; }
      });
      if (best < 0) return;
      dayPlan[best][x.slot] = x;
      actBudget -= cost; actTotal += cost;
    });

    const filler = ['Ăn sáng đặc sản & dạo quanh khu lưu trú', 'Nghỉ ngơi, cà phê địa phương', 'Ăn tối & dạo phố đêm'];
    const total = sum(fixed) + actTotal;
    const remain = budget - total;

    // ---- Render ----
    const sum$ = document.getElementById('planSummary');
    if (sum$) {
      sum$.innerHTML = `
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px">
          <div><div style="font-size:.75rem;color:var(--text-muted)">Điểm đến</div><b>${destName}</b> · ${days} ngày · ${pax} người</div>
          <div><div style="font-size:.75rem;color:var(--text-muted)">Hạng chi tiêu</div><b>${TIERS[tier]}</b></div>
          <div><div style="font-size:.75rem;color:var(--text-muted)">Ngân sách</div><b>${fmt(budget)}</b></div>
          <div><div style="font-size:.75rem;color:var(--text-muted)">Dự kiến chi</div><b>${fmt(total)}</b></div>
          <div><div style="font-size:.75rem;color:var(--text-muted)">Còn lại</div><b style="color:${remain < 0 ? 'var(--danger)' : 'inherit'}">${fmt(remain)}</b></div>
          <div><div style="font-size:.75rem;color:var(--text-muted)">Bình quân</div><b>${fmt(total / pax / days)}</b>/người/ngày</div>
        </div>
        <div style="margin-top:10px;font-size:.8rem;color:var(--text-muted)">Đã tính ${Math.round(reserve * 100)}% quỹ dự phòng. Chưa gồm vé máy bay/xe liên tỉnh. Giá là ước tính.</div>`;
    }

    const rows = [['Lưu trú (' + fixed.nights + ' đêm × ' + fixed.rooms + ' phòng)', fixed.lodge], ['Ăn uống', fixed.food], ['Di chuyển nội tỉnh', fixed.trans], ['Vé & hoạt động', actTotal], ['Dự phòng còn lại', Math.max(remain, 0)]];
    const base = Math.max(budget, total, 1);
    let html = '';

    if (tooLow) {
      html += `<div class="dash-card" style="border-left:4px solid var(--danger)"><b><i class="fas fa-triangle-exclamation"></i> Ngân sách thấp hơn mức tối thiểu ước tính</b>
        <div style="margin-top:6px;font-size:.9rem">Với ${days} ngày cho ${pax} người ở ${destName}, mức tiết kiệm nhất cần khoảng <b>${fmt(sum(fixed) / (1 - reserve))}</b>.
        ${maxDays > 0 ? `Gợi ý: giảm xuống <b>${maxDays} ngày</b> hoặc tăng ngân sách.` : 'Gợi ý: tăng ngân sách hoặc giảm số người.'}</div></div><div style="height:16px"></div>`;
    }

    html += `<div class="dash-card"><h5>3. Chi phí theo hạng mục</h5>` + rows.map(([n, v]) => `
      <div style="margin:10px 0"><div style="display:flex;justify-content:space-between;font-size:.88rem"><span>${n}</span><b>${fmt(v)}</b></div>
      <div style="height:8px;border-radius:6px;background:rgba(128,128,128,.18);overflow:hidden"><div style="height:100%;width:${Math.min(100, v / base * 100).toFixed(1)}%;background:var(--primary,#0a7d6e)"></div></div></div>`).join('') + `</div>
      <div style="height:16px"></div><h5 style="margin-bottom:12px">4. Lịch trình chi tiết</h5>`;

    dayPlan.forEach((slots, i) => {
      const actCost = slots.reduce((s, x) => s + (x ? x.price * pax : 0), 0);
      const foodDay = fixed.food / days, transDay = fixed.trans / days;
      const lodgeDay = i < fixed.nights ? fixed.lodge / Math.max(fixed.nights, 1) : 0;
      const meals = [d.food[(i * 2) % d.food.length], d.food[(i * 2 + 1) % d.food.length]];
      html += `<div class="dash-card" style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px"><h5 style="margin:0">Ngày ${i + 1}</h5><b>~${fmt(actCost + foodDay + transDay + lodgeDay)}</b></div>
        <ul style="list-style:none;padding:0;margin:10px 0 0">` + slots.map((x, s) => `
          <li style="padding:8px 0;border-top:1px solid rgba(128,128,128,.2);display:flex;justify-content:space-between;gap:10px">
            <span><span class="tag">${SLOTS[s]}</span> ${x ? x.name : filler[s]}${x ? ' <small style="color:var(--text-muted)">· ' + x.tags.map(t => TAGS[t]).join(', ') + '</small>' : ''}</span>
            <span style="white-space:nowrap">${x && x.price ? fmt(x.price * pax) : 'Miễn phí'}</span></li>`).join('') + `</ul>
        <div style="margin-top:8px;font-size:.84rem;color:var(--text-muted)"><i class="fas fa-utensils"></i> Món nên thử: ${meals.map(m => m.name + ' (~' + fmt(m.price) + '/người)').join(', ')}
          · Ăn uống ~${fmt(foodDay)} · Di chuyển ~${fmt(transDay)}${lodgeDay ? ' · Lưu trú ~' + fmt(lodgeDay) : ''}</div></div>`;
    });

    const tips = [d.tip[seasonIdx]];
    if (remain > budget * 0.15 && tier < 2) tips.push('Ngân sách còn dư khá nhiều — có thể nâng hạng khách sạn hoặc thêm 1 hoạt động trả phí.');
    if (remain < 0) tips.push('Đang vượt ngân sách — hãy giảm số ngày/người hoặc chọn bớt hoạt động trả phí.');
    tips.push('Đặt vé và phòng sớm, so sánh nhiều nền tảng; ưu tiên quán địa phương để tiết kiệm.');
    html += `<div class="dash-card"><h5>Lưu ý</h5><ul style="margin:0;padding-left:18px;font-size:.9rem">${tips.map(t => '<li>' + t + '</li>').join('')}</ul></div>`;

    const res = document.getElementById('planResult');
    if (res) { res.innerHTML = html; res.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    window.lastPlan = { dest: destName, days, budget, pax, tier: TIERS[tier], total, remain, dayPlan };
  };
})();
