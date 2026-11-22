/* TOUR-HUB — Sửa camera quét QR bị lệch/méo/lật
 * Ghi đè window.startScan / window.stopScan. Nạp SAU app.js & router.js.
 * - Dùng camera sau, không lật gương, object-fit: cover (không bị kéo méo)
 * - Khung quét luôn ở giữa; vùng giải mã = đúng vùng vuông đang hiển thị
 */
(function () {
  'use strict';
  const $ = id => document.getElementById(id);

  const style = document.createElement('style');
  style.textContent = `
    #qrVideoWrap{position:relative;width:100%;max-width:520px;margin:0 auto;aspect-ratio:1/1;overflow:hidden;background:#000}
    #qrVideoWrap video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;transform:none!important;display:block}
    #qrVideoWrap .qr-frame{position:absolute;top:50%;left:50%;right:auto;bottom:auto;margin:0;width:62%;height:auto;aspect-ratio:1/1;transform:translate(-50%,-50%);pointer-events:none}
    #qrCanvas{display:none!important}`;
  document.head.appendChild(style);

  let stream = null, raf = 0, last = 0, running = false;

  function setStatus(t) { const s = $('qrStatus'); if (s) s.textContent = t; }
  function setHelp(html) { const h = $('qrErrorHelp'); if (h) { h.innerHTML = html || ''; h.style.display = html ? 'block' : 'none'; } }
  function buttons(on) {
    const a = $('btnStartScan'), b = $('btnStopScan');
    if (a) a.disabled = on;
    if (b) b.disabled = !on;
  }

  function stop(silent) {
    running = false;
    cancelAnimationFrame(raf);
    if (stream) { stream.getTracks().forEach(t => t.stop()); stream = null; }
    const v = $('qrVideo'), w = $('qrVideoWrap');
    if (v) { v.pause(); v.srcObject = null; v.style.display = 'none'; }
    if (w) w.classList.add('empty');
    buttons(false);
    if (!silent) setStatus('Đã dừng camera. Nhấn "Mở camera" để quét lại.');
  }

  function tick(ts) {
    if (!running) return;
    raf = requestAnimationFrame(tick);
    if (ts - last < 120) return; // ~8 lần/giây
    last = ts;
    const v = $('qrVideo'), c = $('qrCanvas');
    if (!v || !c || v.readyState < 2 || !v.videoWidth || !window.jsQR) return;
    // Cắt đúng vùng vuông ở giữa — trùng với vùng hiển thị (object-fit: cover)
    const vw = v.videoWidth, vh = v.videoHeight, s = Math.min(vw, vh);
    const out = Math.min(480, s);
    c.width = c.height = out;
    const ctx = c.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(v, (vw - s) / 2, (vh - s) / 2, s, s, 0, 0, out, out);
    const img = ctx.getImageData(0, 0, out, out);
    const code = window.jsQR(img.data, out, out, { inversionAttempts: 'attemptBoth' });
    if (code && code.data) {
      const data = String(code.data).trim();
      if (!data) return;
      if (navigator.vibrate) navigator.vibrate(60);
      stop(true);
      setStatus('Đã quét: ' + data);
      if (typeof window.onScan === 'function') window.onScan(data);
    }
  }

  async function start() {
    setHelp('');
    const secure = window.isSecureContext || ['localhost', '127.0.0.1'].includes(location.hostname);
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !secure) {
      setStatus('Không mở được camera.');
      setHelp('Trình duyệt chỉ cho dùng camera trên <b>HTTPS</b> (hoặc localhost). Hãy mở trang bằng https:// hoặc dùng "Mô phỏng quét" / nhập mã thủ công.');
      return;
    }
    stop(true);
    setStatus('Đang mở camera…');
    try {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { ideal: 'environment' }, width: { ideal: 1280 }, height: { ideal: 720 } }, audio: false
        });
      } catch (e1) {
        if (e1 && (e1.name === 'NotAllowedError' || e1.name === 'SecurityError')) throw e1;
        stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false }); // máy không có camera sau
      }
      const v = $('qrVideo'), w = $('qrVideoWrap');
      v.setAttribute('playsinline', ''); v.muted = true;
      v.srcObject = stream;
      v.style.display = 'block';
      if (w) w.classList.remove('empty');
      await v.play();
      running = true; last = 0;
      buttons(true);
      setStatus('Đưa mã QR vào giữa khung để quét…');
      raf = requestAnimationFrame(tick);
    } catch (e) {
      stop(true);
      const n = e && e.name;
      setStatus('Không mở được camera.');
      setHelp(n === 'NotAllowedError' ? 'Bạn đã chặn quyền camera. Bấm biểu tượng ổ khóa trên thanh địa chỉ → cho phép Camera → tải lại trang.'
        : n === 'NotFoundError' ? 'Không tìm thấy camera trên thiết bị này.'
        : n === 'NotReadableError' ? 'Camera đang được ứng dụng khác sử dụng. Hãy đóng ứng dụng đó rồi thử lại.'
        : 'Lỗi camera: ' + (e && e.message ? e.message : n));
    }
  }

  window.startScan = start;
  window.stopScan = function () { stop(false); };
  document.addEventListener('visibilitychange', () => { if (document.hidden && running) stop(false); });
  window.addEventListener('pagehide', () => stop(true));
})();
