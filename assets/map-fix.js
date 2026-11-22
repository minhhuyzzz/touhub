/* TOUR-HUB v18 – Sửa bản đồ: nguồn ô bản đồ dự phòng, tự chỉnh kích thước, chống khởi tạo trùng */
(function(){
  'use strict';
  var IDS=['storyMap','foodMap','ciDetailMap','checkinMap','heatMap','foodDetMap','svcDetMap','ciDetMap'];
  var NOTE='<div class="th-map-off"><i class="fas fa-map-marked-alt"></i><b>Không tải được bản đồ</b><span>Vui lòng kiểm tra kết nối mạng rồi tải lại trang.</span><button type="button" onclick="location.reload()">Tải lại</button></div>';
  /* Thư viện Leaflet không tải được: hiện khung thông báo thay vì ô trống */
  if(!window.L){
    var show=function(){IDS.forEach(function(id){var e=document.getElementById(id);if(e&&!e.firstChild)e.innerHTML=NOTE})};
    new MutationObserver(function(){setTimeout(show,1500)}).observe(document.documentElement,{childList:true,subtree:true});
    window.addEventListener('load',function(){setTimeout(show,800)});
    return;
  }
  var P=[
    ['https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',{subdomains:'abcd',maxZoom:19,attribution:'&copy; OpenStreetMap &copy; CARTO'}],
    ['https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',{subdomains:'abc',maxZoom:19,attribution:'Tiles &copy; Esri'}],
    ['https://tile.openstreetmap.org/{z}/{x}/{y}.png',{subdomains:'abc',maxZoom:19,attribution:'&copy; OpenStreetMap'}]
  ];
  var origTile=L.tileLayer;
  /* OSM từ chối ô bản đồ khi thiếu Referer (mở file trực tiếp) và đã bỏ tên miền phụ {s}: dùng chuỗi nguồn có dự phòng */
  L.tileLayer=function(url,opts){
    if(!/tile\.openstreetmap\.org/.test(url||''))return origTile.apply(L,arguments);
    var i=0,ok=0,bad=0,lay=origTile(P[0][0],L.extend({},P[0][1],{referrerPolicy:'origin'}));
    lay.on('tileload',function(){ok++;var c=lay._map&&lay._map.getContainer().querySelector('.th-map-off');if(c)c.remove()});
    lay.on('tileerror',function(){
      bad++;if(ok||bad<3)return;bad=0;
      if(i<P.length-1){i++;var old=lay.options.attribution;lay.options.subdomains=P[i][1].subdomains;lay.options.attribution=P[i][1].attribution;
        var m=lay._map;if(m&&m.attributionControl){m.attributionControl.removeAttribution(old);m.attributionControl.addAttribution(lay.options.attribution)}
        lay.setUrl(P[i][0]);
      }else if(lay._map){var c=lay._map.getContainer();if(!c.querySelector('.th-map-off'))c.insertAdjacentHTML('beforeend',NOTE)}
    });
    return lay;
  };
  /* Chống "Map container is already initialized" và container không tồn tại */
  var stub=new Proxy(function(){},{get:function(t,k){return k==='then'?undefined:stub},apply:function(){return stub}});
  L.map=function(id,o){
    var el=typeof id==='string'?document.getElementById(id):id;
    if(!el)return stub;
    if(el._leaflet_id){try{if(el.__thmap)el.__thmap.remove()}catch(e){}el._leaflet_id=null;el.innerHTML=''}
    var m=new L.Map(el,o);el.__thmap=m;return m;
  };
  /* Bản đồ nằm trong tab ẩn hoặc cửa sổ đang mở có kích thước 0: tự tính lại */
  L.Map.addInitHook(function(){
    var m=this,c=m.getContainer(),fix=function(){try{m.invalidateSize({animate:false})}catch(e){}};
    [60,250,700,1500].forEach(function(t){setTimeout(fix,t)});
    if(window.ResizeObserver)new ResizeObserver(fix).observe(c);
  });
  try{L.Icon.Default.imagePath='https://unpkg.com/leaflet@1.9.4/dist/images/'}catch(e){}
})();
