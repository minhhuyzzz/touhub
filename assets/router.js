
/* ===== Định tuyến nhiều file: mỗi tab là một file HTML riêng ===== */
(function(){
  var FILES={home:'index.html',qr:'qr.html',story:'story.html',food:'food.html',service:'service.html',checkin:'checkin.html',ocop:'ocop.html',guide:'guide.html',planner:'planner.html',crowd:'crowd.html'};
  function callFn(n,id){ if(/^[A-Za-z_$][\w$]*$/.test(n)&&typeof window[n]==='function') return window[n](id); }
  var prev=window.go;
  window.go=function(p){
    if(document.getElementById('page-'+p)) return prev.apply(this,arguments);
    if(FILES[p]){ location.href=FILES[p]; return; }
    if(typeof window.toast==='function') window.toast('Trang bạn chọn chưa khả dụng.','warn');
    return prev.apply(this,arguments);
  };
  /* mở trang chi tiết: nếu tab nằm ở file khác thì chuyển file rồi mở sau khi tải xong */
  window.goDetail=function(p,fn,id){
    if(document.getElementById('page-'+p)){ window.go(p); setTimeout(function(){ callFn(fn,id); },120); }
    else { try{sessionStorage.setItem('th_pending',JSON.stringify([p,fn,id]));}catch(e){} location.href=FILES[p]; }
  };
  document.addEventListener('DOMContentLoaded',function(){
    if(window.TH_PAGE) window.go(window.TH_PAGE);
    var raw=null; try{raw=sessionStorage.getItem('th_pending');sessionStorage.removeItem('th_pending');}catch(e){}
    if(raw){ try{ var a=JSON.parse(raw); if(a[0]===window.TH_PAGE) setTimeout(function(){ callFn(a[1],a[2]); },250); }catch(e){} }
  });
})();
