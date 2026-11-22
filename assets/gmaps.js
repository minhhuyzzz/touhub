/* TOUR-HUB – Lớp kết nối Google Maps
   - Không cần khóa API: dùng bản nhúng Google Maps (dữ liệu trực tiếp của Google: vị trí, ảnh, đánh giá,
     giờ mở cửa, mức "đang đông" tại thời điểm hiện tại khi địa điểm có dữ liệu).
   - Có khóa Maps Embed API (miễn phí): đặt window.TH_CONFIG.gmapsKey='AIza...' trước khi nạp file này. */
(function () {
  'use strict';
  window.TH_CONFIG = window.TH_CONFIG || { gmapsKey: '' };

  function qs(o) {
    o = o || {};
    if (o.q) return encodeURIComponent(o.q);
    if (o.lat != null && o.lng != null) return o.lat + ',' + o.lng;
    return encodeURIComponent('Việt Nam');
  }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  /* Địa chỉ nhúng */
  window.thGUrl = function (o) {
    var z = o.zoom || 14, key = (window.TH_CONFIG || {}).gmapsKey;
    if (key) return 'https://www.google.com/maps/embed/v1/place?key=' + encodeURIComponent(key) + '&q=' + qs(o) + '&zoom=' + z + '&language=vi&region=VN';
    return 'https://www.google.com/maps?q=' + qs(o) + '&z=' + z + '&hl=vi&output=embed';
  };
  /* Mở ứng dụng/trang Google Maps */
  window.thGOpen = function (o) { return 'https://www.google.com/maps/search/?api=1&query=' + qs(o); };
  /* Chỉ đường (từ vị trí hiện tại của người dùng) */
  window.thGDir = function (o, mode) { return 'https://www.google.com/maps/dir/?api=1&destination=' + qs(o) + '&travelmode=' + (mode || 'driving'); };
  /* Lộ trình nhiều điểm: names = mảng tên điểm; điểm đầu = xuất phát, điểm cuối = đích */
  window.thGRoute = function (names, mode) {
    names = (names || []).filter(Boolean);
    if (names.length < 2) return window.thGOpen({ q: names[0] });
    var mid = names.slice(1, -1).slice(0, 8).map(encodeURIComponent).join('%7C');
    return 'https://www.google.com/maps/dir/?api=1&origin=' + encodeURIComponent(names[0]) +
      '&destination=' + encodeURIComponent(names[names.length - 1]) + (mid ? '&waypoints=' + mid : '') +
      '&travelmode=' + (mode || 'driving');
  };

  /* Vẽ bản đồ Google vào một khung có sẵn */
  window.thGMap = function (id, o) {
    var el = typeof id === 'string' ? document.getElementById(id) : id;
    if (!el) return null;
    o = o || {};
    var title = esc(o.title || o.q || 'Bản đồ Google');
    el.classList.add('th-gm');
    el.innerHTML = '<iframe class="th-gm-frame" title="Google Maps: ' + title + '" loading="lazy" allowfullscreen ' +
      'referrerpolicy="no-referrer-when-downgrade" src="' + esc(window.thGUrl(o)) + '"></iframe>';
    var nxt = el.nextElementSibling;
    if (nxt && nxt.classList.contains('th-gm-bar')) nxt.remove();
    if (o.bar !== false) {
      el.insertAdjacentHTML('afterend',
        '<div class="th-gm-bar">' +
        '<a class="th-gm-btn" target="_blank" rel="noopener" href="' + esc(window.thGOpen(o)) + '"><i class="fas fa-up-right-from-square"></i> Mở Google Maps</a>' +
        '<a class="th-gm-btn pri" target="_blank" rel="noopener" href="' + esc(window.thGDir(o)) + '"><i class="fas fa-diamond-turn-right"></i> Chỉ đường</a>' +
        '</div>');
    }
    return el;
  };

  /* Kiểu dáng dùng chung */
  var css = '.th-gm{position:relative;overflow:hidden;background:#e9efec}' +
    '.th-gm-frame{width:100%;height:100%;min-height:220px;border:0;display:block}' +
    '.th-gm-bar{display:flex;gap:8px;flex-wrap:wrap;margin-top:8px}' +
    '.th-gm-btn{flex:1 1 140px;text-align:center;padding:9px 12px;border-radius:10px;border:1px solid var(--border,#d5e2dc);' +
    'background:var(--surface,#fff);color:var(--text,#0a2540);font-weight:600;font-size:.86rem;text-decoration:none;cursor:pointer}' +
    '.th-gm-btn:hover{border-color:#15a05a;color:#0d7a43}' +
    '.th-gm-btn.pri{background:#15a05a;border-color:#15a05a;color:#fff}.th-gm-btn.pri:hover{background:#0d7a43;color:#fff}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
})();
