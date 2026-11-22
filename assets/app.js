
  
/* ============================================================
   TOUR-HUB v9 — Production-Ready Smart Tourism Platform
   Single-file demo. localStorage-backed mock backend.
   Architecture documented at bottom of file.
   ============================================================ */

// ========= MOCK DATA =========
const IMG = {
 
  hoian:'https://bloganchoi.com/wp-content/uploads/2023/02/pexels-huy-le-92090-scaled.jpg',
  hue:'https://ik.imagekit.io/tvlk/blog/2025/03/quan-the-di-tich-co-do-hue-2-1024x576.jpg?tr=q-70,c-at_max,w-500,h-300,dpr-2',
  halong:'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=70',
  sapa:'https://www.sapatravel.com/wp-content/uploads/2016/12/sapa-travel-vietnam-tours-best-things-to-do-from-hanoi-01.jpeg',
  dalat:'https://vietpromotion.vn/wp-content/uploads/2022/11/vietpromotion.vn-bo-tui-bi-kip-cam-nang-du-lich-da-lat.jpg',
  miquang:'https://cooponline.vn/tin-tuc/wp-content/uploads/2025/10/mi-quang-mon-dac-san-dam-da-thom-lung-xu-quang.png',
  pho:'https://media.mia.vn/uploads/blog-du-lich/Pho-bat-dan-pho-gia-truyen-100-nam-tuoi-tai-ha-noi-05-1639325605.jpg',
  banhmi:'https://kenhhomestay.com/wp-content/uploads/2022/06/Banh-Mi-Phuong-2.jpg',
  buncha:'assets/img/bun-cha-huong-lien.jpg',
  caphe:'https://caphenguyenchat.net/wp-content/uploads/2019/05/cach-pha-ca-phe-nguyen-chat-05.jpg',
  comtam:'https://i.ytimg.com/vi/h__kLq8NG2I/sddefault.jpg',
  hotel:'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=70',
  resort:'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=70',
  car:'https://images.unsplash.com/photo-1549924231-f129b911e442?w=600&q=70',
  ocop1:'https://kadoza.com/wp-content/uploads/2024/07/Hong-Tra-Shan-Tuyet.jpg',
  ocop2:'https://duongdongfood.com/wp-content/uploads/2025/02/30N-1lit-1chai-600x600.png',
  ocop3:'assets/img/ca-phe-robusta-bmt.jpg',
  ocop4:'https://tamlong.com.vn/wp-content/uploads/banh-dau-xanh-1-3.jpg',
  ocop6:'https://chiaki.vn/upload/news/content/2021/03/yen-sao-khanh-hoa-gia-bao-nhieu-jpg-1616404483-22032021161443.jpg',
  ocop7:'https://tse4.mm.bing.net/th/id/OIP.59VcENSliq2BeEoFtvDbFAHaHa?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3',
  ocop8:'assets/img/banh-pia-soc-trang.jpg',
  ocop5:'assets/img/ocop-dak-lak.jpg',
  guide1:'https://cdn.24h.com.vn/upload/3-2023/images/2023-07-06/Nam-HDV-du-lich-284147075_2391303917690783_1759059313894817549_n-1688633649-137-width860height614.jpg',
  guide2:'https://media.vov.vn/sites/default/files/styles/large/public/2022-09-2/hdv-nhu-ngoc.jpg',
  quangbinh:'https://thanhnien.mediacdn.vn/Uploaded/trantam/2022_09_29/hang-son-doong-chup-man-hinh-cnbc-7488-5118.jpg',
  danang:'https://sun-ecommerce-cdn.azureedge.net/ecommerce/service-sites/asset/SunWorldBaNaHill/google-doc/post_id_12527/AD_4nXf4Y1-a-XVxzlXQuVvZ2bqPKv7vPKxO_IT-9FLPbxStOSOrlYS_ssBQHM9aU_iptj_Ftve0nvuC0ntbkcS9xYtKWv3Ydiu751GYSeWPOz461d7RB3TTax4vZHii316gdD1vbv4kWgq4BSGhOklLpwfDtU1oTg.webp',
  guide3:'https://dulichsaigon.edu.vn/wp-content/uploads/2024/03/the-huong-dan-vien-du-lich-la-gi-thu-tuc-cap-the-huong-dan-vien-du-lich-moi-nhat-1.jpg',
  guide4:'https://kvi.vn/Uploads/786/images/9c3dd7a943198647df08.jpg',
  car:'https://brixtonvietnam.com.vn/wp-content/uploads/2025/08/ban-xe-o-to-cu-innova-2016-di-9-van-km-gia-450-trieu-1.jpg',
  car1:'https://tse1.mm.bing.net/th/id/OIP.FZlU5rHTIVDG7iS4ErN3tQHaE8?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3',
  ve:'https://cdn.kosshop.vn/upload/images/2023/imagespost/images/di-du-lich-ba-na-hill-dau-nam-2025%281%29.jpg',
  ve1:'https://phetravel.com/thumbnails/products/large/uploads/vinwonders-nha-trang-1.jpg.webp'
};

const DB = {
  stories:[
    {id:'s1',name:'Phố cổ Hội An',region:'Miền Trung',format:'Audio',img:IMG.hoian,desc:'Di sản UNESCO 1999, thị trấn 400 năm với kiến trúc Việt-Hoa-Nhật giao thoa, .',rating:4.9,duration:'12 phút',contributor:'HDV Trần Minh',audioSections:['Tổng quan','Chùa Cầu','Hội quán Phúc Kiến']},
    {id:'s2',name:'Cố đô Huế',region:'Miền Trung',format:'Video',img:IMG.hue,desc:'Kinh đô triều Nguyễn 1802-1945. Quần thể di tích Hoàng thành & lăng tẩm.',rating:4.8,duration:'18 phút',contributor:'Sở VHTT Huế'},
    {id:'s3',name:'Vịnh Hạ Long',region:'Miền Bắc',format:'Podcast',img:IMG.halong,desc:'Kỳ quan thiên nhiên thế giới 7 lần được UNESCO công nhận.',rating:4.9,duration:'25 phút',contributor:'BQL Vịnh Hạ Long'},
    {id:'s4',name:'Sa Pa & Fansipan',region:'Miền Bắc',format:'Audio',img:IMG.sapa,desc:'Nóc nhà Đông Dương 3147m & văn hóa H\'Mông, Dao.',rating:4.7,duration:'15 phút',contributor:'HDV Lò Văn'},
    {id:'s5',name:'Đà Lạt',region:'Miền Nam',format:'Video',img:IMG.dalat,desc:'Thành phố ngàn hoa, kiến trúc Pháp cổ giữa cao nguyên Lang Biang.',rating:4.6,duration:'10 phút',contributor:'Cộng đồng'}
  ],
  foods:[
    {id:'f1',name:'Phở Gia Truyền Bát Đàn',region:'Bắc',city:'Hà Nội',img:IMG.pho,price:80000,rating:4.8,desc:'Phở bò gia truyền 4 đời, nước dùng trong thanh.',dishes:['Phở bò tái 80k','Phở bò chín 75k','Phở gầu 95k']},
    {id:'f2',name:'Bún chả Hương Liên',region:'Bắc',city:'Hà Nội',img:IMG.buncha,price:90000,rating:4.7,desc:'Bún chả Obama — nơi tổng thống Mỹ ghé thăm 2016.'},
    {id:'f3',name:'Bánh mì Phượng',region:'Trung',city:'Hội An',img:IMG.banhmi,price:35000,rating:4.9,desc:'Bánh mì "ngon nhất thế giới" theo Anthony Bourdain.'},
    {id:'f4',name:'Cà phê Trứng Giảng',region:'Bắc',city:'Hà Nội',img:IMG.caphe,price:35000,rating:4.6,desc:'Đặc sản cà phê trứng từ 1946.'},
    {id:'f5',name:'Mì Quảng Bà Mua',region:'Trung',city:'Đà Nẵng',img:IMG.miquang,price:45000,rating:4.7,desc:'Mì Quảng truyền thống đậm vị.'},
    {id:'f6',name:'Cơm Tấm Ba Ghiền',region:'Nam',city:'TP.HCM',img:IMG.comtam,price:65000,rating:4.6,desc:'Cơm tấm sườn bì chả nổi tiếng Phú Nhuận.'}
  ],
  services:[
    {id:'sv1',type:'hotel',name:'Furama Resort Đà Nẵng',loc:'Đà Nẵng',img:IMG.resort,price:3500000,rating:4.8,desc:'Resort 5 sao bãi biển Mỹ Khê',stock:8},
    {id:'sv2',type:'hotel',name:'Anantara Hội An',loc:'Hội An',img:IMG.hotel,price:4200000,rating:4.9,desc:'Bên bờ sông Thu Bồn',stock:5},
    {id:'sv3',type:'tour',name:'Tour Hạ Long 2N1Đ',loc:'Hạ Long',img:IMG.halong,price:1800000,rating:4.7,desc:'Du thuyền 4 sao, kayak, hang Sửng Sốt',stock:20},
    {id:'sv4',type:'tour',name:'Tour Sa Pa 3N2Đ',loc:'Sa Pa',img:IMG.sapa,price:2500000,rating:4.6,desc:'Cát Cát, Fansipan, chợ phiên',stock:15},
    {id:'sv5',type:'car',name:'Toyota Innova 7 chỗ',loc:'Đà Nẵng',img:IMG.car,price:1500000,rating:4.5,desc:'Có tài xế, full day',stock:12},
    {id:'sv6',type:'car',name:'Limousine 9 chỗ HN-HL',loc:'Hà Nội',img:IMG.car1,price:280000,rating:4.7,desc:'Hà Nội ↔ Hạ Long',stock:30},
    {id:'sv7',type:'ticket',name:'Vé Bà Nà Hills',loc:'Đà Nẵng',img:IMG.ve,price:950000,rating:4.8,desc:'Cáp treo + Cầu Vàng',stock:200},
    {id:'sv8',type:'ticket',name:'Vé Vinpearl Land',loc:'Phú Quốc',img:IMG.ve1,price:880000,rating:4.7,desc:'Vé trọn ngày',stock:150}

  ],
  
  ocop:[
    {id:'o1',name:'Trà Shan Tuyết Hà Giang',region:'Bắc',star:5,price:450000,img:IMG.ocop1,seller:'HTX Cao Bồ',rating:4.9,sold:1240,desc:'Trà cổ thụ 100-200 năm tuổi'},
    {id:'o2',name:'Nước mắm Phú Quốc Khải Hoàn',region:'Nam',star:5,price:185000,img:IMG.ocop2,seller:'Khải Hoàn',rating:4.8,sold:5600,desc:'40 độ đạm, ủ chượp 12 tháng'},
    {id:'o3',name:'Cà phê Robusta Buôn Ma Thuột',region:'Trung',star:4,price:280000,img:IMG.ocop3,seller:'Trung Nguyên',rating:4.7,sold:3200,desc:'500g rang xay nguyên chất'},
    {id:'o4',name:'Bánh đậu xanh Rồng Vàng',region:'Bắc',star:4,price:65000,img:IMG.ocop4,seller:'Hải Dương',rating:4.6,sold:8900,desc:'Đặc sản Hải Dương 100 năm'},
    {id:'o5',name:'Tiêu Đắk Lắk hữu cơ',region:'Trung',star:5,price:320000,img:IMG.ocop5,seller:'HTX Cư M\'gar',rating:4.8,sold:1850,desc:'Tiêu đen organic'},
    {id:'o6',name:'Yến sào Khánh Hòa',region:'Trung',star:5,price:2800000,img:IMG.ocop6,seller:'Sanest',rating:4.9,sold:420,desc:'Yến tinh chế 100g'},
    {id:'o7',name:'Mật ong rừng U Minh',region:'Nam',star:4,price:380000,img:IMG.ocop7,seller:'HTX U Minh',rating:4.7,sold:2100,desc:'1L mật nguyên chất'},
    {id:'o8',name:'Bánh pía Sóc Trăng',region:'Nam',star:3,price:75000,img:IMG.ocop8,seller:'Tân Huê Viên',rating:4.5,sold:6300,desc:'Hộp 12 bánh đậu xanh sầu riêng'}
  ],
  guides:[
    {id:'g1',name:'Trần Minh',loc:'Hội An',img:IMG.guide1,langs:['Tiếng Anh','Tiếng Pháp'],exp:8,price:1500000,rating:4.9,reviews:127,cert:'Thẻ HDV Quốc tế 2018',bio:'8 năm dẫn tour di sản miền Trung, thông thạo lịch sử Champa.'},
    {id:'g2',name:'Nguyễn Lan',loc:'Hà Nội',img:IMG.guide2,langs:['Tiếng Anh','Tiếng Nhật'],exp:6,price:1200000,rating:4.8,reviews:89,cert:'Thẻ HDV Quốc tế 2020',bio:'Chuyên tour ẩm thực & văn hóa phố cổ Hà Nội.'},
    {id:'g3',name:'Lê Văn Đức',loc:'Sa Pa',img:IMG.guide3,langs:['Tiếng Anh','Tiếng Trung'],exp:10,price:900000,rating:4.9,reviews:215,cert:'HDV bản địa H\'Mông',bio:'Người H\'Mông bản địa, dẫn trekking Fansipan & bản làng.'},
    {id:'g4',name:'Phạm Tuấn',loc:'Đà Nẵng',img:IMG.guide4,langs:['Tiếng Anh','Tiếng Hàn'],exp:5,price:1100000,rating:4.7,reviews:64,cert:'Thẻ HDV Quốc tế 2021',bio:'Chuyên tour Bà Nà - Hội An - Mỹ Sơn cho khách Hàn.'}
  ],
  checkins:[
    {id:'c1',name:'Cầu Vàng Bà Nà',loc:'Đà Nẵng',lat:15.9956,lng:107.9883,img:IMG.danang,user:'travel_minh',likes:1230},
    {id:'c2',name:'Ruộng bậc thang Mù Cang Chải',loc:'Yên Bái',lat:21.7857,lng:104.0863,img:IMG.sapa,user:'yenbai_lover',likes:890},
    {id:'c3',name:'Hang Sơn Đoòng',loc:'Quảng Bình',lat:17.4575,lng:106.2861,img:IMG.quangbinh,user:'explorer_vn',likes:2100},
    {id:'c4',name:'Phố cổ Hội An',loc:'Quảng Nam',lat:15.8801,lng:108.338,img:IMG.hoian,user:'lan_anh',likes:1560},
    {id:'c5',name:'Hồ Tuyền Lâm Đà Lạt',loc:'Lâm Đồng',lat:11.8742,lng:108.3962,img:IMG.dalat,user:'dalat_dreams',likes:720}
  ],
  badges:[
    {name:'Người khám phá',icon:'compass',desc:'Check-in 5 điểm đầu tiên',unlocked:true},
    {name:'Foodie Việt',icon:'utensils',desc:'Thử 10 món vùng miền',unlocked:true},
    {name:'Di sản gia',icon:'landmark',desc:'Ghé 5 di sản UNESCO',unlocked:false},
    {name:'Phượt thủ',icon:'motorcycle',desc:'Đi đủ 3 miền',unlocked:false},
    {name:'OCOP Lover',icon:'shopping-basket',desc:'Mua 10 đặc sản OCOP',unlocked:true},
    {name:'Người kể chuyện',icon:'feather',desc:'Đóng góp 3 câu chuyện',unlocked:false}
  ],
  trending:['Hội An','Phú Quốc','Sa Pa','Bánh mì Phượng','Tour Hạ Long','Cà phê trứng']
};

// ========= DATA AUGMENTATION (derived fields for richer UX) =========
(function augment(){
  const cuisineMap={f1:'Món nước',f2:'Món nướng',f3:'Bánh mì',f4:'Cà phê',f5:'Món nước',f6:'Cơm'};
  const hoursMap={f1:'06:00 - 22:00',f2:'10:00 - 21:00',f3:'06:30 - 19:00',f4:'07:00 - 23:00',f5:'06:00 - 14:00',f6:'10:00 - 21:00'};
  const nowH=new Date().getHours();
  DB.foods.forEach((f,i)=>{
    f.cuisine=cuisineMap[f.id]||'Đặc sản';
    f.hours=hoursMap[f.id]||'08:00 - 22:00';
    const [o,c]=f.hours.split(' - ').map(s=>+s.split(':')[0]);
    f.open=nowH>=o&&nowH<c;
    f.dist=+(0.4+i*0.7+ (i%3)*0.5).toFixed(1); // km demo
    f.sold=f.sold||(2000-i*180);
  });
  DB.services.forEach((s,i)=>{
    // transparent pricing: derive original price + discount
    const off=[0,10,15,20,12,0,18,8][i%8];
    s.discount=off;
    s.oldPrice=off?Math.round(s.price/(1-off/100)/1000)*1000:null;
  });
  DB.ocop.forEach((o,i)=>{ o.stock=[24,60,15,120,8,5,40,200][i%8]; o.dist=+(1+i*0.6).toFixed(1); });

  // Story Hub rich profile data
  const _stories_extra = {
    s1:{lat:15.8801,lng:108.3380,gallery:[IMG.hoian,'https://bcp.cdnchinhphu.vn/334894974524682240/2025/9/18/cdhoian5-17581621538711341831070.jpeg','https://cdn3.ivivu.com/2023/10/du-lich-hoi-an-ivivu-img1.jpg','https://www.victoriahotels.asia/wp-content/uploads/2025/04/Kham-pha-ve-dep-co-kinh-cua-Pho-co-Hoi-An-1.webp'],video:'assets/video/hoi-an.mp4',history:'Phố cổ Hội An hình thành từ cuối thế kỷ 16, là thương cảng quốc tế sầm uất bậc nhất Đông Nam Á nơi giao thoa văn hoá Việt - Hoa - Nhật - Âu. Năm 1999, UNESCO công nhận là Di sản Văn hoá Thế giới.',culture:'Kiến trúc nhà cổ, hội quán người Hoa, Chùa Cầu Nhật Bản, đèn lồng rực rỡ về đêm và lễ hội thả hoa đăng rằm hàng tháng trên sông Hoài.',activities:['Đi bộ phố cổ về đêm','Thả hoa đăng sông Hoài','Học làm đèn lồng','Đạp xe ra làng rau Trà Quế','Tour thuyền thúng rừng dừa Bảy Mẫu'],specialties:['Cao lầu','Mì Quảng','Bánh mì Phượng','Bánh bao - bánh vạc (hoa hồng trắng)','Chè bắp Cẩm Nam'],bestTime:'Tháng 2 - Tháng 4 (khô ráo, ít mưa). Đêm rằm âm lịch đẹp nhất.',cost:'250.000đ vé tham quan phố cổ · Ăn uống 100k-300k/người · Lưu trú 500k-3tr/đêm',contact:'Trung tâm VHTT Hội An · 0235 3861 327'},
    s2:{lat:16.4637,lng:107.5909,gallery:[IMG.hue,'https://cdn.bookingtour.vn/upload/2025/01/04/mceu_96084748411735981236753.jpg','https://khamphahue.com.vn/Portals/0/Medias/Nam2022/T10/QuanTheDiTichCoDoHue-1.jpg','https://danangopentour.vn/uploads/images/images/ngo-mon-hue.jpeg'],video:'assets/video/hue.mp4',history:'Kinh đô của triều Nguyễn từ 1802 đến 1945, Huế là trung tâm chính trị - văn hoá - tôn giáo của Việt Nam suốt 143 năm. Quần thể di tích Cố đô Huế được UNESCO công nhận năm 1993.',culture:'Nhã nhạc cung đình (kiệt tác di sản phi vật thể UNESCO), ẩm thực cung đình, áo dài tím, ca Huế trên sông Hương.',activities:['Tham quan Đại Nội','Du thuyền sông Hương','Viếng lăng Khải Định, Tự Đức, Minh Mạng','Nghe ca Huế','Đạp xe quanh thành nội'],specialties:['Bún bò Huế','Cơm hến','Bánh bèo - nậm - lọc','Chè Huế','Mè xửng'],bestTime:'Tháng 1 - Tháng 4. Tránh tháng 9-11 mùa mưa lũ.',cost:'200.000đ vé Đại Nội · 150.000đ/lăng · Du thuyền 100k/người',contact:'Trung tâm Bảo tồn Di tích Cố đô Huế · 0234 3523 237'},
    s3:{lat:20.9101,lng:107.1839,gallery:[IMG.halong,'https://media.vneconomy.vn/images/upload/2021/06/19/halong.jpg?w=600','https://cdn-images.vtv.vn/thumb_w/730/66349b6076cb4dee98746cf1/2025/11/05/2310haiphong-qninh3-1761182664471-1761182664577568069586-58987289430366643328337-63289824190268940737805.jpg','https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/q1-1715919655953.jpg'],video:'assets/video/ha-long.mp4',history:'Vịnh Hạ Long với gần 2000 hòn đảo đá vôi được hình thành qua 500 triệu năm kiến tạo địa chất. Được UNESCO công nhận Di sản Thiên nhiên Thế giới hai lần (1994, 2000) và là một trong 7 Kỳ quan Thiên nhiên Mới.',culture:'Làng chài nổi Cửa Vạn, Vung Viêng - di sản văn hoá ngư dân vùng biển. Truyền thuyết Rồng Mẹ hạ phàm.',activities:['Du thuyền 2N1Đ','Chèo kayak hang Luồn','Tham quan hang Sửng Sốt','Tắm biển đảo Ti Tốp','Câu mực đêm'],specialties:['Hải sản tươi','Sá sùng','Chả mực Hạ Long','Bún bề bề','Ngán nướng'],bestTime:'Tháng 4 - Tháng 6 và Tháng 9 - Tháng 11.',cost:'290.000đ vé tham quan · Du thuyền 2N1Đ từ 2-8tr/khách',contact:'BQL Vịnh Hạ Long · 0203 3849 264'},
    s4:{lat:22.3364,lng:103.8438,gallery:[IMG.sapa,'https://statics.vinpearl.com/Fansipan-Mountain-01_1682415440.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQ9C1EdWxauf-XvJkQrr-TjLw13k-IByWLg&s','https://booking.muongthanh.com/upload_images/images/H%60/dinh-nui-fansipan.jpg'],video:'assets/video/sapa.mp4',history:'Sa Pa được người Pháp phát hiện và phát triển thành khu nghỉ dưỡng từ năm 1903. Đỉnh Fansipan 3.147m - Nóc nhà Đông Dương được chinh phục lần đầu năm 1905.',culture:'Văn hoá độc đáo của các dân tộc H\'Mông, Dao, Tày, Giáy với chợ phiên Bắc Hà, lễ hội Gầu Tào, thổ cẩm thủ công.',activities:['Cáp treo Fansipan','Trekking bản Cát Cát, Tả Van','Săn mây Ô Quy Hồ','Ngắm ruộng bậc thang','Chợ phiên Bắc Hà chủ nhật'],specialties:['Thắng cố','Cá hồi Sa Pa','Lợn cắp nách','Rượu táo mèo','Cải mèo'],bestTime:'Tháng 9 - Tháng 11 (mùa lúa chín) và Tháng 3 - Tháng 5.',cost:'Cáp treo Fansipan 800.000đ · Trekking 300k-1tr/ngày · Homestay 200k-500k',contact:'Trung tâm Du lịch Sa Pa · 0214 3871 975'},
    s5:{lat:11.9404,lng:108.4583,gallery:[IMG.dalat,'https://ik.imagekit.io/tvlk/blog/2024/08/thoi-tiet-da-lat-2.png','https://dalatravel.vn/wp-content/uploads/2020/10/kinh-nghiem-du-lich-da-lat-tu-a-z-de-trai-nghiem-ve-dep-cuoc-song-1.jpg','https://storage.googleapis.com/blogvxr-uploads/2025/04/1db5b615-dia-diem-du-lich-da-lat-mien-phi-3498062.png'],video:'assets/video/da-lat.mp4',history:'Đà Lạt được bác sĩ Alexandre Yersin phát hiện năm 1893 và phát triển thành thành phố nghỉ dưỡng kiểu Pháp từ 1907. Mệnh danh "Tiểu Paris" của Đông Dương.',culture:'Kiến trúc Pháp cổ với hơn 1000 biệt thự, văn hoá cà phê - nghệ thuật, lễ hội hoa Đà Lạt 2 năm/lần.',activities:['Ngắm hoa Vườn Hoa Thành Phố','Chèo SUP hồ Tuyền Lâm','Cà phê săn mây Cầu Đất','Tham quan Dinh Bảo Đại','Chợ đêm Đà Lạt'],specialties:['Bánh tráng nướng','Atisô','Dâu tây','Cà phê Cầu Đất','Rượu vang Đà Lạt'],bestTime:'Quanh năm. Đẹp nhất Tháng 10 - Tháng 12 (mùa hoa dã quỳ) và Tháng 3 (hoa mai anh đào).',cost:'Vé tham quan 30k-50k/điểm · Lưu trú 300k-2tr · Ăn uống 80k-200k/người',contact:'TT Xúc tiến Du lịch Lâm Đồng · 0263 3822 342'}
  };
  DB.stories.forEach(s=>{ Object.assign(s, _stories_extra[s.id]||{}); });

})();



// ========= STATE =========
const State = {
  user: JSON.parse(localStorage.getItem('th_user')||'null'),
  cart: JSON.parse(localStorage.getItem('th_cart')||'[]'),
  wishlist: JSON.parse(localStorage.getItem('th_wishlist')||'[]'),
  orders: JSON.parse(localStorage.getItem('th_orders')||'[]'),
  plans: JSON.parse(localStorage.getItem('th_plans')||'[]'),
  history: JSON.parse(localStorage.getItem('th_history')||'[]'),
  postcards: JSON.parse(localStorage.getItem('th_postcards')||'[]'),
  pendingTxn: JSON.parse(localStorage.getItem('th_pendingTxn')||'null'),
  svcType: 'hotel',
  svcFilters: {},
  payMethod: 'vietqr',
  payContext: null,
  paying: false
};
function save(){
  localStorage.setItem('th_user',JSON.stringify(State.user));
  localStorage.setItem('th_cart',JSON.stringify(State.cart));
  localStorage.setItem('th_wishlist',JSON.stringify(State.wishlist));
  localStorage.setItem('th_orders',JSON.stringify(State.orders));
  localStorage.setItem('th_plans',JSON.stringify(State.plans));
  localStorage.setItem('th_history',JSON.stringify(State.history));
  localStorage.setItem('th_pendingTxn',JSON.stringify(State.pendingTxn));
  localStorage.setItem('th_postcards',JSON.stringify(State.postcards||[]));
}

// ========= UTILS =========
const $ = s=>document.querySelector(s);
const $$ = s=>document.querySelectorAll(s);
const fmt = n=>new Intl.NumberFormat('vi-VN').format(Math.round(n))+'đ';
function toast(msg,type=''){const t=$('#toast');t.textContent=msg;t.className=type;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2400);}
function closeModal(id){$('#'+id).classList.remove('show')}
function openModal(id){$('#'+id).classList.add('show')}
// Bỏ dấu tiếng Việt -> tìm kiếm không dấu
function noDiacritics(s){return (s||'').toString().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').replace(/Đ/g,'D').toLowerCase().trim();}
// Khoảng cách Levenshtein cho tìm gần đúng (sai chính tả)
function levenshtein(a,b){const m=a.length,n=b.length;if(!m)return n;if(!n)return m;const dp=Array.from({length:m+1},(_,i)=>[i,...Array(n).fill(0)]);for(let j=0;j<=n;j++)dp[0][j]=j;for(let i=1;i<=m;i++)for(let j=1;j<=n;j++)dp[i][j]=Math.min(dp[i-1][j]+1,dp[i][j-1]+1,dp[i-1][j-1]+(a[i-1]===b[j-1]?0:1));return dp[m][n];}
// Điểm liên quan: 3=khớp đầu, 2=chứa, 1=gần đúng, 0=không
function relevance(text,q){const t=noDiacritics(text),nq=noDiacritics(q);if(!nq)return 0;if(t.startsWith(nq))return 3;if(t.includes(nq))return 2;const words=t.split(/\s+/);for(const w of words){if(w.length>2&&levenshtein(w,nq)<=Math.max(1,Math.floor(nq.length/4)))return 1;}return 0;}
function highlight(text,q){const nq=noDiacritics(q);if(!nq)return text;const nt=noDiacritics(text);const idx=nt.indexOf(nq);if(idx<0)return text;return text.slice(0,idx)+'<mark class="hl">'+text.slice(idx,idx+q.length)+'</mark>'+text.slice(idx+q.length);}
function debounce(fn,ms){let t;return function(...a){clearTimeout(t);t=setTimeout(()=>fn.apply(this,a),ms);};}
// Haversine khoảng cách (km) cho xác thực vị trí check-in
function haversine(lat1,lng1,lat2,lng2){const R=6371,dLat=(lat2-lat1)*Math.PI/180,dLng=(lng2-lng1)*Math.PI/180;const a=Math.sin(dLat/2)**2+Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLng/2)**2;return R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));}
const lazy = 'loading="lazy" decoding="async"';


// ========= ROUTING =========
function go(page){
  if(page!=='qr')stopScan();
  // Lưu vị trí cuộn của service để khôi phục
  if($('#page-service')?.classList.contains('active'))State.svcScroll=window.scrollY;
  $$('.page').forEach(p=>p.classList.remove('active'));
  const el=$('#page-'+page);
  if(el)el.classList.add('active');
  $$('.nav-link').forEach(l=>l.classList.toggle('active',l.dataset.page===page));
  $$('.mob-nav button').forEach(b=>b.classList.toggle('active',b.dataset.mp===page));
  window.scrollTo({top:0,behavior:'smooth'});
  if(page==='story')renderStory();
  if(page==='food')renderFood();
  if(page==='service'){renderService();if(State.svcScroll)setTimeout(()=>window.scrollTo({top:State.svcScroll}),60);}
  if(page==='checkin'){renderFeed();}
  if(page==='ocop')renderOcop();
  if(page==='guide')renderGuide();
  if(page==='profile')renderProfile();
  if(page==='admin')renderAdmin();
}


// ========= THEME =========
function toggleTheme(){
  const cur=document.documentElement.getAttribute('data-theme');
  const next=cur==='dark'?'light':'dark';
  document.documentElement.setAttribute('data-theme',next);
  $('#themeIcon').className=next==='dark'?'fas fa-sun':'fas fa-moon';
  localStorage.setItem('th_theme',next);
}
if(localStorage.getItem('th_theme')==='dark'){document.documentElement.setAttribute('data-theme','dark');document.addEventListener('DOMContentLoaded',()=>$('#themeIcon').className='fas fa-sun');}

// ========= AUTH =========
function openAuth(){openModal('authModal')}
function switchAuth(t){$$('#authModal .tab').forEach(b=>b.classList.toggle('active',b.dataset.atab===t));$('#auth-login').style.display=t==='login'?'block':'none';$('#auth-register').style.display=t==='register'?'block':'none';}
function register(){
  const name=$('#rgName').value.trim(),email=$('#rgEmail').value.trim(),pass=$('#rgPass').value;
  if(!name||!email||!pass)return toast('Vui lòng điền đầy đủ','error');
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return toast('Email không hợp lệ','error');
  if(pass.length<6)return toast('Mật khẩu tối thiểu 6 ký tự','error');
  State.user={name,email,avatar:name[0].toUpperCase(),joined:new Date().toISOString()};save();updateAuthUI();closeModal('authModal');toast('Đăng ký thành công!','success');
}
function login(){
  const email=$('#liEmail').value.trim(),pass=$('#liPass').value;
  if(!email||!pass)return toast('Vui lòng nhập email & mật khẩu','error');
  State.user={name:email.split('@')[0],email,avatar:email[0].toUpperCase()};save();updateAuthUI();closeModal('authModal');toast('Đăng nhập thành công!','success');
}
function socialLogin(provider){State.user={name:'Du khách '+provider,email:'demo@'+provider.toLowerCase()+'.com',avatar:'D',provider};save();updateAuthUI();closeModal('authModal');toast(`Đăng nhập ${provider} thành công`,'success');}
function otpLogin(){const phone=prompt('Nhập số điện thoại:');if(!phone)return;const otp=prompt('Mã OTP đã gửi: 123456\nNhập OTP:');if(otp==='123456'){State.user={name:'User '+phone.slice(-4),email:phone+'@phone',avatar:'P'};save();updateAuthUI();closeModal('authModal');toast('Đăng nhập OTP thành công','success');}else toast('OTP sai','error');}
function forgotPass(){const email=prompt('Nhập email khôi phục:');if(email)toast('Đã gửi link đặt lại mật khẩu tới '+email,'success');}
function logout(){State.user=null;save();updateAuthUI();go('home');toast('Đã đăng xuất');}
function updateAuthUI(){
  $('#loginBtn').style.display=State.user?'none':'inline-flex';
  $('#userBtn').style.display=State.user?'grid':'none';
}
function requireAuth(){if(!State.user){toast('Vui lòng đăng nhập','error');openAuth();return false;}return true;}

// ========= GLOBAL SEARCH (không dấu · gần đúng · xếp hạng · highlight · debounce) =========
const onSearchInput = debounce(runSearch, 220);
function runSearch(){
  const q=$('#gSearch').value.trim();
  const sg=$('#searchSuggest');
  if(!q){
    sg.innerHTML=`<div class="ss-group"><h6>Tìm kiếm trending</h6>${DB.trending.map(t=>`<div class="ss-item" onclick="doSearch('${t}')"><i class="fas fa-fire" style="color:var(--accent)"></i>${t}</div>`).join('')}</div>`;
    sg.classList.add('show');return;
  }
  // Nguồn dữ liệu kèm độ phổ biến (popularity) để ưu tiên
  const sources=[
    ...DB.stories.map(s=>({type:'Story',label:s.name,sub:s.region,pop:s.rating*200,act:()=>{goDetail('story','showStoryDetail',s.id)}})),
    ...DB.foods.map(s=>({type:'Food',label:s.name,sub:s.city,pop:(s.sold||0),act:()=>{goDetail('food','showFoodDetail',s.id)}})),
    ...DB.services.map(s=>({type:'Service',label:s.name,sub:s.loc,pop:s.rating*150,act:()=>{goDetail('service','showSvcDetail',s.id)}})),
    ...DB.ocop.map(s=>({type:'OCOP',label:s.name,sub:s.seller,pop:s.sold,act:()=>{goDetail('ocop','showOcopDetail',s.id)}})),
    ...DB.guides.map(s=>({type:'Guide',label:s.name,sub:s.loc,pop:s.reviews*10,act:()=>{goDetail('guide','showGuideDetail',s.id)}})),
    ...DB.checkins.map(s=>({type:'Check-in',label:s.name,sub:s.loc,pop:s.likes,act:()=>{goDetail('checkin','showCheckinDetail',s.id)}}))
  ];
  const scored=sources.map(r=>({...r,rel:Math.max(relevance(r.label,q),relevance(r.sub||'',q)?1:0)}))
    .filter(r=>r.rel>0)
    .sort((a,b)=>b.rel-a.rel||b.pop-a.pop)
    .slice(0,12);
  if(!scored.length){sg.innerHTML=`<div class="empty" style="padding:20px"><i class="fas fa-search"></i>Không có kết quả cho "${q}"</div>`;sg.classList.add('show');return;}
  const grouped={};scored.forEach(r=>{(grouped[r.type]=grouped[r.type]||[]).push(r)});
  window._searchActs=[];let idx=0;
  sg.innerHTML=Object.keys(grouped).map(k=>`<div class="ss-group"><h6>${k}</h6>${grouped[k].slice(0,5).map(r=>{const i=idx++;window._searchActs[i]=()=>{r.act();sg.classList.remove('show');saveHistory(q);};return `<div class="ss-item" onclick="_searchActs[${i}]()"><i class="fas fa-search"></i><span>${highlight(r.label,q)} <small style="color:var(--text-muted)">${r.sub||''}</small></span><span class="badge-mini">${r.type}</span></div>`;}).join('')}</div>`).join('');
  sg.classList.add('show');
}
function doSearch(q){$('#gSearch').value=q;runSearch();}
function saveHistory(q){if(!State.history.includes(q)){State.history.unshift(q);State.history=State.history.slice(0,10);save();}}


// ========= HOME =========
function renderHome(){
  $('#trendingGrid').innerHTML=[
    {...DB.stories[0],_t:'story'},{...DB.foods[2],_t:'food'},{...DB.services[0],_t:'service'},{...DB.ocop[1],_t:'ocop'}
  ].map(cardHTML).join('');
  $('#ocopFeatured').innerHTML=DB.ocop.slice(0,4).map(ocopCardHTML).join('');
}
function openByType(t,id){if(t==='story'){goDetail('story','showStoryDetail',id);}else if(t==='food'){goDetail('food','showFoodDetail',id);}else if(t==='service'){goDetail('service','showSvcDetail',id);}else if(t==='ocop'){goDetail('ocop','showOcopDetail',id);}else if(t==='checkin'){goDetail('checkin','showCheckinDetail',id);}}
function cardHTML(item){
  const img=item.img||IMG.hoian;
  const price=item.price?`<span class="price-tag">${fmt(item.price)}</span>`:'';
  const tags=(item.region||item.city||item.loc||'')+'';
  return `<div class="card" onclick="openByType('${item._t}','${item.id}')"><div class="card-img" style="background-image:url('${img}')">${price}</div><div class="card-body"><h6 class="card-title">${item.name}</h6><div class="card-meta"><span><i class="fas fa-map-marker-alt"></i>${tags}</span>${item.rating?`<span class="rating">★ ${item.rating}</span>`:''}</div></div></div>`;
}

// ========= STORY =========
function renderStory(){
  const q=($('#storySearch')?.value||'').toLowerCase();
  const r=$('#storyRegion')?.value||'',f=$('#storyFormat')?.value||'';
  const list=DB.stories.filter(s=>s.name.toLowerCase().includes(q)&&(!r||s.region===r)&&(!f||s.format===f));
  $('#storyGrid').innerHTML=list.length?list.map(s=>`<div class="card" onclick="showStoryDetail('${s.id}')"><div class="card-img" style="background-image:url('${s.img}')"><span class="price-tag"><i class="fas fa-${s.format==='Audio'?'headphones':s.format==='Video'?'play':'podcast'}"></i> ${s.format}</span></div><div class="card-body"><h6 class="card-title">${s.name}</h6><div class="card-meta"><span><i class="fas fa-map-marker-alt"></i>${s.region}</span><span><i class="fas fa-clock"></i>${s.duration}</span><span class="rating">★ ${s.rating}</span></div><p style="font-size:.85rem;color:var(--text-muted);margin:6px 0 0">${s.desc}</p></div></div>`).join(''):'<div class="empty"><i class="fas fa-book"></i>Không có câu chuyện nào</div>';
}
function showStoryDetail(id){
  const s=DB.stories.find(x=>x.id===id);if(!s)return;
  if(typeof saveHistoryItem==='function')saveHistoryItem(s,'story');
  StoryAudio.stop();
  $('#story-list').style.display='none';
  const d=$('#story-detail');d.style.display='block';
  const gallery=(s.gallery||[s.img]);
  const acts=(s.activities||[]).map(x=>`<li>${x}</li>`).join('');
  const specs=(s.specialties||[]).map(x=>`<span class="badge-mini" style="margin:3px;padding:6px 10px">${x}</span>`).join('');
  d.innerHTML=`<button class="btn btn-ghost btn-sm" onclick="closeStoryDetail()"><i class="fas fa-arrow-left"></i> Quay lại</button>
    <div class="detail-hero" style="background-image:url('${gallery[0]}');margin-top:14px">
      <div class="detail-hero-info">
        <span class="hero-tag" style="background:rgba(255,255,255,.25)">Hồ sơ điểm đến · ${s.duration||''}</span>
        <h1>${s.name}</h1>
        <div>★ ${s.rating} · ${s.region} · Đóng góp bởi ${s.contributor||'TOUR-HUB'}</div>
      </div>
    </div>

    <div class="detail-grid" style="margin-top:14px">
      <div>
        <div class="dash-card">
          <h5><i class="fas fa-images"></i> Thư viện ảnh</h5>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:8px">
            ${gallery.map(g=>`<img src="${g}" ${lazy} style="width:100%;height:100px;object-fit:cover;border-radius:10px;cursor:pointer" onclick="window.open('${g}','_blank')">`).join('')}
          </div>
        </div>

        <div class="dash-card">
          <h5><i class="fas fa-info-circle"></i> Giới thiệu tổng quan</h5>
          <p id="storyIntroText">${s.desc}</p>
        </div>

        <div class="dash-card" id="audioGuideCard">
          <h5><i class="fas fa-headphones-alt"></i> Audio Guide</h5>
          <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:12px">
            <label style="font-size:.85rem;color:var(--text-muted)">Ngôn ngữ:</label>
            <select id="audioLang" class="field" style="max-width:160px" onchange="StoryAudio.changeLang()">
              <option value="vi-VN">Tiếng Việt</option>
              <option value="en-US">English</option>
              <option value="zh-CN">中文</option>
              <option value="ja-JP">日本語</option>
              <option value="ko-KR">한국어</option>
            </select>
          </div>
          <div style="background:var(--surface-2);padding:18px;border-radius:14px">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
              <button class="icon-btn" onclick="StoryAudio.seek(-10)" title="Tua lại 10s"><i class="fas fa-backward"></i></button>
              <button class="icon-btn" onclick="StoryAudio.toggle()" id="audioPlayBtn" style="background:var(--primary);color:#fff;width:54px;height:54px;font-size:1.1rem"><i class="fas fa-play"></i></button>
              <button class="icon-btn" onclick="StoryAudio.stop()" title="Dừng"><i class="fas fa-stop"></i></button>
              <button class="icon-btn" onclick="StoryAudio.seek(10)" title="Tua tới 10s"><i class="fas fa-forward"></i></button>
              <div style="flex:1;min-width:120px">
                <div style="height:6px;background:var(--border);border-radius:3px;overflow:hidden"><div id="audioProgress" style="width:0%;height:100%;background:var(--gradient);transition:width .3s"></div></div>
                <div style="display:flex;justify-content:space-between;font-size:.78rem;color:var(--text-muted);margin-top:4px"><span id="audioTime">00:00</span><span id="audioStatus">Sẵn sàng</span></div>
              </div>
            </div>
            <div style="display:flex;align-items:center;gap:10px">
              <i class="fas fa-volume-down" style="color:var(--text-muted)"></i>
              <input type="range" min="0" max="1" step="0.05" value="1" id="audioVol" oninput="StoryAudio.setVol(this.value)" style="flex:1">
              <i class="fas fa-volume-up" style="color:var(--text-muted)"></i>
              <select id="audioRate" class="field" style="max-width:90px" onchange="StoryAudio.setRate(this.value)">
                <option value="0.8">0.8x</option><option value="1" selected>1.0x</option><option value="1.2">1.2x</option><option value="1.5">1.5x</option>
              </select>
            </div>
          </div>
          <div style="font-size:.78rem;color:var(--text-muted);margin-top:8px"><i class="fas fa-info-circle"></i> Audio Guide tự động đọc nội dung giới thiệu bằng công nghệ Text-to-Speech.</div>
        </div>

        <div class="dash-card">
          <h5><i class="fas fa-video"></i> Video giới thiệu</h5>
          <div style="position:relative;padding-top:56.25%;border-radius:14px;overflow:hidden;background:#000">
            ${s.video?`<video id="storyVideo" src="${s.video}" poster="${s.img}" controls playsinline preload="metadata" style="position:absolute;inset:0;width:100%;height:100%;background:#000;object-fit:contain" onplay="StoryAudio.onVideoPlay()">Trình duyệt không hỗ trợ phát video.</video>`:`<div style="position:absolute;inset:0;display:grid;place-items:center;color:#fff;font-weight:600">Video đang được cập nhật</div>`}
          </div>
          <div style="font-size:.78rem;color:var(--text-muted);margin-top:8px"><i class="fas fa-info-circle"></i> Khi video phát, audio guide sẽ tự động tạm dừng.</div>
        </div>

        <div class="dash-card"><h5><i class="fas fa-landmark"></i> Lịch sử hình thành</h5><p>${s.history||s.desc}</p></div>
        <div class="dash-card"><h5><i class="fas fa-yin-yang"></i> Giá trị văn hóa</h5><p>${s.culture||'—'}</p></div>
        <div class="dash-card"><h5><i class="fas fa-hiking"></i> Hoạt động trải nghiệm</h5><ul style="padding-left:20px;margin:0">${acts||'<li>Đang cập nhật</li>'}</ul></div>
        <div class="dash-card"><h5><i class="fas fa-utensils"></i> Đặc sản địa phương</h5><div>${specs||'—'}</div></div>
      </div>

      <div>
        <div class="dash-card"><h5><i class="fas fa-calendar-alt"></i> Thời điểm lý tưởng</h5><p>${s.bestTime||'Quanh năm'}</p></div>
        <div class="dash-card"><h5><i class="fas fa-coins"></i> Chi phí tham khảo</h5><p>${s.cost||'Liên hệ'}</p></div>
        <div class="dash-card"><h5><i class="fas fa-phone"></i> Liên hệ</h5><p>${s.contact||'—'}</p></div>
        <div class="dash-card"><h5><i class="fas fa-share-alt"></i> Chia sẻ</h5>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
            <button class="btn btn-ghost" onclick="navigator.clipboard&&navigator.clipboard.writeText(location.href);toast('Đã sao chép link')"><i class="fas fa-link"></i> Copy</button>
            <button class="btn btn-ghost"><i class="fab fa-facebook"></i> FB</button>
            <button class="btn btn-ghost"><i class="fab fa-tiktok"></i> TikTok</button>
            <button class="btn btn-ghost" onclick="addWishlist&&addWishlist('${s.id}','${s.name}','story')"><i class="fas fa-heart"></i> Lưu</button>
          </div>
        </div>
        <div class="dash-card"><h5><i class="fas fa-map-marked-alt"></i> Bản đồ vị trí</h5><div class="mini-map" id="storyMap" style="height:260px;border-radius:12px"></div></div>
      </div>
    </div>`;
  StoryAudio.init(s);
  setTimeout(()=>{window.thGMap&&thGMap('storyMap',{q:s.name+', Việt Nam',lat:s.lat,lng:s.lng,zoom:13,title:s.name});},120);
}
function closeStoryDetail(){StoryAudio.stop();const _v=$('#storyVideo');if(_v&&_v.pause)_v.pause();$('#story-list').style.display='block';$('#story-detail').style.display='none';}

// ========= STORY AUDIO GUIDE (Web Speech TTS, multi-language) =========
const StoryAudio = {
  utt:null, story:null, lang:'vi-VN', rate:1, vol:1, playing:false, paused:false, elapsed:0, timer:null, duration:0,
  translations:{
    'en-US':{s1:'Hoi An Ancient Town is a UNESCO World Heritage site since 1999, a 400-year-old town with a unique blend of Vietnamese, Chinese, and Japanese architecture.',s2:'Hue Imperial City was the capital of the Nguyen Dynasty from 1802 to 1945, featuring royal palaces and tombs.',s3:'Ha Long Bay is a natural wonder of the world, recognized seven times by UNESCO.',s4:'Sa Pa and Fansipan, the roof of Indochina at 3147 meters, home to H\'Mong and Dao cultures.',s5:'Da Lat, the city of a thousand flowers, with French colonial architecture on the Lang Biang plateau.'},
    'zh-CN':{s1:'会安古城是1999年被联合国教科文组织认定的世界遗产，拥有400年历史，融合越南、中国和日本建筑风格。',s2:'顺化古都是1802年至1945年阮朝的首都。',s3:'下龙湾是世界自然奇观，被联合国教科文组织七次认定。',s4:'沙坝与番西邦峰3147米，印度支那屋脊，赫蒙族和瑶族文化之家。',s5:'大叻，千花之城，朗比安高原上的法国殖民建筑。'},
    'ja-JP':{s1:'ホイアン古い町並みは1999年にユネスコ世界遺産に登録された、ベトナム、中国、日本の建築が融合した400年の歴史を持つ町です。',s2:'フエ古都は1802年から1945年までグエン朝の首都でした。',s3:'ハロン湾は世界の自然の驚異で、ユネスコに7回認定されました。',s4:'サパとファンシパン、インドシナの屋根3147メートル、モン族とザオ族の文化の故郷。',s5:'ダラット、千の花の街、ランビアン高原のフランス植民地建築。'},
    'ko-KR':{s1:'호이안 고대 도시는 1999년 유네스코 세계문화유산으로 지정된 400년 역사의 베트남, 중국, 일본 건축이 어우러진 마을입니다.',s2:'후에 황도는 1802년부터 1945년까지 응우옌 왕조의 수도였습니다.',s3:'하롱베이는 유네스코가 7번 인정한 세계 자연 경이입니다.',s4:'사파와 판시판, 인도차이나의 지붕 3147m, 흐몽족과 자오족 문화의 고향.',s5:'달랏, 천 송이 꽃의 도시, 랑비앙 고원의 프랑스 식민지 건축.'}
  },
  init(story){this.story=story;this.elapsed=0;this.paused=false;this.playing=false;this.updateUI();},
  getText(){if(!this.story)return '';if(this.lang==='vi-VN')return this.story.desc+' '+(this.story.history||'');const t=this.translations[this.lang];return (t&&t[this.story.id])||this.story.desc;},
  pickVoice(){const vs=speechSynthesis.getVoices();return vs.find(v=>v.lang===this.lang)||vs.find(v=>v.lang.startsWith(this.lang.split('-')[0]))||null;},
  play(){if(!('speechSynthesis' in window)){toast('Trình duyệt không hỗ trợ Text-to-Speech','error');return;}
    const _v=$('#storyVideo');if(_v&&_v.pause&&!_v.paused)_v.pause();
    if(this.paused){speechSynthesis.resume();this.paused=false;this.playing=true;this._tick();this.updateUI();return;}
    speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(this.getText());u.lang=this.lang;u.rate=this.rate;u.volume=this.vol;
    const v=this.pickVoice();if(v)u.voice=v;
    u.onend=()=>{this.playing=false;this.paused=false;clearInterval(this.timer);this.elapsed=this.duration;this.updateUI();};
    u.onerror=()=>{this.playing=false;clearInterval(this.timer);this.updateUI();};
    this.utt=u;speechSynthesis.speak(u);
    this.playing=true;this.elapsed=0;
    this.duration=Math.max(8,this.getText().length/14/this.rate);
    this._tick();this.updateUI();
  },
  pause(){if(this.playing){speechSynthesis.pause();this.paused=true;this.playing=false;clearInterval(this.timer);this.updateUI();}},
  toggle(){this.playing?this.pause():this.play();},
  stop(){if(!('speechSynthesis' in window))return;speechSynthesis.cancel();this.playing=false;this.paused=false;this.elapsed=0;clearInterval(this.timer);this.updateUI();},
  seek(d){this.elapsed=Math.max(0,Math.min(this.duration,this.elapsed+d));this.updateUI();/* TTS không hỗ trợ seek thực sự */ if(d<0){this.stop();this.play();}},
  setVol(v){this.vol=+v;if(this.utt)this.utt.volume=this.vol;},
  setRate(r){this.rate=+r;if(this.playing){this.stop();this.play();}},
  changeLang(){this.lang=$('#audioLang').value;if(this.playing||this.paused){this.stop();this.play();}},
  _tick(){clearInterval(this.timer);this.timer=setInterval(()=>{if(!this.playing)return;this.elapsed+=0.5;if(this.elapsed>=this.duration)this.elapsed=this.duration;this.updateUI();},500);},
  updateUI(){const b=$('#audioPlayBtn');if(b)b.innerHTML=this.playing?'<i class="fas fa-pause"></i>':'<i class="fas fa-play"></i>';
    const p=$('#audioProgress');if(p)p.style.width=(this.duration?Math.min(100,this.elapsed/this.duration*100):0)+'%';
    const t=$('#audioTime');if(t){const m=Math.floor(this.elapsed/60),sec=Math.floor(this.elapsed%60);t.textContent=String(m).padStart(2,'0')+':'+String(sec).padStart(2,'0');}
    const st=$('#audioStatus');if(st)st.textContent=this.playing?'Đang phát':(this.paused?'Tạm dừng':'Sẵn sàng');
  },
  onVideoPlay(){if(this.playing)this.pause();}
};
if('speechSynthesis' in window){speechSynthesis.onvoiceschanged=()=>{};}

// ========= FOOD =========
const renderFood = debounce(_renderFood, 180);
function _renderFood(){
  const q=$('#foodSearch')?.value||'';
  const r=$('#foodRegion')?.value||'',cu=$('#foodCuisine')?.value||'',pr=$('#foodPrice')?.value||'',rate=+($('#foodRate')?.value||0),op=$('#foodOpen')?.value||'',sort=$('#foodSort')?.value||'rating';
  let list=DB.foods.filter(f=>
    (!q||relevance(f.name+' '+f.city+' '+f.cuisine,q)>0)&&
    (!r||f.region===r)&&(!cu||f.cuisine===cu)&&
    (pr==='low'?f.price<100000:pr==='mid'?f.price>=100000&&f.price<=300000:pr==='high'?f.price>300000:true)&&
    (!rate||f.rating>=rate)&&(op!=='open'||f.open)
  );
  list.sort((a,b)=>sort==='price'?a.price-b.price:sort==='dist'?a.dist-b.dist:sort==='popular'?(b.sold||0)-(a.sold||0):b.rating-a.rating);
  $('#foodGrid').innerHTML=list.length?list.map(f=>`<div class="card" onclick="showFoodDetail('${f.id}')"><div class="card-img" style="background-image:url('${f.img}')"><button class="fav-btn" onclick="event.stopPropagation();addWishlist('${f.id}','${f.name}','food','${f.city}')"><i class="far fa-heart"></i></button><span class="price-tag">${fmt(f.price)}</span><span class="price-tag" style="left:auto;right:10px;background:${f.open?'rgba(16,185,129,.9)':'rgba(239,68,68,.85)'}">${f.open?'Đang mở':'Đã đóng'}</span></div><div class="card-body"><h6 class="card-title">${highlight(f.name,q)}</h6><div class="card-meta"><span><i class="fas fa-map-marker-alt"></i>${f.city}</span><span><i class="fas fa-utensils"></i>${f.cuisine}</span><span class="rating">★ ${f.rating}</span></div><div class="card-meta"><span><i class="fas fa-clock"></i>${f.hours}</span><span><i class="fas fa-route"></i>${f.dist} km</span></div><p style="font-size:.85rem;color:var(--text-muted);margin:4px 0 0">${f.desc}</p></div></div>`).join(''):'<div class="empty"><i class="fas fa-utensils"></i>Không có kết quả</div>';
}

function showFoodDetail(id){
  const f=DB.foods.find(x=>x.id===id);
  saveHistoryItem(f,'food');
  const dishes=f.dishes||['Món chính 90k','Món phụ 50k','Đồ uống 30k'];
  $('#detailBody').innerHTML=`<div class="detail-hero" style="background-image:url('${f.img}')"><div class="detail-hero-info"><h1>${f.name}</h1><div>★ ${f.rating} · ${f.city} · Từ ${fmt(f.price)}</div></div></div>
    <div class="detail-grid">
      <div>
        <div class="dash-card"><h5>Giới thiệu</h5><p>${f.desc}</p></div>
        <div class="dash-card"><h5>Menu thực tế</h5>${dishes.map(d=>`<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border)"><span>${d.split(' ').slice(0,-1).join(' ')}</span><strong style="color:var(--primary)">${d.split(' ').pop()}</strong></div>`).join('')}<div style="margin-top:14px;padding:12px;background:var(--surface-2);border-radius:10px"><strong>Combo Family</strong><br><small>4 người · phở bò + bún chả + cà phê</small><div style="display:flex;justify-content:space-between;margin-top:6px"><span>Tiết kiệm 15%</span><strong style="color:var(--accent)">350k</strong></div></div></div>
      </div>
      <div>
        <div class="dash-card"><h5>Đặt bàn</h5>
          <div class="field" style="margin-bottom:8px"><label>Ngày</label><input type="date" value="${new Date().toISOString().slice(0,10)}"></div>
          <div class="field" style="margin-bottom:8px"><label>Giờ</label><input type="time" value="19:00"></div>
          <div class="field" style="margin-bottom:12px"><label>Số người</label><input type="number" value="2" min="1"></div>
          <button class="btn btn-primary btn-block" onclick="bookFood('${f.id}')"><i class="fas fa-calendar-check"></i> Đặt bàn ngay</button>
        </div>
        <div class="dash-card"><h5>Vị trí</h5><div class="mini-map" id="foodMap"></div></div>
      </div>
    </div>`;
  openModal('detailModal');
  setTimeout(()=>{window.thGMap&&thGMap('foodMap',{q:f.name+', '+f.city,zoom:16,title:f.name});},200);
}
function bookFood(id){if(!requireAuth())return;const f=DB.foods.find(x=>x.id===id);State.payContext={type:'food',item:f,total:f.price*2};closeModal('detailModal');openPay();}

// ========= SERVICE =========
function filterSvc(t){State.svcType=t;$$('#page-service .tab').forEach(b=>b.classList.toggle('active',b.dataset.stype===t));renderService();}
function priceBlock(s){
  const unit=s.type==='hotel'?'/đêm':s.type==='car'?'/ngày':'';
  if(s.oldPrice)return `<span class="price-orig">${fmt(s.oldPrice)}</span><strong style="color:var(--primary)">${fmt(s.price)}</strong><span class="price-off">-${s.discount}%</span>${unit}`;
  return `<strong style="color:var(--primary)">${fmt(s.price)}</strong>${unit}`;
}
function stockPill(stock){const cls=stock<=0?'out':stock<10?'low':'ok';const txt=stock<=0?'Hết chỗ':'Còn '+stock;return `<span class="stock-pill ${cls}"><i class="fas fa-${stock<=0?'times-circle':'check-circle'}"></i> ${txt}</span>`;}
const renderService = debounce(_renderService, 180);
function _renderService(){
  const q=$('#svcSearch')?.value||'',loc=$('#svcLoc')?.value||'';
  const list=DB.services.filter(s=>s.type===State.svcType&&(!q||relevance(s.name+' '+s.loc,q)>0)&&(!loc||s.loc===loc));
  $('#serviceGrid').innerHTML=list.length?list.map(s=>`<div class="card" onclick="showSvcDetail('${s.id}')"><div class="card-img" style="background-image:url('${s.img}')"><button class="fav-btn" onclick="event.stopPropagation();addWishlist('${s.id}','${s.name}','service','${s.loc}')"><i class="far fa-heart"></i></button>${s.discount?`<span class="price-tag" style="background:var(--danger)">-${s.discount}%</span>`:''}</div><div class="card-body"><h6 class="card-title">${highlight(s.name,q)}</h6><div class="card-meta"><span><i class="fas fa-map-marker-alt"></i>${s.loc}</span><span class="rating">★ ${s.rating}</span>${stockPill(s.stock)}</div><p style="font-size:.85rem;color:var(--text-muted);margin:4px 0 8px">${s.desc}</p><div style="display:flex;justify-content:space-between;align-items:center;margin-top:auto"><div style="font-size:.95rem">${priceBlock(s)}</div><button class="btn btn-primary btn-sm" onclick="event.stopPropagation();bookSvc('${s.id}')" ${s.stock<=0?'disabled':''}>Đặt ngay</button></div></div></div>`).join(''):'<div class="empty"><i class="fas fa-concierge-bell"></i>Không có dịch vụ phù hợp</div>';
}
function showSvcDetail(id){const s=DB.services.find(x=>x.id===id);saveHistoryItem(s,'service');$('#detailBody').innerHTML=`<div class="detail-hero" style="background-image:url('${s.img}')"><div class="detail-hero-info"><h1>${s.name}</h1><div>★ ${s.rating} · ${s.loc} · ${fmt(s.price)}</div></div></div><div class="detail-grid"><div><div class="dash-card"><h5>Giới thiệu</h5><p>${s.desc}</p></div><div class="dash-card"><h5>Tiện nghi</h5><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:8px">${['Wifi','Bể bơi','Bữa sáng','Đưa đón','Gym','Spa'].map(x=>`<div style="padding:8px;background:var(--surface-2);border-radius:8px;text-align:center;font-size:.85rem"><i class="fas fa-check" style="color:var(--success)"></i> ${x}</div>`).join('')}</div></div><div class="dash-card"><h5>Vị trí</h5><div class="mini-map" id="svcMap"></div></div></div><div><div class="dash-card"><h5>Đặt dịch vụ</h5>
  <div class="field" style="margin-bottom:8px"><label>Họ tên</label><input id="svcName" value="${State.user?.name||''}" placeholder="Tên người đặt"></div>
  <div class="field" style="margin-bottom:8px"><label>Email/SĐT</label><input id="svcContact" value="${State.user?.email||''}" placeholder="Liên hệ"></div>
  <div class="field" style="margin-bottom:8px"><label>Ngày</label><input type="date" value="${new Date().toISOString().slice(0,10)}"></div>
  <div class="field" style="margin-bottom:8px"><label>Số lượng</label><input type="number" value="1" min="1" max="${s.stock}" id="svcQty" oninput="updSvcTotal('${s.id}')"></div>
  <div style="padding:12px;background:var(--surface-2);border-radius:10px;margin-bottom:12px">
    ${s.oldPrice?`<div style="display:flex;justify-content:space-between;color:var(--text-muted)"><span>Giá gốc</span><span class="price-orig" style="margin:0">${fmt(s.oldPrice)}</span></div><div style="display:flex;justify-content:space-between;color:var(--danger)"><span>Giảm giá ${s.discount}%</span><span>-${fmt(s.oldPrice-s.price)}</span></div>`:''}
    <div style="display:flex;justify-content:space-between"><span>Đơn giá</span><strong>${fmt(s.price)}</strong></div>
    <div style="display:flex;justify-content:space-between;margin-top:6px;font-size:1.1rem;color:var(--primary)"><span>Tổng</span><strong id="svcTotal">${fmt(s.price)}</strong></div>
  </div>
  <button class="btn btn-primary btn-block" onclick="bookSvc('${s.id}')" ${s.stock<=0?'disabled':''}><i class="fas fa-credit-card"></i> Đặt & thanh toán</button></div></div></div>`;openModal('detailModal');setTimeout(()=>{window.thGMap&&thGMap('svcMap',{q:s.name+', '+s.loc,zoom:15,title:s.name});},200);}
function updSvcTotal(id){const s=DB.services.find(x=>x.id===id);const qty=Math.max(1,parseInt($('#svcQty')?.value||1));$('#svcTotal').textContent=fmt(s.price*qty);}
function bookSvc(id){if(!requireAuth())return;const s=DB.services.find(x=>x.id===id);if(s.stock<=0)return toast('Đã hết chỗ','error');const qty=parseInt($('#svcQty')?.value||1);State.payContext={type:'service',item:s,total:s.price*qty,qty};closeModal('detailModal');openPay();}


// ========= OCOP =========
const renderOcop = debounce(_renderOcop, 160);
function _renderOcop(){
  const q=$('#ocopSearch')?.value||'';
  const r=$('#ocopRegion')?.value||'',st=$('#ocopStar')?.value||'',pr=$('#ocopPrice')?.value||'';
  const list=DB.ocop.filter(o=>(!q||relevance(o.name+' '+o.seller,q)>0)&&(!r||o.region===r)&&(!st||o.star==+st)&&(pr==='low'?o.price<100000:pr==='mid'?o.price>=100000&&o.price<=500000:pr==='high'?o.price>500000:true));
  $('#ocopGrid').innerHTML=list.length?list.map(o=>ocopCardHTML(o,q)).join(''):'<div class="empty"><i class="fas fa-shopping-basket"></i>Không có sản phẩm</div>';
}
// Số đã có trong giỏ -> đồng bộ tồn kho
function inCart(id){const c=State.cart.find(x=>x.id===id);return c?c.qty:0;}
function avail(o){return o.stock-inCart(o.id);}
function ocopCardHTML(o,q){const left=avail(o);return `<div class="card" onclick="showOcopDetail('${o.id}')"><div class="card-img" style="background-image:url('${o.img}')"><button class="fav-btn" onclick="event.stopPropagation();addWishlist('${o.id}','${o.name}','ocop','${o.seller}')"><i class="far fa-heart"></i></button><span class="price-tag">★ OCOP ${o.star} sao</span></div><div class="card-body"><h6 class="card-title">${highlight(o.name,q||'')}</h6><div class="card-meta"><span><i class="fas fa-store"></i>${o.seller}</span><span class="rating">★ ${o.rating}</span><span>(${o.sold} đã bán)</span></div><div class="card-meta">${stockPill(left)}</div><div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px"><strong style="color:var(--primary);font-size:1.05rem">${fmt(o.price)}</strong><button class="btn btn-primary btn-sm" onclick="event.stopPropagation();addCart('${o.id}')" ${left<=0?'disabled':''}><i class="fas fa-cart-plus"></i> Thêm</button></div></div></div>`}
function showOcopDetail(id){const o=DB.ocop.find(x=>x.id===id);saveHistoryItem(o,'ocop');const left=avail(o);$('#detailBody').innerHTML=`<div class="detail-hero" style="background-image:url('${o.img}')"><div class="detail-hero-info"><span class="hero-tag" style="background:rgba(255,255,255,.25)">OCOP ${o.star} sao</span><h1>${o.name}</h1><div>★ ${o.rating} · ${o.seller} · ${o.sold} đã bán</div></div></div>
  <div class="detail-grid"><div>
    <div class="dash-card"><h5>Giới thiệu</h5><p>${o.desc}</p></div>
    <div class="dash-card"><h5>Truy xuất nguồn gốc</h5><div style="border-left:2px solid var(--primary);padding-left:16px"><div style="margin-bottom:8px"><strong>Vùng nguyên liệu</strong><br><small>Miền ${o.region} · canh tác đạt chuẩn</small></div><div style="margin-bottom:8px"><strong>Chứng nhận OCOP ${o.star} sao</strong><br><small>Cấp bởi UBND tỉnh</small></div><div><strong>HTX/Đơn vị sản xuất</strong><br><small>${o.seller}</small></div></div></div>
    <div class="dash-card"><h5>Đánh giá (${o.rating})</h5><div style="display:flex;gap:10px"><div class="feed-avatar">K</div><div><strong>Khách hàng</strong><br><small>Sản phẩm chất lượng, đóng gói cẩn thận. Sẽ ủng hộ tiếp!</small></div></div></div>
  </div><div>
    <div class="dash-card"><h5>Mua hàng</h5>
      <div style="font-size:1.5rem;font-weight:800;color:var(--primary);margin-bottom:6px">${fmt(o.price)}</div>
      <div style="margin-bottom:10px" id="ocopStockLine">${stockPill(left)}</div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px"><span>Số lượng</span><div class="qty-ctrl"><button onclick="detQty(-1)">−</button><span id="detQty">1</span><button onclick="detQty(1,${left})">+</button></div></div>
      <button class="btn btn-primary btn-block" style="margin-bottom:8px" onclick="addCartQty('${o.id}')" ${left<=0?'disabled':''}><i class="fas fa-cart-plus"></i> Thêm vào giỏ</button>
      <button class="btn btn-warm btn-block" onclick="buyNow('${o.id}')" ${left<=0?'disabled':''}><i class="fas fa-bolt"></i> Mua ngay</button>
    </div>
  </div></div>`;openModal('detailModal');}
function detQty(d,max){const el=$('#detQty');let v=(+el.textContent)+d;if(v<1)v=1;if(max!=null&&v>max)v=max;el.textContent=v;}
function addCartQty(id){const o=DB.ocop.find(x=>x.id===id);const qty=+$('#detQty').textContent;if(qty>avail(o))return toast('Vượt quá tồn kho','error');const ex=State.cart.find(c=>c.id===id);if(ex)ex.qty+=qty;else State.cart.push({...o,qty});save();updateCartBadge();toast(`Đã thêm ${qty} × ${o.name}`,'success');closeModal('detailModal');}
function buyNow(id){if(!requireAuth())return;const o=DB.ocop.find(x=>x.id===id);const qty=+$('#detQty').textContent;State.payContext={type:'ocop',items:[{...o,qty}],total:o.price*qty};closeModal('detailModal');openPay();}
function addCart(id){const o=DB.ocop.find(x=>x.id===id);if(avail(o)<=0)return toast('Hết hàng','error');const existing=State.cart.find(c=>c.id===id);if(existing)existing.qty++;else State.cart.push({...o,qty:1});save();updateCartBadge();if($('#page-ocop')?.classList.contains('active'))_renderOcop();toast(`Đã thêm: ${o.name}`,'success');}
function updateCartBadge(){const n=State.cart.reduce((s,c)=>s+c.qty,0);const b=$('#cartBadge');b.textContent=n;b.style.display=n?'block':'none';}
function openCart(){const total=State.cart.reduce((s,c)=>s+c.price*c.qty,0);$('#cartBody').innerHTML=State.cart.length?State.cart.map(c=>`<div class="cart-item"><img src="${c.img}" alt="" ${lazy}><div class="cart-item-info"><h6>${c.name}</h6><small>${c.seller||''} · ${fmt(c.price)} · Kho: ${(DB.ocop.find(o=>o.id===c.id)?.stock)??'-'}</small></div><div class="qty-ctrl"><button onclick="changeQty('${c.id}',-1)">−</button><span>${c.qty}</span><button onclick="changeQty('${c.id}',1)">+</button></div><strong style="min-width:90px;text-align:right">${fmt(c.price*c.qty)}</strong><button class="icon-btn danger" onclick="removeCart('${c.id}')"><i class="fas fa-trash"></i></button></div>`).join('')+`<div style="display:flex;justify-content:space-between;padding:18px;background:var(--surface-2);border-radius:10px;margin-top:14px;align-items:center"><div><div style="color:var(--text-muted);font-size:.85rem">Tổng cộng</div><strong style="font-size:1.4rem;color:var(--primary)">${fmt(total)}</strong></div><button class="btn btn-primary btn-lg" onclick="checkoutCart()"><i class="fas fa-credit-card"></i> Thanh toán nhanh</button></div>`:'<div class="empty"><i class="fas fa-shopping-cart"></i>Giỏ hàng trống</div>';openModal('cartModal');}
function changeQty(id,d){const c=State.cart.find(x=>x.id===id);const prod=DB.ocop.find(o=>o.id===id);if(d>0&&prod&&c.qty>=prod.stock)return toast('Đạt giới hạn tồn kho','error');c.qty+=d;if(c.qty<=0)State.cart=State.cart.filter(x=>x.id!==id);save();updateCartBadge();openCart();}
function removeCart(id){State.cart=State.cart.filter(x=>x.id!==id);save();updateCartBadge();openCart();}
function checkoutCart(){if(!requireAuth())return;if(!State.cart.length)return toast('Giỏ trống','error');const total=State.cart.reduce((s,c)=>s+c.price*c.qty,0);State.payContext={type:'ocop',items:[...State.cart],total};closeModal('cartModal');openPay();}


// ========= GUIDE =========
function renderGuide(){
  const loc=$('#gLoc')?.value||'',lang=$('#gLang')?.value||'',pr=$('#gPrice')?.value||'';
  const list=DB.guides.filter(g=>(!loc||g.loc===loc)&&(!lang||g.langs.includes(lang))&&(pr==='low'?g.price<1000000:pr==='mid'?g.price>=1000000&&g.price<=2000000:pr==='high'?g.price>2000000:true));
  $('#guideGrid').innerHTML=list.length?list.map(g=>`<div class="guide-card" onclick="showGuideDetail('${g.id}')"><div class="guide-avatar" style="background-image:url('${g.img}')"></div><div class="guide-info"><h5>${g.name} <span class="badge success"><i class="fas fa-check-circle"></i> Verified</span></h5><div class="guide-meta"><i class="fas fa-map-marker-alt"></i>${g.loc} · ${g.exp} năm KN · <span class="rating">★ ${g.rating} (${g.reviews})</span></div><div class="guide-langs" style="margin-bottom:8px">${g.langs.map(l=>`<span class="tag">${l}</span>`).join('')}</div><p style="margin:0 0 10px;font-size:.88rem;color:var(--text-muted)">${g.bio}</p><div style="display:flex;justify-content:space-between;align-items:center"><strong style="color:var(--primary)">${fmt(g.price)}/ngày</strong><div style="display:flex;gap:6px"><button class="icon-btn" title="Chat" onclick="event.stopPropagation();toast('Mở chat với ${g.name}')"><i class="fas fa-comment"></i></button><button class="icon-btn" title="Video call" onclick="event.stopPropagation();toast('Đang kết nối video...')"><i class="fas fa-video"></i></button><button class="btn btn-primary btn-sm" onclick="event.stopPropagation();bookGuide('${g.id}')">Đặt</button></div></div></div></div>`).join(''):'<div class="empty"><i class="fas fa-user-tie"></i>Không có HDV phù hợp</div>';
}
function showGuideDetail(id){const g=DB.guides.find(x=>x.id===id);$('#detailBody').innerHTML=`<div class="detail-grid"><div>
  <div class="dash-card" style="display:flex;gap:18px;align-items:center"><div class="guide-avatar" style="width:96px;height:96px;background-image:url('${g.img}')"></div><div><h2 style="margin:0">${g.name} <span class="badge success"><i class="fas fa-check-circle"></i> Verified</span></h2><div class="guide-meta"><i class="fas fa-map-marker-alt"></i>${g.loc} · ${g.exp} năm KN · ★ ${g.rating} (${g.reviews} đánh giá)</div><div class="guide-langs" style="margin-top:6px">${g.langs.map(l=>`<span class="tag">${l}</span>`).join('')}</div></div></div>
  <div class="dash-card"><h5>Giới thiệu</h5><p>${g.bio}</p></div>
  <div class="dash-card"><h5>Chứng chỉ</h5><p><i class="fas fa-id-badge" style="color:var(--primary)"></i> ${g.cert}</p></div>
  <div class="dash-card"><h5>Đánh giá gần đây</h5><div style="display:flex;gap:10px;margin-bottom:10px"><div class="feed-avatar">A</div><div><strong>Anna (US)</strong> · ★★★★★<br><small>Amazing guide, very knowledgeable and friendly!</small></div></div><div style="display:flex;gap:10px"><div class="feed-avatar">K</div><div><strong>Kenji (JP)</strong> · ★★★★★<br><small>素晴らしいツアーでした。ありがとう！</small></div></div></div>
  </div><div>
  <div class="dash-card"><h5>Đặt hướng dẫn viên</h5>
    <div class="field" style="margin-bottom:8px"><label>Họ tên</label><input id="gName" value="${State.user?.name||''}"></div>
    <div class="field" style="margin-bottom:8px"><label>Ngày</label><input type="date" value="${new Date().toISOString().slice(0,10)}"></div>
    <div class="field" style="margin-bottom:8px"><label>Số ngày</label><input type="number" id="gDays" value="1" min="1" oninput="updGuideTotal('${g.id}')"></div>
    <div style="padding:12px;background:var(--surface-2);border-radius:10px;margin-bottom:12px"><div style="display:flex;justify-content:space-between"><span>Giá/ngày</span><strong>${fmt(g.price)}</strong></div><div style="display:flex;justify-content:space-between;margin-top:6px;font-size:1.1rem;color:var(--primary)"><span>Tổng</span><strong id="gTotal">${fmt(g.price)}</strong></div></div>
    <button class="btn btn-primary btn-block" style="margin-bottom:8px" onclick="bookGuide('${g.id}')"><i class="fas fa-calendar-check"></i> Đặt & thanh toán</button>
    <div style="display:flex;gap:8px"><button class="btn btn-ghost" style="flex:1" onclick="toast('Mở chat với ${g.name}')"><i class="fas fa-comment"></i> Chat</button><button class="btn btn-ghost" style="flex:1" onclick="toast('Đang kết nối video...')"><i class="fas fa-video"></i> Video</button></div>
  </div></div></div>`;openModal('detailModal');}
function updGuideTotal(id){const g=DB.guides.find(x=>x.id===id);const d=Math.max(1,+$('#gDays').value);$('#gTotal').textContent=fmt(g.price*d);}
function bookGuide(id){if(!requireAuth())return;const g=DB.guides.find(x=>x.id===id);const d=Math.max(1,+($('#gDays')?.value||1));closeModal('detailModal');State.payContext={type:'guide',item:g,total:g.price*d};openPay();}

// ========= CHECK-IN =========
function switchCi(t){
  $$('#page-checkin .tab').forEach(b=>b.classList.toggle('active',b.dataset.ctab===t));
  ['feed','map','postcards'].forEach(x=>{const el=$('#ci-'+x);if(el)el.style.display=x===t?'block':'none';});
  if(t==='map') setTimeout(initCiMap,100);
  if(t==='postcards'){
    try{ renderInlinePostcardCreator(); }catch(e){console.error('pc creator',e);}
    try{ renderMyPostcards(); }catch(e){console.error('pc list',e);}
  }
}
function renderInlinePostcardCreator(){
  const wrap = document.getElementById('pcCreatorWrap');
  if(!wrap) return;
  if(wrap.dataset.inited === '1') return;
  wrap.innerHTML = renderPostcardCreator();
  wrap.dataset.inited = '1';
  PC_INITIAL_LOC_ID = null;
  PC_EDIT_PID = null;
  setTimeout(()=>{ try{ initPCCreator(); }catch(e){console.error(e);} }, 30);
}
function renderFeed(){$('#feedGrid').innerHTML=DB.checkins.map(c=>`<div class="feed-post"><div class="feed-img" style="background-image:url('${c.img}');cursor:pointer" onclick="showCheckinDetail('${c.id}')"></div><div class="feed-body"><div class="feed-user"><div class="feed-avatar">${c.user[0].toUpperCase()}</div><div><strong>@${c.user}</strong><br><small style="color:var(--text-muted)"><i class="fas fa-map-marker-alt"></i> ${c.name}, ${c.loc}</small></div></div><div class="feed-actions"><span onclick="toast('❤')"><i class="fas fa-heart"></i> ${c.likes}</span><span onclick="showCheckinDetail('${c.id}')"><i class="fas fa-info-circle"></i> Chi tiết</span><span onclick="generatePostcard('${c.id}')"><i class="fas fa-image"></i> Postcard AI</span></div></div></div>`).join('');}
function showCheckinDetail(id){const c=DB.checkins.find(x=>x.id===id);saveHistoryItem(c,'checkin');$('#detailBody').innerHTML=`<div class="detail-hero" style="background-image:url('${c.img}')"><div class="detail-hero-info"><h1>${c.name}</h1><div><i class="fas fa-map-marker-alt"></i> ${c.loc} · ❤ ${c.likes} lượt thích</div></div></div>
  <div class="detail-grid"><div>
    <div class="dash-card"><h5>Về điểm check-in</h5><p>Điểm check-in nổi tiếng tại ${c.loc}. Hàng nghìn du khách đã ghé thăm và chia sẻ khoảnh khắc tại đây.</p></div>
    <div class="dash-card"><h5>Xác thực vị trí & Check-in</h5><p style="color:var(--text-muted);font-size:.9rem">Hệ thống chỉ cho phép check-in khi bạn ở trong bán kính 500m so với điểm đến thực tế.</p><button class="btn btn-primary" onclick="verifyCheckin('${c.id}')"><i class="fas fa-location-crosshairs"></i> Xác thực vị trí của tôi</button><div id="ciVerify" style="margin-top:10px"></div></div>
    <div class="dash-card"><h5>Tạo Postcard AI</h5><button class="btn btn-warm" onclick="generatePostcard('${c.id}')"><i class="fas fa-image"></i> Tạo postcard chia sẻ MXH</button></div>
  </div><div>
    <div class="dash-card"><h5>Bản đồ</h5><div class="mini-map" id="ciDetailMap"></div></div>
  </div></div>`;openModal('detailModal');setTimeout(()=>{window.thGMap&&thGMap('ciDetailMap',{q:c.name+', '+c.loc,lat:c.lat,lng:c.lng,zoom:15,title:c.name});},200);}
function verifyCheckin(id){const c=DB.checkins.find(x=>x.id===id);const box=$('#ciVerify');box.innerHTML='<i class="fas fa-circle-notch fa-spin"></i> Đang lấy vị trí...';
  if(!navigator.geolocation){box.innerHTML='<span class="badge warn">Thiết bị không hỗ trợ GPS — dùng vị trí mô phỏng.</span>';simVerify(c,box);return;}
  navigator.geolocation.getCurrentPosition(p=>{const d=haversine(p.coords.latitude,p.coords.longitude,c.lat,c.lng);if(d<=0.5){box.innerHTML=`<span class="badge success"><i class="fas fa-check-circle"></i> Đã xác thực! Cách ${(d*1000).toFixed(0)}m — Check-in thành công.</span>`;toast('Check-in thành công ✓','success');}else{box.innerHTML=`<span class="badge danger"><i class="fas fa-times-circle"></i> Bạn cách điểm đến ${d.toFixed(1)} km (>500m). Không thể check-in.</span>`;}},()=>{box.innerHTML='<span class="badge warn">Không lấy được vị trí — dùng mô phỏng.</span>';simVerify(c,box);});
}
function simVerify(c,box){setTimeout(()=>{const ok=Math.random()>0.4;box.innerHTML=ok?'<span class="badge success"><i class="fas fa-check-circle"></i> (Mô phỏng) Trong phạm vi — Check-in OK.</span>':'<span class="badge danger"><i class="fas fa-times-circle"></i> (Mô phỏng) Ngoài phạm vi — không thể check-in.</span>';},700);}
function initCiMap(){if(!window.L||window._ciMap)return;window._ciMap=L.map('checkinMap').setView([16,107],5);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(window._ciMap);DB.checkins.forEach(c=>L.marker([c.lat,c.lng]).addTo(window._ciMap).on('click',()=>showCheckinDetail(c.id)).bindPopup(`<b>${c.name}</b><br>${c.loc}<br>❤ ${c.likes}<br><a target="_blank" rel="noopener" href="${thGOpen({q:c.name+', '+c.loc})}">Mở Google Maps</a> · <a target="_blank" rel="noopener" href="${thGDir({q:c.name+', '+c.loc})}">Chỉ đường</a>`));}
function renderBadges(){$('#badgeGrid').innerHTML=DB.badges.map(b=>`<div class="card" style="text-align:center;padding:20px;${!b.unlocked?'opacity:.5':''}"><div style="width:64px;height:64px;border-radius:50%;background:${b.unlocked?'var(--gradient)':'var(--surface-2)'};color:#fff;display:grid;place-items:center;font-size:1.6rem;margin:0 auto 12px"><i class="fas fa-${b.icon}"></i></div><h6>${b.name}</h6><small style="color:var(--text-muted)">${b.desc}</small>${b.unlocked?'<div class="badge success" style="margin-top:8px">Đã mở khóa</div>':'<div class="badge warn" style="margin-top:8px">Chưa đạt</div>'}</div>`).join('');}
function openCheckinPost(){if(!requireAuth())return;toast('Mở camera... (demo)','success');}
// ========= POSTCARD CREATOR (copy y chang từ tourhub_v4) =========
const POSTCARD_FRAMES={
  hoian:{name:'Hội An',emoji:'🏮'},
  hanoi:{name:'Hà Nội',emoji:'🏛️'},
  sapa:{name:'Sa Pa',emoji:'⛰️'},
  hue:{name:'Huế',emoji:'👑'},
  saigon:{name:'Sài Gòn',emoji:'🌃'},
  default:{name:'TOUR-HUB Classic',emoji:'✈️'}
};
function pickFrame(loc){const l=(loc||'').toLowerCase();if(l.includes('hội an')||l.includes('hoi an'))return'hoian';if(l.includes('hà nội')||l.includes('ha noi'))return'hanoi';if(l.includes('sa pa')||l.includes('sapa'))return'sapa';if(l.includes('huế')||l.includes('hue'))return'hue';if(l.includes('sài gòn')||l.includes('hồ chí minh')||l.includes('saigon'))return'saigon';return'default';}

const PC_PRESETS=[
  {id:'p1', name:'Hội An — Phố Đèn Lồng', img:'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1600&q=80', sub:'Quảng Nam'},
  {id:'p2', name:'Sa Pa — Săn Mây Fansipan', img:'https://images.unsplash.com/photo-1528127269322-539801943592?w=1600&q=80', sub:'Lào Cai'},
  {id:'p3', name:'Phú Quốc — Đảo Ngọc', img:'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1600&q=80', sub:'Kiên Giang'},
  {id:'p4', name:'Huế — Cố Đô', img:'https://images.unsplash.com/photo-1528181304800-259b08848526?w=1600&q=80', sub:'Thừa Thiên Huế'},
  {id:'p5', name:'Đà Lạt — Ngàn Hoa', img:'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1600&q=80', sub:'Lâm Đồng'},
  {id:'p6', name:'Ninh Bình — Tràng An', img:'assets/img/ninh-binh-trang-an.jpg', sub:'Ninh Bình'}
];

let PC_LOC = null;
let PC_INITIAL_LOC_ID = null;
let PC_EDIT_PID = null;

function renderPostcardCreator(){
  const presets = PC_PRESETS;
  return `<div class="pc-header"><h3><i class="fas fa-paper-plane"></i> Bưu Thiếp Số</h3><p class="modal-sub">Chọn ảnh có sẵn hoặc tải ảnh lên · Viết lời nhắn · Chia sẻ MXH</p></div>
  <div class="pc-wrap">
    <div class="row g-4">
      <div class="col-lg-7">
        <div id="pc-preview">
          <div class="pc-stamp">TOUR-HUB</div>
          <div class="pc-bottom">
            <div class="pc-sub">Greetings from</div>
            <h3 id="pc-loc">HỘI AN</h3>
            <p class="pc-msg" id="pc-msg"></p>
          </div>
        </div>
      </div>
      <div class="col-lg-5">
        <div class="pc-controls">
          <div class="mb-3">
            <label class="form-label"><i class="fas fa-image" style="color:var(--primary)"></i> Chọn ảnh có sẵn</label>
            <select class="form-select" id="pc-loc-sel" onchange="onPCLocChange()">
              ${presets.map(p=>`<option value="${p.id}">${p.name}</option>`).join('')}
            </select>
          </div>
          <div class="mb-3">
            <label class="form-label"><i class="fas fa-upload" style="color:var(--primary)"></i> Hoặc tải ảnh của bạn</label>
            <label class="upload-zone" for="pc-upload">
              <i class="fas fa-cloud-upload-alt"></i>
              <div style="font-weight:600">Bấm để chọn ảnh</div>
              <small style="font-size:.78rem;color:var(--text-muted)">JPG / PNG · Tối đa 5MB</small>
            </label>
            <input type="file" id="pc-upload" accept="image/*" style="display:none" onchange="onPCUpload(event)">
          </div>
          <div class="mb-3">
            <label class="form-label">Tên địa điểm (in HOA trên ảnh)</label>
            <input type="text" class="form-control" id="pc-name" maxlength="24" placeholder="VD: HỘI AN" oninput="applyPCLoc()">
          </div>
          <div class="mb-3">
            <label class="form-label">Lời nhắn / lời chúc</label>
            <textarea class="form-control" id="pc-message" rows="2" maxlength="80" placeholder="Gửi mẹ từ Hội An — con khoẻ, mọi thứ thật đẹp!" oninput="applyPCLoc()"></textarea>
          </div>
          <button class="btn btn-primary btn-block" onclick="savePostcard()"><i class="fas fa-save"></i> Lưu vào Bưu thiếp của tôi</button>
          <button class="btn btn-warm btn-block" style="margin-top:8px" onclick="downloadPC()"><i class="fas fa-download"></i> Tải bưu thiếp</button>
          <div style="margin-top:14px">
            <label class="form-label" style="font-weight:700"><i class="fas fa-share-alt" style="color:var(--primary)"></i> Chia sẻ bưu thiếp</label>
            <div class="pc-share">
              <a class="s-fb" href="#" onclick="sharePostcard('facebook');return false;"><i class="fab fa-facebook-f"></i> Facebook</a>
              <a class="s-ms" href="#" onclick="sharePostcard('messenger');return false;"><i class="fab fa-facebook-messenger"></i> Messenger</a>
              <a class="s-ig" href="#" onclick="sharePostcard('instagram');return false;"><i class="fab fa-instagram"></i> Instagram</a>
              <a class="s-tt" href="#" onclick="sharePostcard('tiktok');return false;"><i class="fab fa-tiktok"></i> TikTok</a>
              <a class="s-tw" href="#" onclick="sharePostcard('twitter');return false;"><i class="fab fa-x-twitter"></i> X / Twitter</a>
            </div>
            <small style="display:block;margin-top:8px;color:var(--text-muted);font-size:.78rem"><i class="fas fa-info-circle"></i> Instagram & TikTok: tải ảnh xuống rồi đăng từ app điện thoại.</small>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

function initPCCreator(initImg, initTitle, initMsg){
  const sel = document.getElementById('pc-loc-sel');
  PC_LOC = PC_PRESETS[0];
  if(PC_INITIAL_LOC_ID){
    const found = PC_PRESETS.find(p=>p.id===PC_INITIAL_LOC_ID);
    if(found){PC_LOC=found;if(sel)sel.value=found.id;}
  }
  const preview = document.getElementById('pc-preview');
  if(preview){
    const src = initImg || PC_LOC.img;
    preview.style.backgroundImage = `url('${src}')`;
    if(initImg && initImg !== PC_LOC.img){
      PC_LOC = {id:'custom', name:initTitle||'My Postcard', img:initImg, sub:''};
    }
  }
  if(initTitle){const ni=document.getElementById('pc-name');if(ni)ni.value=initTitle.toUpperCase().slice(0,24);}
  if(initMsg){const mi=document.getElementById('pc-message');if(mi)mi.value=initMsg;}
  applyPCLoc();
}

function onPCLocChange(){
  const id = document.getElementById('pc-loc-sel').value;
  PC_LOC = PC_PRESETS.find(p=>p.id===id) || PC_PRESETS[0];
  document.getElementById('pc-preview').style.backgroundImage = `url('${PC_LOC.img}')`;
  applyPCLoc();
}
function applyPCLoc(){
  const preview = document.getElementById('pc-preview');
  if(!preview) return;
  if(PC_LOC && !preview.style.backgroundImage){preview.style.backgroundImage=`url('${PC_LOC.img}')`}
  const nameInput = document.getElementById('pc-name');
  const msgInput  = document.getElementById('pc-message');
  const display   = document.getElementById('pc-loc');
  const msg       = document.getElementById('pc-msg');
  if(!display || !msg) return;
  const fallback  = PC_LOC ? PC_LOC.name.split('—')[0].trim() : '';
  display.textContent = ((nameInput&&nameInput.value.trim()) || fallback).toUpperCase();
  msg.textContent = (msgInput&&msgInput.value.trim()) || '';
}
function onPCUpload(e){
  const f = e.target.files[0]; if(!f) return;
  if(f.size > 5*1024*1024){toast('Ảnh quá lớn (>5MB)','error');return}
  const r = new FileReader();
  r.onload = ev => {
    document.getElementById('pc-preview').style.backgroundImage = `url('${ev.target.result}')`;
    PC_LOC = {id:'custom', name:'My Postcard', img:ev.target.result, sub:'Custom upload'};
  };
  r.readAsDataURL(f);
}
let LAST_POSTCARD_DATAURL = null;
function downloadPC(){
  const node = document.getElementById('pc-preview');
  if(!node){toast('Hãy mở trình tạo bưu thiếp trước','warn');return;}
  if(typeof html2canvas==='undefined'){toast('Đang tải thư viện xuất ảnh, vui lòng thử lại','warn');return;}
  html2canvas(node,{useCORS:true,allowTaint:true,backgroundColor:null,scale:2}).then(canvas=>{
    LAST_POSTCARD_DATAURL = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.download = `tourhub-postcard-${Date.now()}.png`;
    a.href = LAST_POSTCARD_DATAURL;
    document.body.appendChild(a);a.click();a.remove();
    toast('Đã tải bưu thiếp','success');
  }).catch(err=>{toast('Không thể xuất ảnh — hãy thử ảnh tải lên thay vì ảnh internet','error');console.error(err)});
}
const downloadPostcard = downloadPC;

function sharePostcard(net){
  const url = encodeURIComponent(location.href);
  const text = encodeURIComponent('Gửi bưu thiếp số từ TOUR-HUB — Quét một mã, chạm cả hành trình!');
  let target='';
  switch(net){
    case 'facebook':  target=`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`;break;
    case 'messenger': target=`https://www.facebook.com/dialog/send?app_id=140586622674265&link=${url}&redirect_uri=${url}`;break;
    case 'twitter':   target=`https://twitter.com/intent/tweet?url=${url}&text=${text}`;break;
    case 'zalo':      target=`https://zalo.me/share/url?u=${url}`;break;
    case 'native':
      if(navigator.share){navigator.share({title:'TOUR-HUB Postcard',url:location.href}).catch(()=>{});return;}
      downloadPC();return;
    case 'instagram':
    case 'tiktok':
      downloadPC();
      toast(net==='instagram'
        ? 'Đã tải ảnh — mở Instagram trên điện thoại và đăng lên Story/Feed'
        : 'Đã tải ảnh — mở TikTok, tạo video và chèn ảnh bưu thiếp này','success');
      return;
  }
  window.open(target,'_blank','noopener,width=720,height=560');
}

// === Entry points tương thích v9_9 ===
function openPostcardEditor(opts){
  opts = opts || {};
  PC_INITIAL_LOC_ID = opts.presetId || null;
  PC_EDIT_PID = opts.editingPid || null;
  document.getElementById('detailBody').innerHTML = renderPostcardCreator();
  openModal('detailModal');
  setTimeout(()=>initPCCreator(opts.img, opts.title, opts.msg), 50);
}
function generatePostcard(checkinId){
  try{
    const c = (typeof DB!=='undefined' && DB.checkins) ? DB.checkins.find(x=>x.id===checkinId) : null;
    if(c){
      const m = PC_PRESETS.find(p =>
        c.name.toLowerCase().includes(p.name.split('—')[0].trim().toLowerCase()) ||
        (p.sub||'').toLowerCase().includes((c.loc||'').toLowerCase())
      );
      openPostcardEditor({presetId: m?m.id:null, img: c.img, title: c.name});
    } else {
      openPostcardEditor({});
    }
  }catch(e){console.error(e);openPostcardEditor({});}
}
function openCreatePostcardPicker(){
  // If postcards tab is visible, scroll to inline creator instead of opening modal (avoid duplicate IDs)
  const tab = document.getElementById('ci-postcards');
  if(tab && tab.style.display !== 'none'){
    const wrap = document.getElementById('pcCreatorWrap');
    if(wrap){
      if(wrap.dataset.inited !== '1'){ try{ renderInlinePostcardCreator(); }catch(e){} }
      wrap.scrollIntoView({behavior:'smooth', block:'start'});
      return;
    }
  }
  try{
    const c = (typeof DB!=='undefined' && DB.checkins && DB.checkins[0]) ? DB.checkins[0] : null;
    if(c) generatePostcard(c.id); else openPostcardEditor({});
  }catch(e){openPostcardEditor({});}
}
function setPcLocation(){/* stub - v4 không hỗ trợ */}

// === Saved postcards (giữ từ v9_9) ===
function savePostcard(){
  applyPCLoc();
  const nameInput = document.getElementById('pc-name');
  const msgInput  = document.getElementById('pc-message');
  const name = (nameInput && nameInput.value.trim()) || (PC_LOC?PC_LOC.name.split('—')[0].trim():'Bưu thiếp');
  const msg  = (msgInput && msgInput.value.trim()) || '';
  State.postcards = State.postcards || [];
  const data = {
    id: PC_EDIT_PID || ('pc_'+Date.now()),
    ciId: '',
    locName: PC_LOC?PC_LOC.name:name,
    loc: PC_LOC?(PC_LOC.sub||''):'',
    title: name,
    msg,
    frameKey:'default', filter:'none', template:'square', quality:1, stickers:[],
    customImg:(PC_LOC && PC_LOC.img && PC_LOC.img.startsWith('data:'))?PC_LOC.img:null,
    thumb: PC_LOC?PC_LOC.img:'',
    date: new Date().toISOString()
  };
  const idx = State.postcards.findIndex(p=>p.id===data.id);
  if(idx>=0) State.postcards[idx]=data; else State.postcards.unshift(data);
  save();
  toast(PC_EDIT_PID?'Đã cập nhật bưu thiếp':'Đã lưu vào Bưu thiếp của tôi','success');
  PC_EDIT_PID = data.id;
  closeModal('detailModal');
  if($('#ci-postcards') && $('#ci-postcards').style.display!=='none') renderMyPostcards();
}
function deletePostcard(pid){
  if(!confirm('Xoá bưu thiếp này?')) return;
  State.postcards = (State.postcards||[]).filter(p=>p.id!==pid);
  save(); renderMyPostcards(); toast('Đã xoá bưu thiếp','success');
}
function editSavedPostcard(pid){
  const p = (State.postcards||[]).find(x=>x.id===pid); if(!p) return;
  openPostcardEditor({img:p.customImg||p.thumb, title:p.title||p.locName, msg:p.msg, editingPid:p.id});
}
function sharePostcardSaved(pid){editSavedPostcard(pid); setTimeout(()=>sharePostcard('native'),400);}

function renderMyPostcards(){
  const wrap = document.getElementById('myPostcardsWrap'); if(!wrap) return;
  const list = State.postcards || [];
  const header = `<div class="pc-mine-head">
    <div><h3 style="margin:0"><i class="fas fa-envelope-open-text"></i> Bưu thiếp của tôi</h3><p style="margin:4px 0 0;color:var(--text-muted);font-size:.9rem">${list.length} bưu thiếp đã lưu</p></div>
    <button class="btn btn-primary btn-sm" onclick="openCreatePostcardPicker()"><i class="fas fa-plus"></i> Tạo bưu thiếp mới</button>
  </div>`;
  if(!list.length){
    wrap.innerHTML = header + `<div class="empty-state" style="padding:48px 16px;text-align:center;border:2px dashed var(--border);border-radius:16px;margin-top:16px">
      <i class="fas fa-envelope-open-text" style="font-size:3rem;color:var(--text-muted);margin-bottom:12px"></i>
      <h4 style="margin:8px 0">Chưa có bưu thiếp nào</h4>
      <p style="color:var(--text-muted);margin:0 0 14px">Tạo bưu thiếp đầu tiên để lưu lại khoảnh khắc đáng nhớ trong chuyến đi!</p>
      <button class="btn btn-primary" onclick="openCreatePostcardPicker()"><i class="fas fa-plus"></i> Tạo bưu thiếp số</button>
    </div>`;
    return;
  }
  const cards = list.map(p=>{
    const dt = new Date(p.date).toLocaleDateString('vi-VN');
    const img = p.customImg || p.thumb;
    return `<div class="pc-mine-card">
      <div class="pc-mine-img" style="background-image:url('${img}')">
        <div class="pc-mine-overlay">
          <h4>${p.title||p.locName}</h4>
          <small><i class="fas fa-map-marker-alt"></i> ${p.loc||''} · ${dt}</small>
          ${p.msg?`<p>"${p.msg}"</p>`:''}
        </div>
      </div>
      <div class="pc-mine-actions">
        <button class="btn btn-sm btn-ghost" onclick="editSavedPostcard('${p.id}')" title="Xem & chỉnh sửa"><i class="fas fa-edit"></i></button>
        <button class="btn btn-sm btn-ghost" onclick="sharePostcardSaved('${p.id}')" title="Chia sẻ"><i class="fas fa-share-nodes"></i></button>
        <button class="btn btn-sm btn-ghost" onclick="editSavedPostcard('${p.id}');setTimeout(downloadPC,500)" title="Tải về"><i class="fas fa-download"></i></button>
        <button class="btn btn-sm btn-ghost" style="color:var(--danger)" onclick="deletePostcard('${p.id}')" title="Xoá"><i class="fas fa-trash"></i></button>
      </div>
    </div>`;
  }).join('');
  wrap.innerHTML = header + `<div class="pc-mine-grid">${cards}</div>`;
}

function showPostcardQR(){
  const url = location.href;
  document.getElementById('detailBody').innerHTML = `<div class="pc-header"><h3><i class="fas fa-qrcode"></i> QR chia sẻ bưu thiếp</h3></div><div style="text-align:center;padding:20px"><img src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(url)}" alt="QR" style="border-radius:12px;max-width:100%"><p style="margin-top:14px;color:var(--text-muted)">Quét mã để mở bưu thiếp</p></div>`;
  openModal('detailModal');
}


// ========= AI PLANNER (thực tế hơn: chống trùng · thời gian di chuyển · chi phí theo hạng mục) =========
const ATTRACTIONS={
  'Hà Nội':['Hồ Hoàn Kiếm','Văn Miếu','Lăng Bác','Hoàng thành Thăng Long','Phố cổ Hà Nội','Bảo tàng Dân tộc học','Chùa Trấn Quốc'],
  'Hạ Long':['Vịnh Hạ Long','Hang Sửng Sốt','Đảo Titop','Làng chài Cửa Vạn','Hang Luồn'],
  'Sa Pa':['Bản Cát Cát','Đỉnh Fansipan','Thác Bạc','Chợ phiên Bắc Hà','Đèo Ô Quy Hồ','Bản Tả Van'],
  'Huế':['Đại Nội Huế','Lăng Tự Đức','Chùa Thiên Mụ','Lăng Khải Định','Sông Hương','Chợ Đông Ba'],
  'Đà Nẵng':['Bà Nà Hills','Cầu Vàng','Ngũ Hành Sơn','Bãi biển Mỹ Khê','Bán đảo Sơn Trà','Chợ Hàn'],
  'Hội An':['Phố cổ Hội An','Chùa Cầu','Làng gốm Thanh Hà','Rừng dừa Bảy Mẫu','Biển An Bàng','Thánh địa Mỹ Sơn'],
  'Đà Lạt':['Hồ Xuân Hương','Thung lũng Tình Yêu','Đồi chè Cầu Đất','Ga Đà Lạt','Thiền viện Trúc Lâm','Vườn hoa thành phố'],
  'Nha Trang':['Vinpearl Land','Tháp Bà Ponagar','Đảo Hòn Mun','Bãi biển Trần Phú','Suối khoáng nóng'],
  'Phú Quốc':['Cáp treo Hòn Thơm','Bãi Sao','VinWonders','Chợ đêm Phú Quốc','Suối Tranh','Làng chài Hàm Ninh'],
  'TP.HCM':['Dinh Độc Lập','Nhà thờ Đức Bà','Chợ Bến Thành','Địa đạo Củ Chi','Bảo tàng Chứng tích','Phố đi bộ Nguyễn Huệ']
};
function addMin(t,m){let[h,mi]=t.split(':').map(Number);mi+=m;h+=Math.floor(mi/60);mi%=60;return String(h%24).padStart(2,'0')+':'+String(mi).padStart(2,'0');}
function generatePlan(){
  const dest=$('#aiDest').value,days=+$('#aiDays').value,budget=+$('#aiBudget').value,pax=+$('#aiPax').value,group=$('#aiGroup').value,season=$('#aiSeason').value;
  const prefs=[...$$('#aiPrefs input:checked')].map(c=>c.value);
  if(!prefs.length)return toast('Chọn ít nhất 1 sở thích','error');
  // Hồ khách sạn & nhà hàng (ưu tiên đúng địa điểm, không trùng)
  const hotels=DB.services.filter(s=>s.type==='hotel');
  const hotel=hotels.find(h=>h.loc===dest)||hotels[0]||{name:'Khách sạn 4★ '+dest,price:1500000,desc:'Khách sạn trung tâm'};
  let restaurants=[...DB.foods].sort((a,b)=>(a.city===dest?-1:0)-(b.city===dest?-1:0));
  let spots=[...(ATTRACTIONS[dest]||['Tham quan trung tâm','Bảo tàng địa phương','Công viên thành phố'])];
  // xáo trộn nhẹ để đa dạng nhưng vẫn dedupe
  spots.sort(()=>Math.random()-0.5);
  const usedSpots=new Set(),usedRes=new Set();
  function nextSpot(){const s=spots.find(x=>!usedSpots.has(x));if(s){usedSpots.add(s);return s;}const any='Khám phá tự do '+(usedSpots.size+1);usedSpots.add(any);return any;}
  function nextRes(){const r=restaurants.find(x=>!usedRes.has(x.id));if(r){usedRes.add(r.id);return r;}return {name:'Nhà hàng đặc sản',price:180000};}
  const plan={dest,days,budget,pax,group,season,prefs,hotelName:hotel.name,hotelPrice:hotel.price,daysData:[]};
  for(let d=0;d<days;d++){
    const acts=[];let t='08:00';
    const br=nextRes();acts.push({time:t,name:'Ăn sáng: '+br.name,cat:'food',cost:Math.round((br.price||60000)*0.6),note:'Khởi đầu ngày mới'});
    t=addMin(t,75);
    const morningTravel=15+Math.round(Math.random()*15);t=addMin(t,morningTravel);
    const s1=nextSpot();acts.push({time:t,name:'Tham quan: '+s1,cat:'ticket',cost:120000,note:`Di chuyển ~${morningTravel} phút`});
    t=addMin(t,120);
    const lunch=nextRes();acts.push({time:addMin(t,15),name:'Ăn trưa: '+lunch.name,cat:'food',cost:lunch.price||220000,note:'Đặc sản địa phương'});
    t=addMin(t,105);
    const afTravel=20+Math.round(Math.random()*20);t=addMin(t,afTravel);
    const a2=prefs.includes('beach')?'Tắm biển & thư giãn':prefs.includes('nature')?'Trekking thiên nhiên':prefs.includes('adventure')?'Hoạt động mạo hiểm':prefs.includes('shopping')?'Mua sắm đặc sản':nextSpot();
    if(['beach','nature','adventure','shopping'].some(p=>prefs.includes(p)))usedSpots.add(a2);
    acts.push({time:t,name:a2,cat:'ticket',cost:prefs.includes('relax')?80000:180000,note:`Di chuyển ~${afTravel} phút`});
    t=addMin(t,150);
    const dinner=nextRes();acts.push({time:'19:00',name:'Ăn tối: '+dinner.name,cat:'food',cost:(dinner.price||300000)+50000,note:'Nhà hàng 4★'});
    acts.push({time:'21:00',name:prefs.includes('culture')?'Show văn hóa nghệ thuật':'Dạo phố đêm',cat:'ticket',cost:prefs.includes('culture')?200000:0,note:''});
    // chi phí di chuyển trong ngày (taxi/grab)
    const transport=180000+Math.round(Math.random()*120000);
    plan.daysData.push({acts,transport});
  }
  window._plan=plan;
  renderPlan();
  toast('Đã tạo lịch trình AI thực tế!','success');
}
function calcCosts(plan){
  let food=0,ticket=0,transport=0;const pax=plan.pax;
  plan.daysData.forEach(day=>{day.acts.forEach(a=>{if(a.cat==='food')food+=a.cost*pax;else if(a.cat==='ticket')ticket+=a.cost*pax;});transport+=day.transport;});
  const lodging=plan.hotelPrice*plan.days;
  return {food,ticket,transport,lodging,total:food+ticket+transport+lodging};
}
function renderPlan(){
  const plan=window._plan;if(!plan)return;
  const c=calcCosts(plan);
  $('#planSummary').innerHTML=`<div style="background:var(--surface-2);padding:12px;border-radius:10px"><div><strong>${plan.dest}</strong> · ${plan.days} ngày · ${plan.pax} người</div><div style="color:var(--text-muted);font-size:.85rem;margin-top:4px">${plan.group} · Mùa ${plan.season}</div><div style="margin-top:6px"><strong style="color:var(--primary)">${fmt(plan.budget)}</strong> ngân sách</div></div>`;
  let html='';
  plan.daysData.forEach((day,di)=>{
    let dayCost=plan.hotelPrice+day.transport+day.acts.reduce((s,a)=>s+a.cost*plan.pax,0);
    html+=`<div class="plan-day"><div class="plan-day-head"><h5>Ngày ${di+1} — ${plan.dest}</h5><span>${fmt(dayCost)}</span></div><div class="plan-day-body">
      <div class="plan-item"><div class="plan-time"><i class="fas fa-bed"></i></div><div class="plan-content"><h6><i class="fas fa-hotel" style="color:var(--primary)"></i> ${plan.hotelName}</h6><small>Lưu trú · ${fmt(plan.hotelPrice)}/đêm</small></div><div class="plan-cost">${fmt(plan.hotelPrice)}</div></div>
      ${day.acts.map((a,ai)=>`<div class="plan-item"><div class="plan-time">${a.time}</div><div class="plan-content"><h6>${a.name}</h6><small>${a.note||''} ${a.cat==='food'?'· 🍜 Ăn uống':a.cat==='ticket'?'· 🎟 Tham quan':''}</small></div><div class="plan-cost">${a.cost?fmt(a.cost*plan.pax):'Miễn phí'}</div><div class="pi-actions"><button title="Xóa" onclick="removeAct(${di},${ai})"><i class="fas fa-trash"></i></button></div></div>`).join('')}
      <div class="plan-item"><div class="plan-time"><i class="fas fa-taxi"></i></div><div class="plan-content"><h6>Di chuyển trong ngày</h6><small>Taxi/Grab giữa các điểm</small></div><div class="plan-cost">${fmt(day.transport)}</div></div>
    </div></div>`;
  });
  const status=c.total<=plan.budget?`<span class="badge success">✓ Trong ngân sách (còn ${fmt(plan.budget-c.total)})</span>`:`<span class="badge danger">⚠ Vượt ngân sách ${fmt(c.total-plan.budget)}</span>`;
  const breakdown=`<div class="cost-grid">
    <div class="cost-cell"><i class="fas fa-bed"></i><div class="lbl">Lưu trú</div><div class="val">${fmt(c.lodging)}</div></div>
    <div class="cost-cell"><i class="fas fa-utensils"></i><div class="lbl">Ăn uống</div><div class="val">${fmt(c.food)}</div></div>
    <div class="cost-cell"><i class="fas fa-ticket"></i><div class="lbl">Vé tham quan</div><div class="val">${fmt(c.ticket)}</div></div>
    <div class="cost-cell"><i class="fas fa-car"></i><div class="lbl">Di chuyển</div><div class="val">${fmt(c.transport)}</div></div>
  </div>`;
  $('#planResult').innerHTML=`<div class="dash-card" style="margin-bottom:16px"><div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px"><div><h5 style="margin:0">Lịch trình ${plan.days} ngày · ${plan.dest}</h5><div style="margin-top:6px">Tổng: <strong style="color:var(--primary);font-size:1.2rem">${fmt(c.total)}</strong> · ${status}</div></div><div style="display:flex;gap:8px"><button class="btn btn-ghost" onclick="savePlan()"><i class="fas fa-save"></i> Lưu</button><button class="btn btn-primary" onclick="exportPDF()"><i class="fas fa-file-pdf"></i> Xuất PDF</button></div></div>${breakdown}</div>${html}`;
}
function removeAct(di,ai){window._plan.daysData[di].acts.splice(ai,1);renderPlan();toast('Đã xóa hoạt động — đã tính lại chi phí');}
function savePlan(){if(!requireAuth())return;if(!window._plan)return;const c=calcCosts(window._plan);State.plans.unshift({dest:window._plan.dest,days:window._plan.days,pax:window._plan.pax,totalCost:c.total,plan:window._plan,id:Date.now(),saved:new Date().toISOString()});save();toast('Đã lưu hành trình','success');}
function exportPDF(){
  if(!window.jspdf)return toast('PDF lib đang tải...','error');
  const plan=window._plan;if(!plan)return;const c=calcCosts(plan);
  const {jsPDF}=window.jspdf;const doc=new jsPDF();
  doc.setFontSize(18);doc.text('TOUR-HUB v9 - Itinerary',14,18);
  doc.setFontSize(11);doc.text(`Destination: ${plan.dest} | ${plan.days} days | ${plan.pax} pax`,14,28);
  doc.text(`Lodging ${fmt(c.lodging)} | Food ${fmt(c.food)} | Tickets ${fmt(c.ticket)} | Transport ${fmt(c.transport)}`,14,36);
  doc.text(`TOTAL: ${fmt(c.total)}`,14,44);
  let y=56;plan.daysData.forEach((day,i)=>{
    doc.setFontSize(12);doc.text(`Day ${i+1}`,14,y);y+=6;doc.setFontSize(9);
    day.acts.forEach(a=>{const n=a.name.replace(/[^\x00-\x7F]/g,'');doc.text(`${a.time} - ${n.slice(0,55)} - ${fmt(a.cost*plan.pax)}`,16,y);y+=5;if(y>270){doc.addPage();y=20;}});
    y+=4;if(y>270){doc.addPage();y=20;}
  });
  doc.save('tourhub-itinerary.pdf');toast('PDF đã xuất','success');
}


// ========= PAYMENT (mã giao dịch duy nhất · khóa nút · hết hạn · khôi phục) =========
let _payTimer=null;
function genTxnId(){return 'TXN'+Date.now().toString(36).toUpperCase()+Math.random().toString(36).slice(2,6).toUpperCase();}
function openPay(recovered){
  const ctx=State.payContext;if(!ctx)return;
  if(!recovered){
    State.pendingTxn={id:genTxnId(),ctx,method:'vietqr',createdAt:Date.now(),expiresAt:Date.now()+10*60*1000};
    save();
  }
  State.paying=false;
  $('#paySub').innerHTML=`Mã GD: <b>${State.pendingTxn.id}</b> · Tổng: <b>${fmt(ctx.total)}</b> · ${ctx.type==='ocop'?'Sản phẩm OCOP':ctx.type==='service'?'Dịch vụ':ctx.type==='guide'?'Hướng dẫn viên':'Đặt bàn'}`;
  pickPay(State.pendingTxn.method||'vietqr');
  openModal('payModal');
  startPayTimer();
}
function startPayTimer(){
  clearInterval(_payTimer);
  _payTimer=setInterval(()=>{
    if(!State.pendingTxn){clearInterval(_payTimer);return;}
    const left=State.pendingTxn.expiresAt-Date.now();
    const el=$('#payTimer');
    if(left<=0){clearInterval(_payTimer);cancelTxn(true);return;}
    if(el)el.textContent=Math.floor(left/60000)+':'+String(Math.floor(left/1000)%60).padStart(2,'0');
  },1000);
}
function cancelTxn(expired){clearInterval(_payTimer);State.pendingTxn=null;State.paying=false;save();closeModal('payModal');toast(expired?'Giao dịch đã hết hạn, vui lòng thử lại':'Đã hủy giao dịch',expired?'error':'');}
function pickPay(m){State.payMethod=m;if(State.pendingTxn){State.pendingTxn.method=m;save();}$$('#payMethods .pay-method').forEach(p=>p.classList.toggle('active',p.dataset.m===m));renderPay();}
function renderPay(){
  const m=State.payMethod,total=State.payContext.total,txn=State.pendingTxn?.id||'';
  const qr=`https://img.vietqr.io/image/970422-0123456789-compact2.png?amount=${total}&addInfo=${txn}&accountName=TOUR%20HUB`;
  let html=`<div style="text-align:right;margin-bottom:10px"><span class="pay-timer"><i class="fas fa-clock"></i> Hết hạn sau <span id="payTimer">10:00</span></span></div>`;
  if(m==='vietqr')html+=`<div class="qr-box"><img src="${qr}" alt="VietQR" ${lazy}><div>Quét mã VietQR bằng app ngân hàng bất kỳ</div><strong style="font-size:1.3rem;color:var(--primary);display:block;margin-top:8px">${fmt(total)}</strong></div>`;
  else if(m==='momo')html+=`<div class="qr-box"><div style="font-size:3rem;color:#a50064;margin-bottom:10px"><i class="fas fa-mobile-alt"></i></div><strong>Momo Pay</strong><div style="margin-top:6px">Số ĐT nhận: <strong>0987 654 321</strong></div><div>Nội dung: <strong>${txn}</strong></div><div>Số tiền: <strong style="color:#a50064">${fmt(total)}</strong></div></div>`;
  else if(m==='zalo')html+=`<div class="qr-box"><div style="font-size:3rem;color:#0068ff;margin-bottom:10px"><i class="fas fa-comment-dollar"></i></div><strong>ZaloPay</strong><div style="margin-top:6px">Mã đơn: <strong>${txn}</strong></div><div>Số tiền: <strong style="color:#0068ff">${fmt(total)}</strong></div></div>`;
  else if(m==='vnpay')html+=`<div class="qr-box"><div style="font-size:3rem;color:#005baa;margin-bottom:10px"><i class="fas fa-university"></i></div><strong>VNPay QR / Internet Banking</strong><div style="margin-top:6px">Sẽ chuyển hướng đến cổng VNPay</div></div>`;
  else if(m==='stripe')html+=`<div class="dash-card"><div class="field" style="margin-bottom:10px"><label>Số thẻ</label><input placeholder="4242 4242 4242 4242"></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div class="field"><label>MM/YY</label><input placeholder="12/26"></div><div class="field"><label>CVC</label><input placeholder="123"></div></div></div>`;
  else if(m==='paypal')html+=`<div class="qr-box"><div style="font-size:3rem;color:#003087;margin-bottom:10px"><i class="fab fa-paypal"></i></div><strong>PayPal Checkout</strong><div style="margin-top:6px">Sẽ chuyển hướng đến PayPal.com</div></div>`;
  html+=`<div style="display:flex;gap:8px;margin-top:18px"><button class="btn btn-ghost" onclick="cancelTxn(false)" style="flex:1">Hủy</button><button class="btn btn-primary" id="payConfirmBtn" onclick="confirmPay()" style="flex:2"><i class="fas fa-check"></i> Xác nhận thanh toán ${fmt(total)}</button></div>`;
  $('#payContent').innerHTML=html;
}
function confirmPay(){
  if(State.paying)return; // chống nhấn nhiều lần / đơn trùng
  State.paying=true;
  const btn=$('#payConfirmBtn');if(btn){btn.disabled=true;btn.innerHTML='<i class="fas fa-circle-notch fa-spin"></i> Đang xử lý...';}
  const txn=State.pendingTxn;
  setTimeout(()=>{
    const ctx=State.payContext;
    const order={id:txn.id,...ctx,method:State.payMethod,status:'paid',date:new Date().toISOString(),user:State.user?.email};
    State.orders.unshift(order);
    if(ctx.type==='ocop'){
      // trừ tồn kho thực tế
      (ctx.items||[]).forEach(it=>{const p=DB.ocop.find(o=>o.id===it.id);if(p)p.stock=Math.max(0,p.stock-it.qty);});
      State.cart=[];
    }
    clearInterval(_payTimer);State.pendingTxn=null;State.paying=false;
    save();updateCartBadge();closeModal('payModal');
    toast('✓ Thanh toán thành công! Mã GD '+txn.id,'success');
  },900);
}
function recoverPendingTxn(){
  if(State.pendingTxn){
    if(State.pendingTxn.expiresAt<=Date.now()){State.pendingTxn=null;save();return;}
    State.payContext=State.pendingTxn.ctx;State.payMethod=State.pendingTxn.method||'vietqr';
    setTimeout(()=>{toast('Khôi phục giao dịch đang chờ '+State.pendingTxn.id);openPay(true);},600);
  }
}

// ========= WISHLIST =========
function addWishlist(id,name,type,place){if(!requireAuth())return;if(State.wishlist.find(w=>w.id===id))return toast('Đã có trong yêu thích');State.wishlist.push({id,name,type,place:place||'',date:new Date().toISOString()});save();toast('Đã thêm vào yêu thích ❤','success');}
function removeWishlist(id){State.wishlist=State.wishlist.filter(w=>w.id!==id);save();renderProfile();}
// Lịch sử xem theo nhóm
function saveHistoryItem(item,type){if(!item)return;State.viewHistory=State.viewHistory||JSON.parse(localStorage.getItem('th_viewHist')||'[]');State.viewHistory=State.viewHistory.filter(h=>!(h.id===item.id&&h.type===type));State.viewHistory.unshift({id:item.id,name:item.name,type,place:item.city||item.loc||item.seller||'',date:new Date().toISOString()});State.viewHistory=State.viewHistory.slice(0,60);localStorage.setItem('th_viewHist',JSON.stringify(State.viewHistory));}


// ========= PROFILE (phân nhóm lịch sử · yêu thích chi tiết · phân trang) =========
const PROF={hist:1,fav:1,PER:5};
const TYPE_LABEL={service:'Dịch vụ',hotel:'Khách sạn',tour:'Tour',car:'Xe',ticket:'Vé',food:'Nhà hàng',ocop:'Sản phẩm OCOP',checkin:'Check-in',guide:'HDV',story:'Story'};
function pager(total,page,per,fn){const pages=Math.ceil(total/per);if(pages<=1)return '';let b='';for(let i=1;i<=pages;i++)b+=`<button class="${i===page?'active':''}" onclick="${fn}(${i})">${i}</button>`;return `<div class="pager"><button onclick="${fn}(${page-1})" ${page<=1?'disabled':''}>‹</button>${b}<button onclick="${fn}(${page+1})" ${page>=pages?'disabled':''}>›</button></div>`;}
function goHistPage(p){PROF.hist=Math.max(1,p);renderProfile();}
function goFavPage(p){PROF.fav=Math.max(1,p);renderProfile();}
function renderProfile(){
  if(!State.user){go('home');openAuth();return;}
  const u=State.user;
  // Nhóm đơn hàng theo loại
  const groups={};State.orders.forEach(o=>{const k=o.type;(groups[k]=groups[k]||[]).push(o);});
  const groupHtml=Object.keys(groups).length?Object.keys(groups).map(k=>`<div style="margin-bottom:12px"><div style="font-weight:700;font-size:.9rem;margin-bottom:6px"><i class="fas fa-tag" style="color:var(--primary)"></i> ${TYPE_LABEL[k]||k} (${groups[k].length})</div><table class="adm"><tr><th>Mã GD</th><th>Tổng</th><th>Ngày</th><th>Trạng thái</th></tr>${groups[k].map(o=>`<tr><td>${o.id}</td><td><strong>${fmt(o.total)}</strong></td><td>${new Date(o.date).toLocaleDateString('vi-VN')}</td><td><span class="badge success">Đã thanh toán</span></td></tr>`).join('')}</table></div>`).join(''):'<div class="empty"><i class="fas fa-receipt"></i>Chưa có đơn nào</div>';
  // Yêu thích phân trang
  const favStart=(PROF.fav-1)*PROF.PER;const favPage=State.wishlist.slice(favStart,favStart+PROF.PER);
  const favHtml=State.wishlist.length?favPage.map(w=>`<div style="padding:10px;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center"><div><strong>${w.name}</strong><br><small style="color:var(--text-muted)"><span class="badge">${TYPE_LABEL[w.type]||w.type}</span> ${w.place?'· '+w.place:''} · Lưu ${new Date(w.date).toLocaleDateString('vi-VN')}</small></div><button class="icon-btn danger" onclick="removeWishlist('${w.id}')"><i class="fas fa-trash"></i></button></div>`).join('')+pager(State.wishlist.length,PROF.fav,PROF.PER,'goFavPage'):'<div class="empty"><i class="far fa-heart"></i>Chưa lưu gì</div>';
  // Lịch sử xem (theo nhóm nội dung)
  const vh=JSON.parse(localStorage.getItem('th_viewHist')||'[]');
  const vhStart=(PROF.hist-1)*PROF.PER;const vhPage=vh.slice(vhStart,vhStart+PROF.PER);
  const vhHtml=vh.length?vhPage.map(h=>`<div style="padding:8px 0;border-bottom:1px solid var(--border);cursor:pointer" onclick="openByType('${h.type}','${h.id}')"><strong>${h.name}</strong> <small style="color:var(--text-muted)">· <span class="badge">${TYPE_LABEL[h.type]||h.type}</span> ${h.place?'· '+h.place:''} · ${new Date(h.date).toLocaleDateString('vi-VN')}</small></div>`).join('')+pager(vh.length,PROF.hist,PROF.PER,'goHistPage'):'<div class="empty"><i class="fas fa-clock-rotate-left"></i>Chưa có lịch sử</div>';
  $('#profileBody').innerHTML=`<div class="detail-grid">
    <div>
      <div class="dash-card" style="display:flex;gap:18px;align-items:center"><div style="width:80px;height:80px;border-radius:50%;background:var(--gradient);color:#fff;display:grid;place-items:center;font-size:2rem;font-weight:800">${u.avatar||u.name[0]}</div><div><h4 style="margin:0">${u.name}</h4><div style="color:var(--text-muted)">${u.email}</div><div style="margin-top:6px"><span class="badge success">Du khách Vàng</span></div></div></div>
      <div class="dash-card"><h5><i class="fas fa-layer-group"></i> Lịch sử đơn hàng theo nhóm (${State.orders.length})</h5>${groupHtml}</div>
      <div class="dash-card"><h5><i class="fas fa-clock-rotate-left"></i> Lịch sử xem gần đây (${vh.length})</h5>${vhHtml}</div>
      <div class="dash-card"><h5><i class="fas fa-heart"></i> Yêu thích (${State.wishlist.length})</h5>${favHtml}</div>
      <div class="dash-card"><h5><i class="fas fa-route"></i> Hành trình đã lưu (${State.plans.length})</h5>${State.plans.length?State.plans.map(p=>`<div style="padding:10px;border:1px solid var(--border);border-radius:10px;margin-bottom:8px;display:flex;justify-content:space-between"><div><strong>${p.dest}</strong> · ${p.days} ngày · ${p.pax} người<br><small>${fmt(p.totalCost)}</small></div></div>`).join(''):'<div class="empty"><i class="fas fa-route"></i>Chưa có hành trình</div>'}</div>
    </div>
    <div>
      <div class="dash-card"><h5>Tài khoản</h5><button class="btn btn-ghost btn-block" style="margin-bottom:6px"><i class="fas fa-cog"></i> Cài đặt</button><button class="btn btn-ghost btn-block" style="margin-bottom:6px" onclick="go('admin')"><i class="fas fa-chart-line"></i> Admin Dashboard</button><button class="btn btn-ghost btn-block" style="margin-bottom:6px"><i class="fas fa-bell"></i> Thông báo</button><button class="btn btn-ghost btn-block" onclick="logout()"><i class="fas fa-sign-out-alt"></i> Đăng xuất</button></div>
      <div class="dash-card"><h5>Thống kê</h5><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;text-align:center"><div><strong style="font-size:1.4rem;color:var(--primary)">${State.orders.length}</strong><br><small>Đơn hàng</small></div><div><strong style="font-size:1.4rem;color:var(--primary)">${State.plans.length}</strong><br><small>Hành trình</small></div><div><strong style="font-size:1.4rem;color:var(--primary)">${State.wishlist.length}</strong><br><small>Yêu thích</small></div><div><strong style="font-size:1.4rem;color:var(--primary)">${DB.badges.filter(b=>b.unlocked).length}</strong><br><small>Huy hiệu</small></div></div></div>
    </div>
  </div>`;
}


// ========= ADMIN =========
function switchAdm(t){$$('#page-admin .tab').forEach(b=>b.classList.toggle('active',b.dataset.atab===t));['overview','orders','local'].forEach(x=>$('#adm-'+x).style.display=x===t?'block':'none');if(t==='overview')setTimeout(drawCharts,100);if(t==='orders')renderAdmOrders();}
// Cache số liệu thống kê 60s để tránh truy vấn lặp
const _statCache={};
function cached(key,ttl,fn){const c=_statCache[key];if(c&&Date.now()-c.t<ttl)return c.v;const v=fn();_statCache[key]={t:Date.now(),v};return v;}
function renderAdmin(){
  const totalRev=cached('rev',60000,()=>State.orders.reduce((s,o)=>s+o.total,0)+125000000);
  $('#adm-overview').innerHTML=`<div class="kpi-grid">
    <div class="kpi"><i class="fas fa-users kpi-icon"></i><h6>Người dùng</h6><strong>12,453</strong><div class="kpi-trend up">↑ 18% tháng này</div></div>
    <div class="kpi"><i class="fas fa-shopping-bag kpi-icon"></i><h6>Đơn hàng</h6><strong>${(State.orders.length+1842).toLocaleString()}</strong><div class="kpi-trend up">↑ 12%</div></div>
    <div class="kpi"><i class="fas fa-coins kpi-icon"></i><h6>Doanh thu</h6><strong>${fmt(totalRev)}</strong><div class="kpi-trend up">↑ 24%</div></div>
    <div class="kpi"><i class="fas fa-map-marker-alt kpi-icon"></i><h6>Điểm đến</h6><strong>284</strong><div class="kpi-trend up">↑ 6 mới</div></div>
    <div class="kpi"><i class="fas fa-user-tie kpi-icon"></i><h6>HDV</h6><strong>${DB.guides.length+312}</strong><div class="kpi-trend up">↑ 9%</div></div>
    <div class="kpi"><i class="fas fa-box kpi-icon"></i><h6>OCOP SKU</h6><strong>2,547</strong><div class="kpi-trend up">↑ 15%</div></div>
  </div>
  <div class="dash-grid">
    <div class="dash-card"><h5>Doanh thu 7 ngày</h5><canvas id="chartRev" height="100"></canvas></div>
    <div class="dash-card"><h5>Phân bổ theo Hub</h5><canvas id="chartHub" height="100"></canvas></div>
  </div>`;
  renderAdmOrders();
  $('#adm-local').innerHTML=`<div class="kpi-grid"><div class="kpi"><h6>Lượt truy cập</h6><strong>48,290</strong></div><div class="kpi"><h6>Quét QR</h6><strong>12,847</strong></div><div class="kpi"><h6>Check-in</h6><strong>3,562</strong></div><div class="kpi"><h6>Doanh thu địa phương</h6><strong>${fmt(485000000)}</strong></div></div><div class="dash-grid"><div class="dash-card"><h5>Top 5 điểm đến tỉnh Quảng Nam</h5><canvas id="chartLocal" height="120"></canvas></div><div class="dash-card"><h5>Heatmap du khách</h5><div id="heatMap" style="height:300px;border-radius:10px"></div></div></div>`;
  setTimeout(drawCharts,100);
}
// Đơn hàng: tìm kiếm + lọc + phân trang (xử lý "phía máy chủ" mô phỏng theo trang)
const ADM={page:1,PER:10,q:'',status:''};
function admServerQuery(){ // mô phỏng truy vấn server: lọc rồi cắt trang
  const all=[...State.orders,...mockOrders()];
  let rows=all.filter(o=>(!ADM.status||o.status===ADM.status)&&(!ADM.q||relevance((o.id+' '+(o.user||o.userName||'')+' '+o.type),ADM.q)>0));
  const total=rows.length;const start=(ADM.page-1)*ADM.PER;
  return {rows:rows.slice(start,start+ADM.PER),total};
}
const renderAdmOrders=debounce(_renderAdmOrders,150);
function admSearch(v){ADM.q=v;ADM.page=1;_renderAdmOrders();}
function admStatus(v){ADM.status=v;ADM.page=1;_renderAdmOrders();}
function admPage(p){ADM.page=Math.max(1,p);_renderAdmOrders();}
function _renderAdmOrders(){
  const {rows,total}=admServerQuery();
  $('#adm-orders').innerHTML=`<div class="dash-card"><div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:12px"><h5 style="margin:0">Đơn hàng (${total})</h5><div style="display:flex;gap:8px;flex-wrap:wrap"><input class="field" style="width:200px" placeholder="Tìm mã/khách/loại..." value="${ADM.q}" oninput="admSearch(this.value)"><select class="field" onchange="admStatus(this.value)"><option value=""${ADM.status===''?' selected':''}>Tất cả</option><option value="paid"${ADM.status==='paid'?' selected':''}>paid</option><option value="pending"${ADM.status==='pending'?' selected':''}>pending</option></select><button class="btn btn-ghost btn-sm" onclick="exportAdmCSV()"><i class="fas fa-file-export"></i> Xuất CSV</button></div></div>
  <table class="adm"><tr><th>Mã GD</th><th>Khách</th><th>Loại</th><th>Tổng</th><th>Trạng thái</th><th>Ngày</th></tr>${rows.length?rows.map(o=>`<tr><td><strong>${o.id}</strong></td><td>${o.user||o.userName||'guest'}</td><td>${o.type}</td><td><strong>${fmt(o.total)}</strong></td><td><span class="badge ${o.status==='paid'?'success':o.status==='pending'?'warn':'danger'}">${o.status}</span></td><td>${new Date(o.date).toLocaleDateString('vi-VN')}</td></tr>`).join(''):'<tr><td colspan="6"><div class="empty" style="padding:30px"><i class="fas fa-inbox"></i>Không có đơn hàng</div></td></tr>'}</table>
  ${pager(total,ADM.page,ADM.PER,'admPage')}</div>`;
}
function exportAdmCSV(){
  const all=[...State.orders,...mockOrders()].filter(o=>(!ADM.status||o.status===ADM.status)&&(!ADM.q||relevance((o.id+' '+(o.user||o.userName||'')+' '+o.type),ADM.q)>0));
  const rows=[['Ma GD','Khach','Loai','Tong','Trang thai','Ngay'],...all.map(o=>[o.id,o.user||o.userName||'guest',o.type,o.total,o.status,new Date(o.date).toISOString().slice(0,10)])];
  const csv=rows.map(r=>r.map(c=>`"${c}"`).join(',')).join('\n');
  const blob=new Blob(['\uFEFF'+csv],{type:'text/csv;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='tourhub-orders.csv';a.click();toast('Đã xuất CSV ('+all.length+' đơn)','success');
}
function mockOrders(){return [{id:'TXN20051',user:'minh@gmail.com',type:'hotel',total:3500000,status:'paid',date:Date.now()-86400000},{id:'TXN20050',user:'lan@gmail.com',type:'ocop',total:850000,status:'pending',date:Date.now()-172800000},{id:'TXN20049',user:'tuan@gmail.com',type:'tour',total:2500000,status:'paid',date:Date.now()-259200000},{id:'TXN20048',user:'hoa@gmail.com',type:'guide',total:1500000,status:'paid',date:Date.now()-300000000},{id:'TXN20047',user:'nam@gmail.com',type:'ticket',total:950000,status:'pending',date:Date.now()-360000000},{id:'TXN20046',user:'thu@gmail.com',type:'ocop',total:1240000,status:'paid',date:Date.now()-420000000},{id:'TXN20045',user:'binh@gmail.com',type:'car',total:280000,status:'paid',date:Date.now()-480000000},{id:'TXN20044',user:'mai@gmail.com',type:'hotel',total:4200000,status:'paid',date:Date.now()-540000000},{id:'TXN20043',user:'long@gmail.com',type:'tour',total:1800000,status:'pending',date:Date.now()-600000000},{id:'TXN20042',user:'ha@gmail.com',type:'ocop',total:450000,status:'paid',date:Date.now()-660000000},{id:'TXN20041',user:'phong@gmail.com',type:'food',total:160000,status:'paid',date:Date.now()-720000000}]}

function drawCharts(){
  if(!window.Chart)return;
  ['chartRev','chartHub','chartLocal'].forEach(id=>{const c=document.getElementById(id);if(c&&c._chart)c._chart.destroy();});
  const cr=document.getElementById('chartRev');
  if(cr)cr._chart=new Chart(cr,{type:'line',data:{labels:['T2','T3','T4','T5','T6','T7','CN'],datasets:[{label:'VNĐ (triệu)',data:[120,145,132,168,195,220,210],borderColor:'#013230',backgroundColor:'rgba(1,50,48,.1)',fill:true,tension:.4}]},options:{plugins:{legend:{display:false}}}});
  const ch=document.getElementById('chartHub');
  if(ch)ch._chart=new Chart(ch,{type:'doughnut',data:{labels:['Service','OCOP','Food','Guide','Other'],datasets:[{data:[42,28,15,10,5],backgroundColor:['#013230','#FF6A1F','#4C8A7A','#C9B791','#9B2C1F']}]}});
  const cl=document.getElementById('chartLocal');
  if(cl)cl._chart=new Chart(cl,{type:'bar',data:{labels:['Hội An','Mỹ Sơn','Cù Lao Chàm','Bà Nà','Núi Thành'],datasets:[{label:'Khách',data:[12400,8500,6200,15800,3100],backgroundColor:'#013230'}]}});
  if(window.L&&document.getElementById('heatMap')&&!document.getElementById('heatMap')._init){const m=L.map('heatMap').setView([15.88,108.33],10);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(m);DB.checkins.forEach(c=>L.circleMarker([c.lat,c.lng],{radius:Math.sqrt(c.likes)/3,color:'#ef4444',fillOpacity:.5}).addTo(m));document.getElementById('heatMap')._init=true;}
}

// ========= STORY CONTRIBUTE =========
function openContribute(type){if(!requireAuth())return;toast(`Form đóng góp ${type} (demo) — cộng đồng & HDV có thể submit nội dung`,'success');}

// ========= QR SCANNER (tích hợp từ v6.2) =========
let _mediaStream=null,_scanTimer=null;
function manualQR(){const v=$('#qrManualInput').value.trim();if(!v)return toast('Nhập mã trước đã','error');onScan(v);}
async function startScan(){
  const wrap=$('#qrVideoWrap'),video=$('#qrVideo'),st=$('#qrStatus'),help=$('#qrErrorHelp');
  if(_mediaStream)return;
  if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){st.textContent='⚠ Trình duyệt không hỗ trợ camera. Hãy dùng "Mô phỏng quét".';return;}
  try{
    _mediaStream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'}});
    video.srcObject=_mediaStream;video.style.display='block';wrap.classList.remove('empty');wrap.classList.add('scanning');
    await video.play();
    $('#btnStartScan').disabled=true;$('#btnStopScan').disabled=false;help.classList.remove('show');
    st.innerHTML='<i class="fas fa-circle-notch fa-spin"></i> Đang quét... Hướng camera vào mã QR';
    _scanTimer=setInterval(scanFrame,400);
  }catch(err){
    if(err.name==='NotAllowedError'){st.innerHTML='<i class="fas fa-ban" style="color:var(--danger)"></i> Bạn đã từ chối quyền camera.';help.innerHTML='<b>Cách bật lại quyền camera:</b><br>• Bấm biểu tượng 🔒 hoặc 📷 trên thanh địa chỉ<br>• Chọn <b>Cho phép</b> camera cho trang này<br>• Tải lại trang và bấm lại "Mở camera".<br>Hoặc nhập mã thủ công bên dưới.';}
    else if(err.name==='NotFoundError'){st.innerHTML='<i class="fas fa-camera-slash" style="color:var(--danger)"></i> Không tìm thấy camera.';help.innerHTML='Thiết bị không có camera khả dụng. Hãy nhập mã thủ công hoặc dùng "Mô phỏng quét".';}
    else{st.innerHTML='<i class="fas fa-exclamation-triangle" style="color:var(--danger)"></i> Không truy cập được camera: '+err.message;help.innerHTML='Có thể do trang chưa chạy HTTPS. Hãy nhập mã thủ công.';}
    help.classList.add('show');
  }
}
function stopScan(){
  const wrap=$('#qrVideoWrap'),video=$('#qrVideo');
  if(_scanTimer){clearInterval(_scanTimer);_scanTimer=null;}
  if(_mediaStream){_mediaStream.getTracks().forEach(t=>t.stop());_mediaStream=null;}
  if(video){video.srcObject=null;video.style.display='none';}
  if(wrap){wrap.classList.remove('scanning');wrap.classList.add('empty');}
  const b1=$('#btnStartScan'),b2=$('#btnStopScan');if(b1)b1.disabled=false;if(b2)b2.disabled=true;
}
function scanFrame(){
  const video=$('#qrVideo'),canvas=$('#qrCanvas');
  if(!video||video.readyState!==video.HAVE_ENOUGH_DATA)return;
  canvas.width=video.videoWidth;canvas.height=video.videoHeight;
  const ctx=canvas.getContext('2d');ctx.drawImage(video,0,0,canvas.width,canvas.height);
  if(typeof jsQR==='undefined')return;
  const img=ctx.getImageData(0,0,canvas.width,canvas.height);
  const code=jsQR(img.data,img.width,img.height,{inversionAttempts:'dontInvert'});
  if(code&&code.data)onScan(code.data);
}
function findByCode(code){
  return DB.stories.find(s=>s.id===code)||DB.foods.find(f=>f.id===code)||DB.services.find(s=>s.id===code)||DB.ocop.find(o=>o.id===code)||DB.checkins.find(c=>c.id===code)||DB.guides.find(g=>g.id===code)||null;
}
function typeOf(item){if(DB.stories.includes(item))return 'story';if(DB.foods.includes(item))return 'food';if(DB.services.includes(item))return 'service';if(DB.ocop.includes(item))return 'ocop';if(DB.checkins.includes(item))return 'checkin';if(DB.guides.includes(item))return 'guide';return '';}
function onScan(data){
  stopScan();
  const st=$('#qrStatus');
  const item=findByCode((data||'').trim());
  if(item){
    if(st)st.innerHTML=`<i class="fas fa-check-circle" style="color:var(--success)"></i> Quét thành công: <b>${item.name}</b>`;
    const t=typeOf(item);
    setTimeout(()=>{if(t==='guide'){goDetail('guide','showGuideDetail',item.id);}else openByType(t,item.id);},350);
  }else{
    if(st)st.innerHTML=`<i class="fas fa-question-circle" style="color:var(--warn)"></i> Mã "${data}" không khớp dữ liệu — thử mô phỏng.`;
    simScan();
  }
}
function simScan(){
  const st=$('#qrStatus');
  const all=[...DB.stories,...DB.foods,...DB.checkins,...DB.ocop];
  const pick=all[Math.floor(Math.random()*all.length)];
  if(st)st.innerHTML='<i class="fas fa-bolt" style="color:var(--accent)"></i> Mô phỏng quét thành công: <b>'+pick.name+'</b>';
  setTimeout(()=>openByType(typeOf(pick),pick.id),300);
}

// ========= INIT =========
document.addEventListener('DOMContentLoaded',()=>{
  updateAuthUI();updateCartBadge();if(document.getElementById('page-home'))renderHome();
  recoverPendingTxn(); // khôi phục giao dịch đang chờ sau khi tải lại
  // PWA service worker (minimal inline)
  if('serviceWorker' in navigator){
    const swCode=`self.addEventListener('install',e=>self.skipWaiting());self.addEventListener('fetch',e=>{if(e.request.method==='GET')e.respondWith(caches.open('th-v9').then(c=>c.match(e.request).then(r=>r||fetch(e.request).then(res=>{c.put(e.request,res.clone());return res}).catch(()=>r))))})`;
    const blob=new Blob([swCode],{type:'application/javascript'});
    navigator.serviceWorker.register(URL.createObjectURL(blob)).catch(()=>{});
  }
});
window.addEventListener('beforeunload',()=>{if(_mediaStream)stopScan();});


/* ============================================================
   ARCHITECTURE NOTES (Production blueprint)
   ============================================================

A. CURRENT LIMITATIONS OF V7
   - Single HTML, no auth, no payment, no DB, mock data inline
   - No global search, no AI planner (just template), no admin
   - No PWA, no dark mode, no responsive nav, accessibility limited

B. V8 SYSTEM ARCHITECTURE
   Frontend: TanStack Start (React + Vite, SSR/edge) — see Lovable stack
   Backend:  Lovable Cloud (Postgres + Auth + Storage + Edge functions)
   AI:       Lovable AI Gateway (gemini-3-flash / gpt-5-mini) for planner & content
   Payment:  VietQR (img.vietqr.io), Momo OpenAPI, ZaloPay, VNPay, Stripe, PayPal
   Maps:     Leaflet + OSM; optionally Mapbox for heatmaps
   Realtime: Supabase Realtime (chat HDV, livestream OCOP comments)
   Search:   Postgres tsvector + pg_trgm OR Meilisearch for typo-tolerant
   Storage:  Lovable Cloud storage (images, audio, video)
   CDN:      Cloudflare in front of edge

C. DATABASE SCHEMA (ERD)
   users(id, email, phone, name, avatar, locale, created_at)
   user_roles(user_id, role) // admin|local_admin|guide|seller|user
   profiles(user_id, bio, dob, gender, prefs jsonb)
   stories(id, name, region, format, media_url, contributor_id, rating)
   foods(id, name, restaurant_id, region, city, price, rating)
   restaurants(id, name, owner_id, lat, lng, address, menu jsonb)
   services(id, type, name, owner_id, loc, price, stock, meta jsonb)
   bookings(id, user_id, service_id, date, qty, total, status)
   ocop_products(id, name, seller_id, region, star, price, stock, sold, desc)
   sellers(id, user_id, name, verified, address)
   orders(id, user_id, total, method, status, items jsonb, created_at)
   order_items(order_id, product_id, qty, price)
   guides(id, user_id, loc, langs, exp, price, cert, bio, rating)
   guide_bookings(id, guide_id, user_id, date, total, status)
   checkins(id, user_id, name, lat, lng, image_url, likes)
   badges(id, code, name, desc, criteria jsonb)
   user_badges(user_id, badge_id, unlocked_at)
   wishlist(user_id, item_id, item_type)
   plans(id, user_id, dest, days, budget, content jsonb, created_at)
   payments(id, order_id, method, amount, status, gateway_ref)
   reviews(id, user_id, item_id, item_type, rating, content)
   analytics_events(id, user_id, event, props jsonb, ts)

D. API ENDPOINTS (REST sample)
   POST  /auth/register
   POST  /auth/login
   POST  /auth/otp/send /auth/otp/verify
   POST  /auth/social/google|facebook
   GET   /search?q=...&hub=...
   GET   /stories /stories/:id  POST /stories (contribute)
   GET   /foods /foods/:id  POST /foods/:id/booking
   GET   /services  POST /services/:id/book
   GET   /ocop  POST /ocop/cart  POST /ocop/checkout
   GET   /guides /guides/:id  POST /guides/:id/book
   GET   /checkins  POST /checkins
   POST  /ai/plan (body: dest, days, budget, prefs)  -> itinerary
   POST  /payment/intent  POST /payment/webhook/:gateway
   GET   /admin/kpi /admin/orders /admin/locals/:province

E. FOLDER STRUCTURE (TanStack Start)
   src/
     routes/
       __root.tsx index.tsx login.tsx register.tsx
       story/ food/ service/ checkin/ ocop/ guide/ planner/
       _authenticated/profile.tsx orders.tsx wishlist.tsx
       _admin/dashboard.tsx orders.tsx locals.tsx
       api/public/payment/[gateway].ts  webhook handlers
     components/ (Hub cards, SearchBar, AIPlanner, Cart, PayModal...)
     lib/ (api.functions.ts, search.functions.ts, ai-planner.functions.ts)
     integrations/supabase/ ...

F. ROADMAP
   MVP (8 weeks):    Auth, 6 Hubs read-only, VietQR, Wishlist, AI Planner v1
   V1  (3 months):   Booking + Payment full, Guide chat, OCOP cart, Admin
   V2  (6 months):   Livestream, Video call HDV, Multi-language EN/JP/KR
   National (12mo):  63 tỉnh dashboard, Open API cho địa phương, Mobile app
   ============================================================ */

/* ============================================================
   DETAIL-PAGE OVERRIDES (in-page detail views + cart page)
   ============================================================ */
(function(){
  const BACK_BTN = (fn)=>`<button class="btn btn-ghost btn-sm" style="margin-bottom:14px" onclick="${fn}"><i class="fas fa-arrow-left"></i> Quay lại danh sách</button>`;
  const GALLERY = (img,n=4)=>`<div style="display:grid;grid-template-columns:repeat(${n},1fr);gap:8px;margin-top:10px">${Array.from({length:n}).map(()=>`<div style="aspect-ratio:1;border-radius:10px;background-image:url('${img}');background-size:cover;background-position:center"></div>`).join('')}</div>`;
  const REVIEWS = (rating)=>`<div class="dash-card"><h5>Đánh giá khách hàng (★ ${rating||4.7})</h5>
    <div style="display:flex;gap:10px;margin-bottom:10px"><div class="feed-avatar">M</div><div><strong>Minh Anh</strong> · ★★★★★<br><small>Trải nghiệm tuyệt vời, phục vụ chu đáo. Rất đáng tiền!</small></div></div>
    <div style="display:flex;gap:10px;margin-bottom:10px"><div class="feed-avatar">T</div><div><strong>Tuấn Khang</strong> · ★★★★☆<br><small>Chất lượng tốt, sẽ quay lại lần sau.</small></div></div>
    <div style="display:flex;gap:10px"><div class="feed-avatar">L</div><div><strong>Linh Chi</strong> · ★★★★★<br><small>Recommend cho bạn bè, đúng như mô tả.</small></div></div></div>`;
  const COMMENTS = ()=>`<div class="dash-card"><h5>Bình luận cộng đồng</h5>
    <div style="display:flex;gap:10px;margin-bottom:10px"><div class="feed-avatar">A</div><div><strong>@an_traveler</strong><br><small>View đẹp quá, ai đi rồi cho mình xin tip với ạ!</small></div></div>
    <div style="display:flex;gap:10px;margin-bottom:10px"><div class="feed-avatar">H</div><div><strong>@hanoian</strong><br><small>Mình mới đi tuần trước, cực kỳ đáng để check-in 😍</small></div></div>
    <div class="field" style="margin-top:10px"><input placeholder="Viết bình luận của bạn..."></div></div>`;

  // Show/hide list vs detail inside a page
  function openDetail(pageId, listId, detailId, html){
    const list = document.getElementById(listId);
    const det  = document.getElementById(detailId);
    if(list) list.style.display='none';
    if(det){ det.style.display='block'; det.innerHTML = html; }
    window.scrollTo({top:0,behavior:'smooth'});
  }
  window.backToList = function(listId, detailId){
    const list = document.getElementById(listId);
    const det  = document.getElementById(detailId);
    if(det){ det.style.display='none'; det.innerHTML=''; }
    if(list) list.style.display='';
    window.scrollTo({top:0,behavior:'smooth'});
  };

  // ===== FOOD =====
  window.showFoodDetail = function(id){
    const f = DB.foods.find(x=>x.id===id); if(!f) return;
    saveHistoryItem(f,'food');
    const dishes = f.dishes||['Phở bò 90.000','Bún chả 65.000','Cà phê sữa 30.000','Bánh mì 25.000'];
    const html = `${BACK_BTN("backToList('food-list','food-detail')")}
      <div class="detail-hero" style="background-image:url('${f.img}')"><div class="detail-hero-info"><h1>${f.name}</h1><div>★ ${f.rating||4.7} · ${f.city} · Từ ${fmt(f.price)}</div></div></div>
      <div class="detail-grid">
        <div>
          <div class="dash-card"><h5>Mô tả chi tiết</h5><p>${f.desc||''}</p>
            <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px">
              <span class="tag"><i class="fas fa-clock"></i> Mở cửa: 08:00 - 22:00</span>
              <span class="tag"><i class="fas fa-map-marker-alt"></i> ${f.city}</span>
              <span class="tag"><i class="fas fa-phone"></i> 0901 234 567</span>
            </div></div>
          <div class="dash-card"><h5>Thư viện ảnh</h5>${GALLERY(f.img,4)}</div>
          <div class="dash-card"><h5>Menu thực tế</h5>${dishes.map(d=>{const parts=d.split(' ');const price=parts.pop();return `<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border)"><span>${parts.join(' ')}</span><strong style="color:var(--primary)">${price}</strong></div>`}).join('')}</div>
          ${REVIEWS(f.rating)}
        </div>
        <div>
          <div class="dash-card"><h5>Thông tin nhanh</h5>
            <div style="font-size:1.6rem;font-weight:800;color:var(--primary)">${fmt(f.price)}</div>
            <div style="color:var(--text-muted);font-size:.9rem;margin-bottom:10px">Giá trung bình / người</div>
            <div style="display:flex;justify-content:space-between;padding:6px 0"><span>Đánh giá</span><strong>★ ${f.rating||4.7}</strong></div>
            <div style="display:flex;justify-content:space-between;padding:6px 0"><span>Khu vực</span><strong>${f.city}</strong></div>
            <div style="display:flex;justify-content:space-between;padding:6px 0"><span>Giờ mở cửa</span><strong>08:00 - 22:00</strong></div>
          </div>
          <div class="dash-card"><h5>Đặt bàn</h5>
            <div class="field" style="margin-bottom:8px"><label>Ngày</label><input type="date" value="${new Date().toISOString().slice(0,10)}"></div>
            <div class="field" style="margin-bottom:8px"><label>Giờ</label><input type="time" value="19:00"></div>
            <div class="field" style="margin-bottom:12px"><label>Số người</label><input type="number" value="2" min="1"></div>
            <button class="btn btn-primary btn-block" style="margin-bottom:8px" onclick="bookFood('${f.id}')"><i class="fas fa-calendar-check"></i> Đặt bàn ngay</button>
            <button class="btn btn-warm btn-block" onclick="addFoodToCart('${f.id}')"><i class="fas fa-cart-plus"></i> Thêm vào giỏ hàng</button>
          </div>
          <div class="dash-card"><h5>Bản đồ vị trí</h5><div class="mini-map" id="foodDetMap"></div></div>
        </div>
      </div>`;
    openDetail('page-food','food-list','food-detail',html);
    setTimeout(()=>{ try{ window.thGMap&&thGMap('foodDetMap',{q:f.name+', '+f.city,zoom:16,title:f.name}); }catch(e){} },200);
  };
  // food has no price-as-product; allow adding as item
  window.addFoodToCart = function(id){const f=DB.foods.find(x=>x.id===id);if(!f)return;const ex=State.cart.find(c=>c.id===f.id);if(ex)ex.qty++;else State.cart.push({id:f.id,name:f.name,img:f.img,price:f.price,seller:f.city,qty:1});save();updateCartBadge();toast('Đã thêm vào giỏ: '+f.name,'success');};

  // ===== SERVICE =====
  window.showSvcDetail = function(id){
    const s = DB.services.find(x=>x.id===id); if(!s) return;
    saveHistoryItem(s,'service');
    const itinerary = s.type==='tour' ? `<div class="dash-card"><h5>Lịch trình</h5>
      <div style="border-left:2px solid var(--primary);padding-left:14px">
        <div style="margin-bottom:10px"><strong>Ngày 1:</strong> Đón khách · Tham quan điểm nổi bật · Ăn trưa đặc sản</div>
        <div style="margin-bottom:10px"><strong>Ngày 2:</strong> Trekking · Khám phá văn hóa địa phương · Nghỉ homestay</div>
        <div><strong>Ngày 3:</strong> Mua sắm OCOP · Tiễn khách</div>
      </div></div>` : '';
    const html = `${BACK_BTN("backToList('service-list','service-detail')")}
      <div class="detail-hero" style="background-image:url('${s.img}')"><div class="detail-hero-info"><h1>${s.name}</h1><div>★ ${s.rating} · ${s.loc} · ${fmt(s.price)}</div></div></div>
      <div class="detail-grid">
        <div>
          <div class="dash-card"><h5>Mô tả</h5><p>${s.desc||''}</p></div>
          <div class="dash-card"><h5>Thư viện ảnh</h5>${GALLERY(s.img,4)}</div>
          <div class="dash-card"><h5>Tiện ích đi kèm</h5><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:8px">${['Wifi miễn phí','Bể bơi','Bữa sáng','Đưa đón','Gym','Spa','Bãi đỗ xe','An ninh 24/7'].map(x=>`<div style="padding:8px;background:var(--surface-2);border-radius:8px;text-align:center;font-size:.85rem"><i class="fas fa-check" style="color:var(--success)"></i> ${x}</div>`).join('')}</div></div>
          ${itinerary}
          ${REVIEWS(s.rating)}
        </div>
        <div>
          <div class="dash-card"><h5>Đặt dịch vụ</h5>
            <div style="font-size:1.5rem;font-weight:800;color:var(--primary);margin-bottom:4px">${fmt(s.price)}</div>
            <div style="color:var(--text-muted);font-size:.85rem;margin-bottom:10px"><i class="fas fa-map-marker-alt"></i> ${s.loc}</div>
            <div class="field" style="margin-bottom:8px"><label>Ngày</label><input type="date" value="${new Date().toISOString().slice(0,10)}"></div>
            <div class="field" style="margin-bottom:8px"><label>Số lượng</label><input type="number" value="1" min="1" max="${s.stock||10}" id="svcQty" oninput="updSvcTotal('${s.id}')"></div>
            <div style="padding:12px;background:var(--surface-2);border-radius:10px;margin-bottom:12px">
              <div style="display:flex;justify-content:space-between"><span>Đơn giá</span><strong>${fmt(s.price)}</strong></div>
              <div style="display:flex;justify-content:space-between;margin-top:6px;font-size:1.1rem;color:var(--primary)"><span>Tổng</span><strong id="svcTotal">${fmt(s.price)}</strong></div>
            </div>
            <button class="btn btn-primary btn-block" style="margin-bottom:8px" onclick="bookSvc('${s.id}')" ${s.stock<=0?'disabled':''}><i class="fas fa-credit-card"></i> Đặt ngay</button>
            <button class="btn btn-warm btn-block" onclick="addSvcToCart('${s.id}')"><i class="fas fa-cart-plus"></i> Thêm vào giỏ hàng</button>
          </div>
          <div class="dash-card"><h5>Bản đồ vị trí</h5><div class="mini-map" id="svcDetMap"></div></div>
        </div>
      </div>`;
    openDetail('page-service','service-list','service-detail',html);
    setTimeout(()=>{ try{ window.thGMap&&thGMap('svcDetMap',{q:s.name+', '+s.loc,zoom:15,title:s.name}); }catch(e){} },200);
  };
  // Patch bookSvc/bookFood/bookGuide to not close modal (modal isn't open here)
  const _origBookFood = window.bookFood;
  window.bookFood = function(id){if(!requireAuth())return;const f=DB.foods.find(x=>x.id===id);State.payContext={type:'food',item:f,total:f.price*2};openPay();};
  window.bookSvc = function(id){if(!requireAuth())return;const s=DB.services.find(x=>x.id===id);if(s.stock<=0)return toast('Đã hết chỗ','error');const qty=parseInt(document.getElementById('svcQty')?.value||1);State.payContext={type:'service',item:s,total:s.price*qty,qty};openPay();};
  window.addSvcToCart = function(id){const s=DB.services.find(x=>x.id===id);if(!s)return;const ex=State.cart.find(c=>c.id===s.id);if(ex)ex.qty++;else State.cart.push({id:s.id,name:s.name,img:s.img,price:s.price,seller:s.loc,qty:1});save();updateCartBadge();toast('Đã thêm vào giỏ: '+s.name,'success');};

  // ===== CHECK-IN =====
  window.showCheckinDetail = function(id){
    const c = DB.checkins.find(x=>x.id===id); if(!c) return;
    saveHistoryItem(c,'checkin');
    const community = DB.checkins.slice(0,4).map(x=>`<div style="aspect-ratio:1;border-radius:10px;background-image:url('${x.img}');background-size:cover;background-position:center"></div>`).join('');
    const html = `${BACK_BTN("backToList('checkin-list','checkin-detail')")}
      <div class="detail-hero" style="background-image:url('${c.img}')"><div class="detail-hero-info"><h1>${c.name}</h1><div><i class="fas fa-map-marker-alt"></i> ${c.loc} · ❤ ${c.likes} lượt check-in</div></div></div>
      <div class="detail-grid">
        <div>
          <div class="dash-card"><h5>Về điểm check-in</h5><p>Điểm check-in nổi tiếng tại <strong>${c.loc}</strong>. Hàng nghìn du khách đã ghé thăm và chia sẻ khoảnh khắc tại đây. Phong cảnh tuyệt đẹp, dễ tiếp cận, lý tưởng cho cả gia đình và nhóm bạn.</p>
            <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px">
              <span class="tag"><i class="fas fa-map-marker-alt"></i> ${c.loc}</span>
              <span class="tag"><i class="fas fa-heart"></i> ${c.likes} check-in</span>
              <span class="tag"><i class="fas fa-camera"></i> Top photo spot</span>
            </div></div>
          <div class="dash-card"><h5>Hình ảnh từ cộng đồng</h5><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">${community}</div></div>
          ${COMMENTS()}
        </div>
        <div>
          <div class="dash-card"><h5>Check-in ngay</h5>
            <p style="color:var(--text-muted);font-size:.88rem">Chỉ cho phép check-in khi ở trong bán kính 500m so với điểm thực tế.</p>
            <button class="btn btn-primary btn-block" onclick="verifyCheckin('${c.id}')"><i class="fas fa-location-crosshairs"></i> Check-in ngay</button>
            <div id="ciVerify" style="margin-top:10px"></div>
            <button class="btn btn-warm btn-block" style="margin-top:8px" onclick="generatePostcard('${c.id}')"><i class="fas fa-image"></i> Tạo Postcard AI</button>
          </div>
          <div class="dash-card"><h5>Bản đồ</h5><div class="mini-map" id="ciDetMap"></div></div>
        </div>
      </div>`;
    openDetail('page-checkin','checkin-list','checkin-detail',html);
    setTimeout(()=>{ try{ window.thGMap&&thGMap('ciDetMap',{q:c.name+', '+c.loc,lat:c.lat,lng:c.lng,zoom:15,title:c.name}); }catch(e){} },200);
  };

  // ===== OCOP =====
  window.showOcopDetail = function(id){
    const o = DB.ocop.find(x=>x.id===id); if(!o) return;
    saveHistoryItem(o,'ocop'); const left = avail(o);
    const html = `${BACK_BTN("backToList('ocop-list','ocop-detail')")}
      <div class="detail-hero" style="background-image:url('${o.img}')"><div class="detail-hero-info"><span class="hero-tag" style="background:rgba(255,255,255,.25)">OCOP ${o.star} sao</span><h1>${o.name}</h1><div>★ ${o.rating} · ${o.seller} · ${o.sold} đã bán</div></div></div>
      <div class="detail-grid">
        <div>
          <div class="dash-card"><h5>Mô tả chi tiết</h5><p>${o.desc||''}</p></div>
          <div class="dash-card"><h5>Thư viện ảnh</h5>${GALLERY(o.img,4)}</div>
          <div class="dash-card"><h5>Video giới thiệu</h5><div style="aspect-ratio:16/9;background:var(--surface-2);border-radius:10px;display:grid;place-items:center;color:var(--text-muted)"><div style="text-align:center"><i class="fas fa-play-circle" style="font-size:3rem;color:var(--primary)"></i><div style="margin-top:6px">Video giới thiệu sản phẩm</div></div></div></div>
          <div class="dash-card"><h5>Nhà sản xuất & Nguồn gốc</h5>
            <div style="border-left:2px solid var(--primary);padding-left:16px">
              <div style="margin-bottom:8px"><strong>Đơn vị sản xuất</strong><br><small>${o.seller}</small></div>
              <div style="margin-bottom:8px"><strong>Vùng nguyên liệu</strong><br><small>Miền ${o.region} · canh tác đạt chuẩn VietGAP</small></div>
              <div style="margin-bottom:8px"><strong>Chứng nhận OCOP ${o.star} sao</strong><br><small>Cấp bởi UBND tỉnh</small></div>
              <div><strong>Truy xuất nguồn gốc</strong><br><small>Mã QR truy xuất gắn trên từng sản phẩm</small></div>
            </div></div>
          ${REVIEWS(o.rating)}
        </div>
        <div>
          <div class="dash-card"><h5>Mua hàng</h5>
            <div style="font-size:1.6rem;font-weight:800;color:var(--primary);margin-bottom:6px">${fmt(o.price)}</div>
            <div style="margin-bottom:10px" id="ocopStockLine">${stockPill(left)}</div>
            <div style="display:flex;justify-content:space-between;padding:6px 0"><span>Hạng OCOP</span><strong>★ ${o.star} sao</strong></div>
            <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border);margin-bottom:10px"><span>Đã bán</span><strong>${o.sold}</strong></div>
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px"><span>Số lượng</span><div class="qty-ctrl"><button onclick="detQty(-1)">−</button><span id="detQty">1</span><button onclick="detQty(1,${left})">+</button></div></div>
            <button class="btn btn-primary btn-block" style="margin-bottom:8px" onclick="addCartQty('${o.id}')" ${left<=0?'disabled':''}><i class="fas fa-cart-plus"></i> Thêm vào giỏ hàng</button>
            <button class="btn btn-warm btn-block" onclick="buyNow('${o.id}')" ${left<=0?'disabled':''}><i class="fas fa-bolt"></i> Mua ngay</button>
          </div>
        </div>
      </div>`;
    openDetail('page-ocop','ocop-list','ocop-detail',html);
  };
  // Adjust addCartQty/buyNow to not close modal
  window.addCartQty = function(id){const o=DB.ocop.find(x=>x.id===id);const qty=+document.getElementById('detQty').textContent;if(qty>avail(o))return toast('Vượt quá tồn kho','error');const ex=State.cart.find(c=>c.id===id);if(ex)ex.qty+=qty;else State.cart.push({...o,qty});save();updateCartBadge();toast(`Đã thêm ${qty} × ${o.name}`,'success');const el=document.getElementById('ocopStockLine');if(el)el.innerHTML=stockPill(avail(o));};
  window.buyNow = function(id){if(!requireAuth())return;const o=DB.ocop.find(x=>x.id===id);const qty=+document.getElementById('detQty').textContent;State.payContext={type:'ocop',items:[{...o,qty}],total:o.price*qty};openPay();};

  // ===== GUIDE =====
  window.showGuideDetail = function(id){
    const g = DB.guides.find(x=>x.id===id); if(!g) return;
    const slots = ['T2 15/01','T3 16/01','T5 18/01','T7 20/01','CN 21/01'];
    const html = `${BACK_BTN("backToList('guide-list','guide-detail')")}
      <div class="detail-grid">
        <div>
          <div class="dash-card" style="display:flex;gap:18px;align-items:center;flex-wrap:wrap"><div class="guide-avatar" style="width:120px;height:120px;background-image:url('${g.img}');background-size:cover;border-radius:50%"></div><div style="flex:1;min-width:200px"><h2 style="margin:0">${g.name} <span class="badge success"><i class="fas fa-check-circle"></i> Verified</span></h2><div class="guide-meta"><i class="fas fa-map-marker-alt"></i> ${g.loc} · ${g.exp} năm kinh nghiệm · ★ ${g.rating} (${g.reviews} đánh giá)</div><div class="guide-langs" style="margin-top:8px">${g.langs.map(l=>`<span class="tag">${l}</span>`).join('')}</div></div></div>
          <div class="dash-card"><h5>Giới thiệu</h5><p>${g.bio}</p></div>
          <div class="dash-card"><h5>Kinh nghiệm & Khu vực hoạt động</h5>
            <div style="display:flex;flex-wrap:wrap;gap:8px"><span class="tag"><i class="fas fa-briefcase"></i> ${g.exp} năm</span><span class="tag"><i class="fas fa-map"></i> ${g.loc}</span><span class="tag"><i class="fas fa-language"></i> ${g.langs.length} ngôn ngữ</span></div></div>
          <div class="dash-card"><h5>Chứng chỉ</h5><p><i class="fas fa-id-badge" style="color:var(--primary)"></i> ${g.cert}</p></div>
          <div class="dash-card"><h5>Lịch trống</h5><div style="display:flex;flex-wrap:wrap;gap:8px">${slots.map(s=>`<span class="tag" style="background:var(--surface-2);padding:8px 12px;cursor:pointer"><i class="far fa-calendar"></i> ${s}</span>`).join('')}</div></div>
          ${REVIEWS(g.rating)}
        </div>
        <div>
          <div class="dash-card"><h5>Đặt hướng dẫn viên</h5>
            <div style="font-size:1.5rem;font-weight:800;color:var(--primary);margin-bottom:10px">${fmt(g.price)}<span style="font-size:.9rem;font-weight:500;color:var(--text-muted)">/ngày</span></div>
            <div class="field" style="margin-bottom:8px"><label>Họ tên</label><input id="gName" value="${State.user?.name||''}"></div>
            <div class="field" style="margin-bottom:8px"><label>Ngày bắt đầu</label><input type="date" value="${new Date().toISOString().slice(0,10)}"></div>
            <div class="field" style="margin-bottom:8px"><label>Số ngày</label><input type="number" id="gDays" value="1" min="1" oninput="updGuideTotal('${g.id}')"></div>
            <div style="padding:12px;background:var(--surface-2);border-radius:10px;margin-bottom:12px"><div style="display:flex;justify-content:space-between"><span>Giá/ngày</span><strong>${fmt(g.price)}</strong></div><div style="display:flex;justify-content:space-between;margin-top:6px;font-size:1.1rem;color:var(--primary)"><span>Tổng</span><strong id="gTotal">${fmt(g.price)}</strong></div></div>
            <button class="btn btn-primary btn-block" style="margin-bottom:8px" onclick="bookGuide('${g.id}')"><i class="fas fa-calendar-check"></i> Đặt lịch</button>
            <div style="display:flex;gap:8px"><button class="btn btn-ghost" style="flex:1" onclick="toast('Mở chat với ${g.name}')"><i class="fas fa-comment"></i> Chat</button><button class="btn btn-ghost" style="flex:1" onclick="toast('Đang kết nối video...')"><i class="fas fa-video"></i> Video</button></div>
          </div>
        </div>
      </div>`;
    openDetail('page-guide','guide-list','guide-detail',html);
  };
  window.bookGuide = function(id){if(!requireAuth())return;const g=DB.guides.find(x=>x.id===id);const d=Math.max(1,+(document.getElementById('gDays')?.value||1));State.payContext={type:'guide',item:g,total:g.price*d};openPay();};

  // ===== CART PAGE =====
  function renderCartPage(){
    const body = document.getElementById('cartPageBody'); if(!body) return;
    if(!State.cart.length){ body.innerHTML = '<div class="empty"><i class="fas fa-shopping-cart"></i>Giỏ hàng trống. <a href="#" onclick="event.preventDefault();go(\'ocop\')">Khám phá sản phẩm OCOP</a></div>'; return; }
    const subtotal = State.cart.reduce((s,c)=>s+c.price*c.qty,0);
    const discount = State.cartDiscount||0;
    const total = Math.max(0, subtotal - discount);
    body.innerHTML = `<div class="detail-grid">
      <div>
        <div class="dash-card"><h5>Sản phẩm đã chọn (${State.cart.length})</h5>
          ${State.cart.map(c=>`<div class="cart-item"><img src="${c.img}" alt=""><div class="cart-item-info"><h6>${c.name}</h6><small>${c.seller||''} · ${fmt(c.price)}</small></div><div class="qty-ctrl"><button onclick="cartPageQty('${c.id}',-1)">−</button><span>${c.qty}</span><button onclick="cartPageQty('${c.id}',1)">+</button></div><strong style="min-width:100px;text-align:right">${fmt(c.price*c.qty)}</strong><button class="icon-btn danger" onclick="cartPageRemove('${c.id}')"><i class="fas fa-trash"></i></button></div>`).join('')}
        </div>
        <div class="dash-card"><h5>Mã giảm giá</h5>
          <div style="display:flex;gap:8px"><input id="cartCoupon" placeholder="Nhập mã (VD: TOURHUB10)" style="flex:1;padding:10px;border:1px solid var(--border);border-radius:8px"><button class="btn btn-primary" onclick="applyCoupon()">Áp dụng</button></div>
          <small style="color:var(--text-muted)">Thử: <strong>TOURHUB10</strong> (giảm 10%) hoặc <strong>SALE50K</strong> (giảm 50.000đ)</small>
        </div>
      </div>
      <div>
        <div class="dash-card"><h5>Tóm tắt đơn hàng</h5>
          <div style="display:flex;justify-content:space-between;padding:6px 0"><span>Tạm tính</span><strong>${fmt(subtotal)}</strong></div>
          <div style="display:flex;justify-content:space-between;padding:6px 0"><span>Giảm giá</span><strong style="color:var(--danger)">-${fmt(discount)}</strong></div>
          <div style="display:flex;justify-content:space-between;padding:6px 0"><span>Phí vận chuyển</span><strong style="color:var(--success)">Miễn phí</strong></div>
          <hr>
          <div style="display:flex;justify-content:space-between;padding:10px 0;font-size:1.2rem"><span>Tổng cộng</span><strong style="color:var(--primary)">${fmt(total)}</strong></div>
          <button class="btn btn-primary btn-block btn-lg" onclick="checkoutCart()"><i class="fas fa-credit-card"></i> Thanh toán</button>
          <button class="btn btn-ghost btn-block" style="margin-top:8px" onclick="go('ocop')"><i class="fas fa-arrow-left"></i> Tiếp tục mua sắm</button>
        </div>
      </div>
    </div>`;
  }
  window.cartPageQty = function(id,d){const c=State.cart.find(x=>x.id===id);if(!c)return;const prod=DB.ocop.find(o=>o.id===id);if(d>0&&prod&&c.qty>=prod.stock)return toast('Đạt giới hạn tồn kho','error');c.qty+=d;if(c.qty<=0)State.cart=State.cart.filter(x=>x.id!==id);save();updateCartBadge();renderCartPage();};
  window.cartPageRemove = function(id){State.cart=State.cart.filter(x=>x.id!==id);save();updateCartBadge();renderCartPage();toast('Đã xóa sản phẩm','success');};
  window.applyCoupon = function(){const v=(document.getElementById('cartCoupon')?.value||'').trim().toUpperCase();const sub=State.cart.reduce((s,c)=>s+c.price*c.qty,0);if(v==='TOURHUB10'){State.cartDiscount=Math.round(sub*0.1);toast('Áp dụng giảm 10%','success');}else if(v==='SALE50K'){State.cartDiscount=50000;toast('Áp dụng giảm 50.000đ','success');}else{State.cartDiscount=0;toast('Mã không hợp lệ','error');}renderCartPage();};

  // Override openCart -> open cart page
  window.openCart = function(){ go('cart'); };

  // Patch checkoutCart to not depend on modal
  const _origCheckout = window.checkoutCart;
  window.checkoutCart = function(){if(!requireAuth())return;if(!State.cart.length)return toast('Giỏ trống','error');const sub=State.cart.reduce((s,c)=>s+c.price*c.qty,0);const total=Math.max(0,sub-(State.cartDiscount||0));State.payContext={type:'ocop',items:[...State.cart],total};openPay();};

  // Hook into go() so navigating to cart renders, and navigating away resets detail views
  const _origGo = window.go;
  window.go = function(page){
    // Reset any open detail back to list when switching pages
    ['food','service','checkin','ocop','guide'].forEach(p=>{
      const det=document.getElementById(p+'-detail'); const list=document.getElementById(p+'-list');
      if(det){det.style.display='none';det.innerHTML='';}
      if(list){list.style.display='';}
    });
    _origGo(page);
    if(page==='cart') renderCartPage();
  };
})();
window.State=State; /* chia sẻ một đối tượng State duy nhất cho mọi module */

;

(function(){
  // ===== USER STORAGE =====
  function getUsers(){try{return JSON.parse(localStorage.getItem('th_users')||'[]')}catch(e){return []}}
  function setUsers(u){localStorage.setItem('th_users',JSON.stringify(u))}

  // ===== REGISTER =====
  window.register = function(){
    const name=(document.getElementById('rgName').value||'').trim();
    const email=(document.getElementById('rgEmail').value||'').trim().toLowerCase();
    const pass=document.getElementById('rgPass').value||'';
    if(!name||!email||!pass)return toast('Vui lòng điền đầy đủ thông tin','error');
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return toast('Email không hợp lệ','error');
    if(pass.length<6)return toast('Mật khẩu tối thiểu 6 ký tự','error');
    const users=getUsers();
    if(users.find(u=>u.email===email))return toast('Email đã được đăng ký','error');
    users.push({name,email,pass,joined:new Date().toISOString()});
    setUsers(users);
    toast('Đăng ký thành công! Vui lòng đăng nhập','success');
    // Reset form & chuyển về tab đăng nhập
    document.getElementById('rgName').value='';
    document.getElementById('rgPass').value='';
    document.getElementById('liEmail').value=email;
    document.getElementById('liPass').value='';
    if(typeof switchAuth==='function')switchAuth('login');
    setTimeout(()=>document.getElementById('liPass')?.focus(),200);
  };

  // ===== LOGIN =====
  window.login = function(){
    const email=(document.getElementById('liEmail').value||'').trim().toLowerCase();
    const pass=document.getElementById('liPass').value||'';
    if(!email||!pass)return toast('Vui lòng nhập email & mật khẩu','error');
    const users=getUsers();
    const u=users.find(x=>x.email===email);
    if(!u)return toast('Tài khoản không tồn tại','error');
    if(u.pass!==pass)return toast('Sai mật khẩu','error');
    State.user={name:u.name,email:u.email,avatar:u.name[0].toUpperCase(),joined:u.joined};
    save();updateAuthUI();closeModal('authModal');
    toast('Xin chào '+u.name+'!','success');
    go('home');
  };

  // ===== AUTH UI: show name =====
  const _origUpd=window.updateAuthUI;
  window.updateAuthUI=function(){
    if(_origUpd)_origUpd();
    let span=document.getElementById('userName');
    const userBtn=document.getElementById('userBtn');
    if(State.user){
      if(!span){span=document.createElement('span');span.id='userName';span.style.cursor='pointer';span.onclick=()=>go('profile');userBtn?.parentNode.insertBefore(span,userBtn);}
      span.textContent='👋 '+State.user.name;
      span.style.display='inline-block';
    }else if(span){span.style.display='none';}
  };
  document.addEventListener('DOMContentLoaded',()=>window.updateAuthUI());
  setTimeout(()=>window.updateAuthUI(),100);

  // ===== CHECKOUT PAGE =====
  function calcTotal(){const sub=State.cart.reduce((s,c)=>s+c.price*c.qty,0);return Math.max(0,sub-(State.cartDiscount||0));}

  window.renderCheckoutPage=function(){
    const el=document.getElementById('page-checkout');if(!el)return;
    if(!State.cart.length){el.innerHTML='<div class="container"><div class="empty"><i class="fas fa-shopping-cart"></i>Giỏ hàng trống.<br><button class="btn btn-primary" style="margin-top:12px" onclick="go(\'ocop\')">Mua sắm ngay</button></div></div>';return;}
    const sub=State.cart.reduce((s,c)=>s+c.price*c.qty,0);
    const disc=State.cartDiscount||0;
    const total=Math.max(0,sub-disc);
    const u=State.user||{};
    el.innerHTML=`<div class="container" style="padding:24px 16px">
      <div class="section-head"><div><h2><i class="fas fa-credit-card"></i> Thanh toán</h2><p class="section-sub">Hoàn tất thông tin để đặt hàng</p></div><button class="btn btn-ghost btn-sm" onclick="go('cart')"><i class="fas fa-arrow-left"></i> Quay lại giỏ hàng</button></div>
      <div class="detail-grid">
        <div>
          <div class="dash-card co-form">
            <h5>Thông tin khách hàng</h5>
            <div class="field"><label>Họ và tên *</label><input id="coName" value="${u.name||''}" placeholder="Nguyễn Văn A"><div class="err" id="errName">Vui lòng nhập họ tên</div></div>
            <div class="field"><label>Số điện thoại *</label><input id="coPhone" placeholder="09xxxxxxxx"><div class="err" id="errPhone">Số điện thoại không hợp lệ</div></div>
            <div class="field"><label>Email *</label><input id="coEmail" type="email" value="${u.email||''}" placeholder="ban@email.com"><div class="err" id="errEmail">Email không hợp lệ</div></div>
            <div class="field"><label>Địa chỉ giao hàng *</label><input id="coAddr" placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành"><div class="err" id="errAddr">Vui lòng nhập địa chỉ</div></div>
            <div class="field"><label>Ghi chú (tuỳ chọn)</label><textarea id="coNote" rows="3" placeholder="Yêu cầu giao hàng, đóng gói..."></textarea></div>
          </div>
        </div>
        <div>
          <div class="dash-card"><h5>Đơn hàng (${State.cart.length} sản phẩm)</h5>
            ${State.cart.map(c=>`<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border);font-size:.9rem"><span>${c.name} × ${c.qty}</span><strong>${fmt(c.price*c.qty)}</strong></div>`).join('')}
            <div style="display:flex;justify-content:space-between;padding:8px 0"><span>Tạm tính</span><strong>${fmt(sub)}</strong></div>
            <div style="display:flex;justify-content:space-between;padding:6px 0"><span>Giảm giá</span><strong style="color:var(--danger)">-${fmt(disc)}</strong></div>
            <div style="display:flex;justify-content:space-between;padding:6px 0"><span>Phí vận chuyển</span><strong style="color:var(--success)">Miễn phí</strong></div>
            <hr><div style="display:flex;justify-content:space-between;padding:10px 0;font-size:1.25rem"><span>Tổng cộng</span><strong style="color:var(--primary)">${fmt(total)}</strong></div>
            <button class="btn btn-primary btn-block btn-lg" onclick="confirmOrder()"><i class="fas fa-check-circle"></i> Xác nhận đặt hàng</button>
          </div>
        </div>
      </div>
    </div>`;
  };

  window.confirmOrder=function(){
    const name=document.getElementById('coName').value.trim();
    const phone=document.getElementById('coPhone').value.trim();
    const email=document.getElementById('coEmail').value.trim();
    const addr=document.getElementById('coAddr').value.trim();
    const note=document.getElementById('coNote').value.trim();
    let ok=true;
    const show=(id,c)=>{const e=document.getElementById(id);if(e)e.classList.toggle('show',c);if(c)ok=false;};
    show('errName',!name);
    show('errPhone',!/^0\d{9,10}$/.test(phone));
    show('errEmail',!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
    show('errAddr',!addr);
    if(!ok)return toast('Thông tin chưa hợp lệ. Vui lòng sửa các ô được đánh dấu đỏ.','error');
    const total=calcTotal();
    const orderId='TH'+Date.now().toString(36).toUpperCase();
    const order={id:orderId,customer:{name,phone,email,addr,note},items:State.cart.map(c=>({id:c.id,name:c.name,price:c.price,qty:c.qty,img:c.img})),subtotal:State.cart.reduce((s,c)=>s+c.price*c.qty,0),discount:State.cartDiscount||0,total,status:'Đang xử lý',createdAt:new Date().toISOString()};
    State.orders=State.orders||[];State.orders.unshift(order);
    State.cart=[];State.cartDiscount=0;save();
    if(typeof updateCartBadge==='function')updateCartBadge();
    toast('Đặt hàng thành công! Mã đơn: '+orderId,'success');
    window._lastOrder=order;
    go('thanks');
  };

  window.renderThanksPage=function(){
    const el=document.getElementById('page-thanks');if(!el)return;
    const o=window._lastOrder;
    if(!o){el.innerHTML='<div class="container"><div class="empty">Không có đơn hàng. <button class="btn btn-primary" onclick="go(\'home\')">Về trang chủ</button></div></div>';return;}
    el.innerHTML=`<div class="container" style="padding:40px 16px;max-width:760px">
      <div class="dash-card" style="text-align:center;padding:40px 24px">
        <div style="font-size:5rem;color:var(--success);margin-bottom:14px"><i class="fas fa-check-circle"></i></div>
        <h2>Cảm ơn bạn đã đặt hàng!</h2>
        <p style="color:var(--text-muted);margin:8px 0 20px">Đơn hàng <strong style="color:var(--primary)">${o.id}</strong> đã được ghi nhận. Chúng tôi sẽ liên hệ với bạn sớm nhất.</p>
        <div style="background:var(--surface-2);padding:16px;border-radius:10px;text-align:left;margin:16px 0">
          <h6 style="margin-bottom:10px">Chi tiết đơn hàng</h6>
          <div><strong>Khách hàng:</strong> ${o.customer.name}</div>
          <div><strong>Điện thoại:</strong> ${o.customer.phone}</div>
          <div><strong>Email:</strong> ${o.customer.email}</div>
          <div><strong>Địa chỉ:</strong> ${o.customer.addr}</div>
          ${o.customer.note?`<div><strong>Ghi chú:</strong> ${o.customer.note}</div>`:''}
          <hr style="margin:10px 0">
          ${o.items.map(i=>`<div style="display:flex;justify-content:space-between;padding:4px 0;font-size:.9rem"><span>${i.name} × ${i.qty}</span><span>${fmt(i.price*i.qty)}</span></div>`).join('')}
          <hr style="margin:10px 0">
          <div style="display:flex;justify-content:space-between;font-size:1.15rem"><strong>Tổng cộng</strong><strong style="color:var(--primary)">${fmt(o.total)}</strong></div>
        </div>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
          <button class="btn btn-primary" onclick="go('home')"><i class="fas fa-home"></i> Về trang chủ</button>
          <button class="btn btn-ghost" onclick="go('ocop')"><i class="fas fa-shopping-basket"></i> Tiếp tục mua sắm</button>
        </div>
      </div>
    </div>`;
  };

  // ===== Override checkout: cart -> checkout page, not pay modal =====
  window.checkoutCart=function(){
    if(!requireAuth())return;
    if(!State.cart.length)return toast('Giỏ hàng trống','error');
    go('checkout');
  };

  // ===== Hook go() to render new pages =====
  const _origGo=window.go;
  window.go=function(page){
    _origGo(page);
    if(page==='checkout')renderCheckoutPage();
    if(page==='thanks')renderThanksPage();
  };
})();

;

(function(){
  'use strict';
  var D=document;
  var $id=function(id){return D.getElementById(id)};
  function safeToast(msg,type){
    try{ if(typeof window.toast==='function') return window.toast(msg,type||''); }catch(_e){}
    var t=$id('toast');
    if(t){t.textContent=msg;t.className=type||'';t.classList.add('show');setTimeout(function(){t.classList.remove('show')},2400);return;}
    if(type==='error') alert(msg); else console.log(msg);
  }
  function getUsers(){try{return JSON.parse(localStorage.getItem('th_users')||'[]')||[]}catch(_e){return []}}
  function setUsers(users){try{localStorage.setItem('th_users',JSON.stringify(users||[]))}catch(_e){}}
  function ensureState(){
    if(!window.State) window.State={user:null,cart:[]};
    if(!Array.isArray(window.State.cart)) window.State.cart=[];
    return window.State;
  }
  function saveState(){try{ if(typeof window.save==='function') window.save(); else localStorage.setItem('tourhub_state',JSON.stringify(ensureState())); }catch(_e){}}
  function refreshAuthUI(){try{ if(typeof window.updateAuthUI==='function') window.updateAuthUI(); }catch(_e){} }
  function closeAllAuth(){
    var m=$id('authModal'); if(m) m.classList.remove('show');
    var f=$id('auth-fallback')||$id('authSafeFallback'); if(f) f.classList.remove('show');
  }
  function setDisplay(el,show){if(el) el.style.display=show?'block':'none'}
  function setTabActive(root,mode){
    if(!root) return;
    root.querySelectorAll('[data-atab]').forEach(function(b){b.classList.toggle('active',b.getAttribute('data-atab')===mode)});
    root.querySelectorAll('[data-fbtab]').forEach(function(b){b.classList.toggle('active',b.getAttribute('data-fbtab')===mode)});
  }
  function switchMode(mode){
    mode = mode==='register' ? 'register' : 'login';
    var m=$id('authModal');
    if(m){
      setTabActive(m,mode);
      setDisplay($id('auth-login'),mode==='login');
      setDisplay($id('auth-register'),mode==='register');
      setTimeout(function(){
        var focusId=mode==='login'?'liEmail':'rgName';
        var el=$id(focusId); if(el) el.focus();
      },30);
    }
    var f=$id('auth-fallback')||$id('authSafeFallback');
    if(f){
      setTabActive(f,mode);
      setDisplay($id('fbLogin'),mode==='login');
      setDisplay($id('fbReg'),mode==='register');
      setTimeout(function(){var el=$id(mode==='login'?'fbLiEmail':'fbRgName'); if(el) el.focus();},30);
    }
  }
  function fallbackHtml(){
    return '<div class="fb-card" role="dialog" aria-modal="true" aria-label="Đăng nhập / Đăng ký">'
      +'<button class="fb-close" type="button" data-auth-close="1" aria-label="Đóng">×</button>'
      +'<h3 style="margin:0 0 4px;font-size:1.35rem">Đăng nhập / Đăng ký</h3>'
      +'<p style="margin:0;color:var(--text-muted,#64748b);font-size:.9rem">TOUR-HUB</p>'
      +'<div class="fb-tabs"><button class="fb-tab active" type="button" data-fbtab="login">Đăng nhập</button><button class="fb-tab" type="button" data-fbtab="register">Đăng ký</button></div>'
      +'<div id="fbLogin">'
      +'<div class="fb-field"><label>Email hoặc số điện thoại</label><input id="fbLiEmail" autocomplete="username" placeholder="ban@email.com hoặc 09xxxxxxxx"></div>'
      +'<div class="fb-field"><label>Mật khẩu</label><input id="fbLiPass" type="password" autocomplete="current-password" placeholder="••••••••"></div>'
      +'<div style="text-align:right;margin-bottom:12px"><a href="#" data-auth-forgot="1" style="font-size:.85rem">Quên mật khẩu?</a></div>'
      +'<button class="fb-primary" type="button" data-auth-submit="login">Đăng nhập</button>'
      +'<div style="text-align:center;margin:12px 0;font-size:.9rem">Chưa có tài khoản? <a href="#" data-auth-switch="register">Đăng ký</a></div>'
      +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px"><button class="fb-ghost" type="button" data-social="Google">Đăng nhập Google</button><button class="fb-ghost" type="button" data-social="Facebook">Đăng nhập Facebook</button></div>'
      +'</div>'
      +'<div id="fbReg" style="display:none">'
      +'<div class="fb-field"><label>Họ và tên</label><input id="fbRgName" autocomplete="name" placeholder="Nguyễn Văn A"></div>'
      +'<div class="fb-field"><label>Email</label><input id="fbRgEmail" type="email" autocomplete="email" placeholder="ban@email.com"></div>'
      +'<div class="fb-field"><label>Số điện thoại</label><input id="fbRgPhone" type="tel" autocomplete="tel" placeholder="09xxxxxxxx"></div>'
      +'<div class="fb-field"><label>Mật khẩu</label><input id="fbRgPass" type="password" autocomplete="new-password" placeholder="Ít nhất 6 ký tự"></div>'
      +'<div class="fb-field"><label>Xác nhận mật khẩu</label><input id="fbRgPass2" type="password" autocomplete="new-password" placeholder="Nhập lại mật khẩu"></div>'
      +'<label style="display:flex;gap:8px;align-items:flex-start;margin:10px 0;font-size:.85rem;cursor:pointer"><input id="fbRgTerms" type="checkbox" style="margin-top:3px"><span>Tôi đồng ý với Điều khoản sử dụng và Chính sách bảo mật</span></label>'
      +'<button class="fb-primary" type="button" data-auth-submit="register">Đăng ký</button>'
      +'<div style="text-align:center;margin-top:12px;font-size:.9rem">Đã có tài khoản? <a href="#" data-auth-switch="login">Đăng nhập</a></div>'
      +'</div></div>';
  }
  function ensureAuthModal(){
    var m=$id('authModal');
    if(m) return m;
    var f=$id('auth-fallback')||$id('authSafeFallback');
    if(!f){
      f=D.createElement('div');
      f.id='auth-fallback';
      f.className='auth-safe-fallback';
      f.innerHTML=fallbackHtml();
      D.body.appendChild(f);
    }
    return f;
  }
  function showAuth(mode){
    var modal=ensureAuthModal();
    modal.classList.add('show');
    modal.style.display='flex';
    modal.style.visibility='visible';
    modal.style.opacity='1';
    switchMode(mode);
  }
  function val(ids){
    for(var i=0;i<ids.length;i++){var el=$id(ids[i]); if(el) return (el.value||'').trim();}
    return '';
  }
  function checked(ids){
    for(var i=0;i<ids.length;i++){var el=$id(ids[i]); if(el) return !!el.checked;}
    return false;
  }
  function clearValue(id){var el=$id(id); if(el) el.value=''}
  function registerAccount(){
    var name=val(['rgName','fbRgName']);
    var email=val(['rgEmail','fbRgEmail']).toLowerCase();
    var phone=val(['rgPhone','fbRgPhone']);
    var pass=val(['rgPass','fbRgPass']);
    var pass2=val(['rgPass2','fbRgPass2']);
    var hasTerms=$id('rgTerms')||$id('fbRgTerms');
    if(!name||!email||!phone||!pass||!pass2) return safeToast('Vui lòng điền đầy đủ thông tin','error');
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return safeToast('Email không hợp lệ','error');
    if(!/^0\d{9,10}$/.test(phone)) return safeToast('Số điện thoại không hợp lệ','error');
    if(pass.length<6) return safeToast('Mật khẩu tối thiểu 6 ký tự','error');
    if(pass!==pass2) return safeToast('Mật khẩu xác nhận không khớp','error');
    if(hasTerms && !checked(['rgTerms','fbRgTerms'])) return safeToast('Vui lòng đồng ý điều khoản','error');
    var users=getUsers();
    if(users.some(function(u){return (u.email||'').toLowerCase()===email || (u.phone||'')===phone;})) return safeToast('Email hoặc số điện thoại đã được đăng ký','error');
    users.push({name:name,email:email,phone:phone,pass:pass,joined:new Date().toISOString()});
    setUsers(users);
    ['rgName','rgEmail','rgPhone','rgPass','rgPass2','fbRgName','fbRgEmail','fbRgPhone','fbRgPass','fbRgPass2'].forEach(clearValue);
    var terms=$id('rgTerms'); if(terms) terms.checked=false;
    var fbTerms=$id('fbRgTerms'); if(fbTerms) fbTerms.checked=false;
    var li=$id('liEmail')||$id('fbLiEmail'); if(li) li.value=email;
    clearValue('liPass'); clearValue('fbLiPass');
    switchMode('login');
    safeToast('Đăng ký thành công! Vui lòng đăng nhập','success');
  }
  function loginAccount(){
    var account=val(['liEmail','fbLiEmail']).toLowerCase();
    var pass=val(['liPass','fbLiPass']);
    if(!account||!pass) return safeToast('Vui lòng nhập email/số điện thoại và mật khẩu','error');
    var users=getUsers();
    var user=users.find(function(u){return (u.email||'').toLowerCase()===account || (u.phone||'')===account;});
    if(!user) return safeToast('Tài khoản không tồn tại','error');
    if(user.pass!==pass) return safeToast('Sai mật khẩu','error');
    var state=ensureState();
    state.user={name:user.name,email:user.email,phone:user.phone,avatar:(user.name||'U').charAt(0).toUpperCase(),joined:user.joined};
    saveState(); refreshAuthUI(); closeAllAuth();
    safeToast('Xin chào '+user.name+'!','success');
  }
  function social(provider){
    var state=ensureState();
    state.user={name:'Du khách '+provider,email:'demo@'+String(provider).toLowerCase()+'.com',avatar:'D',provider:provider};
    saveState(); refreshAuthUI(); closeAllAuth();
    safeToast('Đăng nhập '+provider+' thành công','success');
  }
  window.openLogin=function(){showAuth('login')};
  window.openRegister=function(){showAuth('register')};
  window.showAuth=function(mode){showAuth(mode||'login')};
  window.openAuth=function(){showAuth('login')};
  window.closeAuth=closeAllAuth;
  window.switchAuth=switchMode;
  window.openModal=function(id){var el=$id(id); if(el){el.classList.add('show');el.style.display='flex';el.style.visibility='visible';el.style.opacity='1';}else if(id==='authModal'){window.openLogin()}};
  window.closeModal=function(id){var el=$id(id); if(el) el.classList.remove('show'); if(id==='authModal') closeAllAuth();};
  window.register=registerAccount;
  window.login=loginAccount;
  window.socialLogin=social;
  if(typeof window.forgotPass!=='function') window.forgotPass=function(){var email=val(['liEmail','fbLiEmail'])||prompt('Nhập email khôi phục:'); if(email) safeToast('Đã gửi link đặt lại mật khẩu tới '+email,'success')};
  function attachAuthTriggers(){
    var loginBtn=$id('loginBtn'); if(loginBtn){loginBtn.onclick=function(e){if(e)e.preventDefault();window.openLogin()}}
    var registerBtn=$id('registerBtn'); if(registerBtn){registerBtn.onclick=function(e){if(e)e.preventDefault();window.openRegister()}}
    D.querySelectorAll('[data-auth-open="login"]').forEach(function(el){el.addEventListener('click',function(e){e.preventDefault();window.openLogin()})});
    D.querySelectorAll('[data-auth-open="register"]').forEach(function(el){el.addEventListener('click',function(e){e.preventDefault();window.openRegister()})});
  }
  D.addEventListener('click',function(e){
    var t=e.target;
    if(!t) return;
    var close=t.closest&&t.closest('[data-auth-close]'); if(close){e.preventDefault();closeAllAuth();return;}
    var sw=t.closest&&t.closest('[data-auth-switch]'); if(sw){e.preventDefault();switchMode(sw.getAttribute('data-auth-switch'));return;}
    var fb=t.closest&&t.closest('[data-fbtab]'); if(fb){e.preventDefault();switchMode(fb.getAttribute('data-fbtab'));return;}
    var sub=t.closest&&t.closest('[data-auth-submit]'); if(sub){e.preventDefault();sub.getAttribute('data-auth-submit')==='register'?registerAccount():loginAccount();return;}
    var soc=t.closest&&t.closest('[data-social]'); if(soc){e.preventDefault();social(soc.getAttribute('data-social'));return;}
    var forgot=t.closest&&t.closest('[data-auth-forgot]'); if(forgot){e.preventDefault();window.forgotPass();return;}
    if(t.id==='authModal'||t.id==='auth-fallback'||t.id==='authSafeFallback') closeAllAuth();
  },true);
  D.addEventListener('keydown',function(e){
    if(e.key==='Escape') closeAllAuth();
    if(e.key==='Enter'){
      var loginVisible=($id('auth-login')&&$id('auth-login').style.display!=='none')||($id('fbLogin')&&$id('fbLogin').style.display!=='none');
      var regVisible=($id('auth-register')&&$id('auth-register').style.display!=='none')||($id('fbReg')&&$id('fbReg').style.display!=='none');
      var active=D.activeElement;
      if(active && active.closest && (active.closest('#authModal')||active.closest('#auth-fallback')||active.closest('#authSafeFallback'))){
        e.preventDefault(); regVisible && !loginVisible ? registerAccount() : loginAccount();
      }
    }
  });
  if(D.readyState==='loading') D.addEventListener('DOMContentLoaded',attachAuthTriggers); else attachAuthTriggers();
  setTimeout(attachAuthTriggers,100);
})();

;

(function(){
  'use strict';
  var $id=function(id){return document.getElementById(id)};

  // ---- 1. Robust close for ALL modals ----
  function hardClose(el){
    if(!el) return;
    el.classList.remove('show','open','active');
    el.style.display='';
    el.style.visibility='';
    el.style.opacity='';
    el.style.pointerEvents='';
  }
  var _origClose=window.closeModal;
  window.closeModal=function(id){
    var el=$id(id); hardClose(el);
    if(id==='authModal'){
      hardClose($id('auth-fallback'));
      hardClose($id('authSafeFallback'));
    }
  };
  window.closeAllModals=function(){
    document.querySelectorAll('.modal-back,.auth-safe-fallback').forEach(hardClose);
  };

  // Click outside / on close button
  document.addEventListener('click',function(e){
    var t=e.target; if(!t) return;
    // close button (X)
    var x=t.closest&&t.closest('.modal-close,[data-modal-close],.fb-close,[data-auth-close]');
    if(x){
      e.preventDefault();
      var modal=x.closest('.modal-back,.auth-safe-fallback');
      if(modal) hardClose(modal); else window.closeAllModals();
      return;
    }
    // overlay click
    if(t.classList && (t.classList.contains('modal-back')||t.classList.contains('auth-safe-fallback'))){
      hardClose(t);
    }
  },true);

  // ESC closes everything
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape') window.closeAllModals();
  });

  // ---- 2. Account widget (replaces login/register buttons when logged in) ----
  function buildAccountWidget(){
    var existing=$id('accountWrap'); if(existing) return existing;
    var loginBtn=$id('loginBtn'); if(!loginBtn) return null;
    var wrap=document.createElement('div');
    wrap.id='accountWrap'; wrap.className='account-wrap'; wrap.style.display='none';
    wrap.innerHTML=''
      +'<button type="button" class="account-btn" id="accountBtn" aria-haspopup="true" aria-expanded="false">'
      +  '<span class="account-avatar" id="acctAvatar">U</span>'
      +  '<span class="account-name" id="acctName">Tài khoản</span>'
      +  '<i class="fas fa-chevron-down account-caret"></i>'
      +'</button>'
      +'<div class="account-menu" id="accountMenu" role="menu">'
      +  '<div class="acct-head"><strong id="acctHeadName">—</strong><small id="acctHeadEmail">—</small></div>'
      +  '<button type="button" data-acct="profile"><i class="fas fa-user"></i> Hồ sơ cá nhân</button>'
      +  '<button type="button" data-acct="postcards"><i class="fas fa-image"></i> Bưu thiếp của tôi</button>'
      +  '<button type="button" data-acct="checkins"><i class="fas fa-map-marker-alt"></i> Check-in của tôi</button>'
      +  '<button type="button" data-acct="orders"><i class="fas fa-shopping-bag"></i> Đơn hàng của tôi</button>'
      +  '<button type="button" data-acct="settings"><i class="fas fa-cog"></i> Cài đặt</button>'
      +  '<div class="acct-divider"></div>'
      +  '<button type="button" class="acct-logout" data-acct="logout"><i class="fas fa-sign-out-alt"></i> Đăng xuất</button>'
      +'</div>';
    loginBtn.parentNode.insertBefore(wrap,loginBtn);

    // toggle menu
    wrap.querySelector('#accountBtn').addEventListener('click',function(e){
      e.stopPropagation();
      wrap.classList.toggle('open');
      this.setAttribute('aria-expanded',wrap.classList.contains('open')?'true':'false');
    });
    document.addEventListener('click',function(e){
      if(!wrap.contains(e.target)) wrap.classList.remove('open');
    });
    // menu actions
    wrap.querySelector('#accountMenu').addEventListener('click',function(e){
      var b=e.target.closest('[data-acct]'); if(!b) return;
      wrap.classList.remove('open');
      var act=b.getAttribute('data-acct');
      if(act==='logout'){ doLogout(); return; }
      var routes={profile:'profile',postcards:'profile',checkins:'profile',orders:'profile',settings:'profile'};
      if(typeof window.go==='function') window.go(routes[act]||'profile');
    });
    return wrap;
  }

  function doLogout(){
    try{
      if(window.State) window.State.user=null;
      localStorage.removeItem('th_user');
      if(typeof window.save==='function') window.save();
    }catch(_e){}
    syncAuthUI();
    if(typeof window.toast==='function') window.toast('Đã đăng xuất','success');
    if(typeof window.go==='function') window.go('home');
  }
  window.logout=doLogout;

  function syncAuthUI(){
    var user=(window.State&&window.State.user)||null;
    var loginBtn=$id('loginBtn'), registerBtn=$id('registerBtn'), userBtn=$id('userBtn');
    var wrap=buildAccountWidget();
    var oldName=$id('userName'); if(oldName) oldName.style.display='none';
    if(user){
      if(loginBtn) loginBtn.style.display='none';
      if(registerBtn) registerBtn.style.display='none';
      if(userBtn) userBtn.style.display='none';
      if(wrap){
        wrap.style.display='inline-flex';
        var initial=(user.name||user.email||'U').charAt(0).toUpperCase();
        var avEl=$id('acctAvatar'); if(avEl) avEl.textContent=initial;
        var nmEl=$id('acctName'); if(nmEl) nmEl.textContent=user.name||user.email||'Tài khoản';
        var hn=$id('acctHeadName'); if(hn) hn.textContent=user.name||'Người dùng';
        var he=$id('acctHeadEmail'); if(he) he.textContent=user.email||user.phone||'';
      }
    }else{
      if(loginBtn) loginBtn.style.display='';
      if(registerBtn) registerBtn.style.display='';
      if(userBtn) userBtn.style.display='none';
      if(wrap) wrap.style.display='none';
    }
  }
  window.updateAuthUI=syncAuthUI;

  // Restore on F5
  function boot(){
    try{
      if(window.State && !window.State.user){
        var raw=localStorage.getItem('th_user');
        if(raw && raw!=='null'){ window.State.user=JSON.parse(raw); }
      }
    }catch(_e){}
    syncAuthUI();
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot); else boot();
  setTimeout(syncAuthUI,200);
  setTimeout(syncAuthUI,800);
})();

;

(function(){
  'use strict';
  /* 1. Ảnh lỗi/hotlink: thay bằng placeholder thay vì icon ảnh vỡ */
  var PH='data:image/svg+xml;utf8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 90"><rect width="120" height="90" fill="#e6eef4"/><path d="M20 66l24-26 16 16 12-12 28 22z" fill="#b6c9d8"/><circle cx="84" cy="26" r="8" fill="#b6c9d8"/></svg>');
  
  /* 2. Lazy-load ảnh + bàn phím cho phần tử click không phải nút */
  function enhance(root){
    root.querySelectorAll('img:not([loading])').forEach(function(i){i.loading='lazy';i.decoding='async';});
    root.querySelectorAll('[onclick]:not(button):not(input):not(select):not(textarea):not([tabindex])').forEach(function(el){
      el.setAttribute('tabindex','0');el.setAttribute('role',el.tagName==='A'?'link':'button');
    });
  }
  var t;function schedule(){clearTimeout(t);t=setTimeout(function(){enhance(document)},120);}
  new MutationObserver(schedule).observe(document.body,{childList:true,subtree:true});
  enhance(document);
  document.addEventListener('keydown',function(e){
    if((e.key==='Enter'||e.key===' ')&&e.target.matches&&e.target.matches('[role=button][onclick],[role=link][onclick]')){e.preventDefault();e.target.click();}
  });
  /* 3. Nút Back/Forward của trình duyệt + liên kết trực tiếp tới từng trang (#food, #ocop...) */
  var g=window.go;
  if(typeof g==='function'){
    var skip={checkout:1,thanks:1};
    window.go=function(p){
      var r=g.apply(this,arguments);
      try{if(p&&!skip[p]&&document.getElementById('page-'+p)&&location.hash!=='#'+p)void 0;}catch(e){}
      return r;
    };
    
    
  }
  /* 4. Thư viện CDN không tải được: báo rõ thay vì im lặng */
  window.addEventListener('load',function(){
    var miss=[];if(!window.L)miss.push('bản đồ');if(!window.Chart)miss.push('biểu đồ');if(!window.jspdf)miss.push('xuất PDF');
    if(miss.length&&typeof window.toast==='function')window.toast('Chưa tải được '+miss.join(', ')+'. Hãy kiểm tra kết nối mạng rồi tải lại trang.','warn');
  });
})();

;

(function(){
'use strict';
var D=document,$=function(q,r){return (r||D).querySelector(q)},$$=function(q,r){return Array.prototype.slice.call((r||D).querySelectorAll(q))};
D.documentElement.classList.add('js');
/* Slider */
var sl=$$('.sl'),dots=$('.sl-dots'),cur=0,tm;
if(sl.length){
  sl.forEach(function(_,i){var b=D.createElement('button');b.setAttribute('aria-label','Ảnh '+(i+1));b.onclick=function(){show(i,true)};dots.appendChild(b)});
  function show(i,user){cur=(i+sl.length)%sl.length;sl.forEach(function(e,k){e.classList.toggle('on',k===cur)});$$('button',dots).forEach(function(e,k){e.classList.toggle('on',k===cur)});$('#slCap').textContent=sl[cur].dataset.cap;$('#slSub').textContent=sl[cur].dataset.sub;if(user)auto()}
  function auto(){clearInterval(tm);if(!matchMedia('(prefers-reduced-motion:reduce)').matches)tm=setInterval(function(){show(cur+1)},5200)}
  $('.sl-nav.prev').onclick=function(){show(cur-1,true)};$('.sl-nav.next').onclick=function(){show(cur+1,true)};
  var sx=0,sw=$('.slider');sw.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});
  sw.addEventListener('touchend',function(e){var d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>40)show(cur+(d<0?1:-1),true)});
  sw.addEventListener('mouseenter',function(){clearInterval(tm)});sw.addEventListener('mouseleave',auto);
  show(0);auto();
}
/* Reveal khi cuộn */
if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
  $$('.section-head,.fcard,.hub-card,.journey li').forEach(function(e,i){e.classList.add('rv');e.style.transitionDelay=(i%4)*70+'ms';io.observe(e)});
}
/* Banner cho trang con */
var P={story:['book-open','Story Hub','Câu chuyện di sản, audio guide và timeline lịch sử của từng điểm đến.'],food:['utensils','Food Hub','Ẩm thực địa phương: lọc theo vùng, giá, đánh giá và đặt bàn.'],service:['concierge-bell','Service Hub','Khách sạn, tour, xe và vé tham quan, thanh toán đa kênh.'],checkin:['camera-retro','Check-in Hub','Check-in tại điểm đến, bản đồ nhiệt và bưu thiếp số.'],ocop:['shopping-basket','OCOP Hub','Đặc sản OCOP kèm nguồn gốc, hạng sao và tồn kho.'],guide:['user-tie','Guide Marketplace','Thuê hướng dẫn viên địa phương theo ngày và ngôn ngữ.'],planner:['wand-magic-sparkles','AI Travel Planner','Nhập sở thích và ngân sách để nhận lịch trình theo ngày.'],qr:['qrcode','Quét QR điểm đến','Quét mã tại điểm đến để mở hồ sơ số và nội dung đa phương tiện.']};
/* Video nền riêng cho từng trang (để trống nếu không muốn video) */
var VID={story:'assets/story-bg.mp4',food:'assets/food-bg.mp4',service:'assets/service-bg.mp4',checkin:'assets/checkin-bg.mp4',ocop:'assets/ocop-bg.mp4',guide:'assets/guide-bg.mp4'};
Object.keys(P).forEach(function(k){var pg=D.getElementById('page-'+k);if(!pg||$('.pg-banner',pg))return;var d=D.createElement('div');d.className='pg-banner';
var v=VID[k]?'<video class="pg-video" autoplay muted loop playsinline preload="metadata"><source src="'+VID[k]+'" type="video/mp4"></video>':'';
d.innerHTML=v+'<div class="pg-ov"></div><div class="pg-in"><span class="pg-ic"><i class="fas fa-'+P[k][0]+'"></i></span><div><div class="pg-bc"><a onclick="go(\'home\')">Trang chủ</a> / '+P[k][1]+'</div><h2>'+P[k][1]+'</h2><p>'+P[k][2]+'</p></div></div>';pg.insertBefore(d,pg.firstChild)});
/* Trợ lý AI */
var CITY={'đà nẵng':['Bán đảo Sơn Trà','Bãi biển Mỹ Khê','Cầu Rồng và sông Hàn','Ngũ Hành Sơn','Bà Nà Hills'],'hội an':['Phố cổ Hội An','Chùa Cầu','Làng gốm Thanh Hà','Rừng dừa Bảy Mẫu','Bánh mì và cao lầu'],'huế':['Đại Nội','Chùa Thiên Mụ','Lăng Khải Định','Sông Hương về đêm','Bún bò Huế'],'hà nội':['Hồ Hoàn Kiếm','Văn Miếu','Phố cổ và ẩm thực','Hồ Tây','Làng gốm Bát Tràng'],'đà lạt':['Hồ Xuân Hương','Đồi chè Cầu Đất','Langbiang','Chợ đêm','Nông trại hoa'],'sa pa':['Bản Cát Cát','Fansipan','Thung lũng Mường Hoa','Chợ phiên','Ruộng bậc thang'],'phú quốc':['Bãi Sao','Làng chài Hàm Ninh','Chợ đêm Dương Đông','Hòn Thơm','Nước mắm và hồ tiêu'],'sài gòn':['Dinh Độc Lập','Nhà thờ Đức Bà','Chợ Bến Thành','Phố đi bộ Nguyễn Huệ','Địa đạo Củ Chi'],'ninh bình':['Tràng An','Hang Múa','Cố đô Hoa Lư','Chùa Bái Đính','Cơm cháy và dê núi']};
function norm(t){return t.toLowerCase().normalize('NFC')}
function plan(t){var c=null,n=norm(t);if(/hcm|tp\.? ?hồ chí minh|tphcm/.test(n))n+=' sài gòn';for(var k in CITY)if(n.indexOf(k)>-1){c=k;break}
 var m=n.match(/(\d)\s*(ngày|day)/),d=Math.min(Math.max(m?+m[1]:2,1),5);
 if(!c)return null;var s=CITY[c],o='Gợi ý '+d+' ngày ở '+c.replace(/(^| )\S/g,function(x){return x.toUpperCase()})+':\n';
 for(var i=0;i<d;i++){o+='Ngày '+(i+1)+': '+s[(i*2)%5]+', '+s[(i*2+1)%5]+'\n'}
 return o+'Muốn lịch trình chi tiết theo ngân sách? Mở AI Travel Planner nhé.'}
var KB=[[/qr|quét/,'Quét mã QR tại điểm đến để mở hồ sơ số: lịch sử, audio kể chuyện, món ăn gần đó và dịch vụ liên quan.',[['Quét QR','qr']]],
[/ăn|món|quán|phở|bún|food|nhà hàng/,'Food Hub giúp tìm quán theo vùng miền, loại món, mức giá và đánh giá, có đặt bàn ngay trên trang.',[['Mở Food Hub','food']]],
[/khách sạn|tour|vé|xe|đặt|dịch vụ|homestay/,'Service Hub cho phép đặt khách sạn, tour, xe và vé tham quan, thanh toán bằng nhiều kênh.',[['Mở Service Hub','service']]],
[/ocop|đặc sản|quà|mua/,'OCOP Hub có đặc sản 4–5 sao, xem nguồn gốc và tồn kho trước khi đặt mua.',[['Mở OCOP','ocop']]],
[/check|bưu thiếp|postcard|ảnh/,'Check-in Hub: check-in tại điểm đến, xem bản đồ nhiệt và tạo bưu thiếp số để chia sẻ.',[['Mở Check-in','checkin']]],
[/hướng dẫn|guide|hdv/,'Guide Marketplace giúp chọn hướng dẫn viên địa phương theo ngày và ngôn ngữ.',[['Tìm hướng dẫn viên','guide']]],
[/thanh toán|momo|zalo|vietqr|trả tiền/,'Trang thanh toán hỗ trợ VietQR, Momo, ZaloPay và các kênh khác trong giỏ hàng.',[['Xem giỏ hàng','cart']]],
[/story|di sản|lịch sử|câu chuyện|audio/,'Story Hub kể chuyện từng điểm đến bằng ảnh, audio, video và bản đồ.',[['Mở Story Hub','story']]],
[/lịch trình|hành trình|planner|đi đâu|gợi ý/,'Cho mình biết thành phố và số ngày, ví dụ "3 ngày Đà Nẵng". Hoặc dùng AI Travel Planner để tạo theo sở thích.',[['AI Travel Planner','planner']]]];
function build(){
 var f=D.createElement('button');f.id='thFab';f.setAttribute('aria-label','Mở trợ lý AI TOUR-HUB');f.innerHTML='<i class="fas fa-robot"></i>';D.body.appendChild(f);
 var c=D.createElement('div');c.id='thChat';c.setAttribute('role','dialog');c.setAttribute('aria-label','Trợ lý AI TOUR-HUB');
 c.innerHTML='<div class="tc-h"><i class="fas fa-robot" style="font-size:1.4rem"></i><div><b>Trợ lý AI TOUR-HUB</b><small>Bản demo, trả lời theo dữ liệu hệ thống</small></div><button aria-label="Đóng"><i class="fas fa-times"></i></button></div><div class="tc-b" aria-live="polite"></div><div class="tq"></div><form class="tc-f"><input placeholder="Hỏi về điểm đến, món ăn, lịch trình..." aria-label="Nhập câu hỏi"><button aria-label="Gửi"><i class="fas fa-paper-plane"></i></button></form>';D.body.appendChild(c);
 var b=$('.tc-b',c),inp=$('input',c);
 function add(t,w,acts){var m=D.createElement('div');m.className='tm '+w;m.textContent=t;if(acts){var a=D.createElement('div');a.className='ta';acts.forEach(function(x){var q=D.createElement('button');q.textContent=x[0];q.onclick=function(){c.classList.remove('open');window.go(x[1])};a.appendChild(q)});m.appendChild(a)}b.appendChild(m);b.scrollTop=b.scrollHeight;return m}
 function reply(t){var ty=add('','bot');ty.innerHTML='<span class="dots"><i></i><i></i><i></i></span>';setTimeout(function(){ty.remove();var p=plan(t);if(p)return add(p,'bot',[['AI Travel Planner','planner'],['Dịch vụ & tour','service']]);
  for(var i=0;i<KB.length;i++)if(KB[i][0].test(norm(t)))return add(KB[i][1],'bot',KB[i][2]);
  if(/chào|hello|hi\b|xin chào/.test(norm(t)))return add('Xin chào! Mình có thể gợi ý lịch trình, quán ăn, đặc sản OCOP hoặc hướng dẫn cách dùng QR.','bot');
  add('Mình chưa hiểu rõ ý bạn. Bạn thử hỏi về lịch trình, ẩm thực, đặt dịch vụ, OCOP hoặc quét QR nhé.','bot')},650+Math.random()*350)}
 function send(t){t=t.trim();if(!t)return;add(t,'me');inp.value='';reply(t)}
 $('form',c).onsubmit=function(e){e.preventDefault();send(inp.value)};
 var q=$('.tq',c);['3 ngày Đà Nẵng','Món ngon ở Hội An','Cách quét QR','Mua đặc sản OCOP','Thanh toán thế nào'].forEach(function(t){var x=D.createElement('button');x.textContent=t;x.onclick=function(){send(t)};q.appendChild(x)});
 add('Xin chào! Mình là trợ lý TOUR-HUB. Bạn muốn đi đâu, ăn gì hoặc cần đặt dịch vụ nào?','bot');
 window.thChat=function(o){var open=o===undefined?!c.classList.contains('open'):o;c.classList.toggle('open',open);if(open)setTimeout(function(){inp.focus()},200)};
 f.onclick=function(){window.thChat()};$('.tc-h button',c).onclick=function(){window.thChat(false)};
 D.addEventListener('keydown',function(e){if(e.key==='Escape')c.classList.remove('open')});
}
build();
})();

;

(function(){
'use strict';
var D=document,$=function(q,r){return (r||D).querySelector(q)},$$=function(q,r){return Array.prototype.slice.call((r||D).querySelectorAll(q))};
function esc(x){return String(x==null?'':x).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function plain(t){return String(t||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d')}
/* ===== 1. Ảnh minh họa bám tiêu đề (dùng khi ảnh gốc không tải được) ===== */
var K=[['beach',/bien|dao|vinh|bai |ha long|phu quoc|nha trang|resort|hon /],['mount',/nui|sa pa|sapa|fansipan|da lat|doi|che|trang an|ninh binh|son doong|quang binh|homestay/],['heri',/pho co|hoi an|hue|co do|chua|di san|lang nghe|van mieu|ha noi|di tich|den |lang|story/],['food',/an |mon|pho|bun|com|mi quang|banh|quan|cafe|ca phe|food|nha hang|am thuc/],['hotel',/khach san|hotel|villa|luu tru/],['car',/xe |car|taxi|di chuyen|thue xe/],['prod',/ocop|tra |mat |dac san|yen|nuoc mam|hong|qua |san pham/],['guide',/huong dan|guide|hdv/]];
function kind(t){t=plain(t)+' ';for(var i=0;i<K.length;i++)if(K[i][1].test(t))return K[i][0];return 'pin'}
var SK={beach:['#7fd3ee','#e9fbff'],mount:['#9ddbb0','#effbf2'],heri:['#f6d48a','#fff7e2'],food:['#ffc49a','#fff3e8'],hotel:['#a9c8f2','#eef5ff'],car:['#b7e3d0','#effaf5'],prod:['#e9c98f','#fff7e6'],guide:['#b5e0c8','#f0fbf5'],pin:['#a7dcc0','#f0fbf6']};
var ART={beach:'<circle cx="300" cy="70" r="28" fill="#ffd166"/><path d="M0 150Q50 135 100 150T200 150T300 150T400 150V260H0Z" fill="#1d9bbf"/><path d="M0 180Q50 165 100 180T200 180T300 180T400 180V260H0Z" fill="#013230"/><path d="M60 150l40-50 40 50z" fill="#3b8f6b"/>',mount:'<circle cx="320" cy="64" r="24" fill="#fff3b0"/><path d="M0 190L90 80l70 90 60-70 90 100 90-60v130H0z" fill="#2f9e6a"/><path d="M0 220L110 140l90 70 80-50 120 80v20H0z" fill="#157a4d"/>',heri:'<circle cx="320" cy="60" r="24" fill="#ffd166"/><path d="M110 170h180v50H110z" fill="#b5482f"/><path d="M90 170l110-52 110 52z" fill="#7a2e1d"/><path d="M130 130l70-34 70 34z" fill="#9a3a24"/><circle cx="60" cy="110" r="14" fill="#e63946"/><circle cx="340" cy="120" r="12" fill="#f4a261"/><path d="M0 220h400v40H0z" fill="#4c956c"/>',food:'<path d="M110 120h180a90 70 0 0 1-180 0z" fill="#fff"/><path d="M118 126h164a80 60 0 0 1-164 0z" fill="#f4a261"/><path d="M170 100q-14-22 0-40M200 100q-14-22 0-40M230 100q-14-22 0-40" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" opacity=".8"/><path d="M280 70l50 80M296 66l50 80" stroke="#8a5a2b" stroke-width="6" stroke-linecap="round"/>',hotel:'<path d="M110 60h180v170H110z" fill="#2c5f8a"/><path d="M130 80h30v26h-30zm55 0h30v26h-30zm55 0h30v26h-30zM130 125h30v26h-30zm55 0h30v26h-30zm55 0h30v26h-30z" fill="#ffe08a"/><path d="M180 180h40v50h-40z" fill="#1c3f5e"/><path d="M0 230h400v30H0z" fill="#4c956c"/>',car:'<path d="M70 170l30-50h150l40 50h30v40H70z" fill="#157a4d"/><path d="M112 126h60v38h-80zm70 0h66l26 38h-92z" fill="#d7f3e3"/><circle cx="130" cy="212" r="22" fill="#222"/><circle cx="130" cy="212" r="9" fill="#bbb"/><circle cx="270" cy="212" r="22" fill="#222"/><circle cx="270" cy="212" r="9" fill="#bbb"/><path d="M0 232h400v28H0z" fill="#8aa29a"/>',prod:'<path d="M150 80h100v26H150z" fill="#8a5a2b"/><path d="M135 106h130v120a20 20 0 0 1-20 20h-90a20 20 0 0 1-20-20z" fill="#e9a23b"/><path d="M150 140h100v60H150z" fill="#fff6dc"/><path d="M200 150l8 18 20 3-15 13 4 20-17-10-17 10 4-20-15-13 20-3z" fill="#15a05a"/>',guide:'<circle cx="200" cy="100" r="34" fill="#f1c9a5"/><path d="M160 92q40-60 80 0z" fill="#157a4d"/><path d="M130 232q10-84 70-84t70 84z" fill="#013230"/><path d="M280 120v110" stroke="#8a5a2b" stroke-width="6"/><path d="M280 120h46l-12 16 12 16h-46z" fill="#e63946"/>',pin:'<path d="M200 60a54 54 0 0 1 54 54c0 40-54 100-54 100s-54-60-54-100a54 54 0 0 1 54-54z" fill="#15a05a"/><circle cx="200" cy="114" r="20" fill="#fff"/><path d="M60 230h280" stroke="#013230" stroke-width="6" stroke-dasharray="14 10"/>'};
function scene(title){var k=kind(title),c=SK[k],t=String(title||'TOUR-HUB').slice(0,30);
 var svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 260"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+c[0]+'"/><stop offset="1" stop-color="'+c[1]+'"/></linearGradient><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#011f1e" stop-opacity="0"/><stop offset="1" stop-color="#011f1e" stop-opacity=".85"/></linearGradient></defs><rect width="400" height="260" fill="url(#g)"/>'+ART[k]+'<rect y="170" width="400" height="90" fill="url(#s)"/><text x="16" y="238" font-family="Be Vietnam Pro,Arial,sans-serif" font-size="19" font-weight="700" fill="#fff">'+esc(t)+'</text></svg>';
 return 'data:image/svg+xml;utf8,'+encodeURIComponent(svg)}
window.thScene=scene;
function titleOf(i){var a=i.getAttribute('alt');if(a&&a.length>2&&!/^(ảnh|anh|image)/i.test(a))return a;var p=i.closest('.card,.hub-card,figure,.bk-it,li,.sl,[class*=card]');var h=p&&p.querySelector('h1,h2,h3,h4,h5,figcaption,.title,strong');return h?h.textContent:(a||'')}
D.addEventListener('error',function(e){var t=e.target;if(!t||t.tagName!=='IMG'||(t.closest&&t.closest('.leaflet-container')))return;
 if(!t.dataset.rt&&/^https?:/.test(t.src)){t.dataset.rt='1';t.referrerPolicy='no-referrer';var u=t.src;t.src='';t.src=u;return}
 if(t.dataset.fb)return;t.dataset.fb='1';var ti=titleOf(t);t.removeAttribute('srcset');t.src=scene(ti);t.alt=ti||'Ảnh minh họa';t.style.objectFit='cover';t.classList.remove('img-fallback')},true);
$$('img').forEach(function(i){i.referrerPolicy='no-referrer'});
/* Ảnh nền của slider: kiểm tra, nếu lỗi dùng ảnh minh họa theo tiêu đề */
$$('.sl').forEach(function(d){var m=/url\(["']?([^"')]+)/.exec(d.style.backgroundImage||'');if(!m)return;var im=new Image();im.referrerPolicy='no-referrer';im.onerror=function(){d.style.backgroundImage='url("'+scene(d.dataset.cap)+'")'};im.src=m[1]});
/* ===== 2. Video Story: phát trực tiếp bằng thẻ <video> (assets/video/*.mp4), không dùng YouTube ===== */
/* ===== 3. Quy trình đặt tour / thanh toán 4 bước ===== */
var B={step:1,f:{},m:'vietqr',ctx:null,code:'',exp:0,t:null,o:null};
var TY={service:'Dịch vụ du lịch',ocop:'Đặc sản OCOP',guide:'Hướng dẫn viên',table:'Đặt bàn'};
var PM=[['vietqr','qrcode','VietQR'],['momo','wallet','Ví Momo'],['zalopay','mobile-alt','ZaloPay'],['card','credit-card','Thẻ ngân hàng'],['cod','money-bill-wave','Thanh toán sau']];
function nm(c){var it=c.item||c.guide||{};return it.name||it.title||c.name||(c.items&&c.items.length?c.items.map(function(i){return i.name}).join(', '):'Dịch vụ TOUR-HUB')}
function rows(c){if(c.items&&c.items.length)return c.items.map(function(i){return {n:i.name,q:i.qty||1,p:(i.price||0)*(i.qty||1),img:i.img}});var it=c.item||c.guide||{};return [{n:nm(c),q:c.qty||c.days||1,p:c.total,img:it.img}]}
function money(n){return typeof fmt==='function'?fmt(n):n+'đ'}
function stepper(){var S=['Xác nhận','Thông tin','Thanh toán','Hoàn tất'];return '<ol class="bk-steps">'+S.map(function(x,i){var c=i+1<B.step?'done':i+1===B.step?'on':'';return '<li class="'+c+'"><b>'+(i+1<B.step?'<i class="fas fa-check"></i>':i+1)+'</b>'+x+'</li>'}).join('')+'</ol>'}
function sidebar(){var c=B.ctx;return '<aside class="bk-card bk-sum"><h3>Đơn đặt chỗ</h3>'+rows(c).map(function(r){return '<div class="bk-it"><img alt="'+esc(r.n)+'" src="'+esc(r.img||scene(r.n))+'"><div>'+esc(r.n)+'<br><small style="color:var(--text-muted)">'+(TY[c.type]||'Dịch vụ')+' × '+r.q+'</small></div><strong>'+money(r.p)+'</strong></div>'}).join('')+'<div class="bk-tot"><span>Tổng cộng</span><strong>'+money(c.total)+'</strong></div></aside>'}
function fld(id,l,v,ph,w,t){return '<div class="'+(w?'w':'')+'"><label for="'+id+'">'+l+'</label><input id="'+id+'" type="'+(t||'text')+'" value="'+esc(v||'')+'" placeholder="'+ph+'"><small>Vui lòng kiểm tra lại</small></div>'}
function body(){var c=B.ctx,f=B.f,h='';
 if(B.step===1){var td=new Date().toISOString().slice(0,10);h='<div class="bk-card"><h3>1. Xác nhận dịch vụ</h3>'+rows(c).map(function(r){return '<div class="bk-it"><img alt="'+esc(r.n)+'" src="'+esc(r.img||scene(r.n))+'"><div><b>'+esc(r.n)+'</b><br><small>Số lượng: '+r.q+'</small></div><strong>'+money(r.p)+'</strong></div>'}).join('')+(c.type==='ocop'?'':'<div class="bk-f" style="margin-top:14px">'+fld('bkDate','Ngày sử dụng dịch vụ',f.date||td,'',true,'date')+'</div>')+'<div class="bk-act"><button class="btn btn-ghost" onclick="history.back()"><i class="fas fa-arrow-left"></i> Quay lại</button><button class="btn btn-primary" onclick="thBk.next()">Tiếp tục <i class="fas fa-arrow-right"></i></button></div></div>'}
 if(B.step===2){var u=State.user||{};h='<div class="bk-card"><h3>2. Thông tin liên hệ</h3><div class="bk-f">'+fld('bkName','Họ và tên *',f.name||u.name,'Nguyễn Văn A')+fld('bkPhone','Số điện thoại *',f.phone,'09xxxxxxxx')+fld('bkEmail','Email *',f.email||u.email,'ban@email.com',true,'email')+(c.type==='ocop'?fld('bkAddr','Địa chỉ nhận hàng *',f.addr,'Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành',true):'')+'<div class="w"><label for="bkNote">Ghi chú</label><textarea id="bkNote" rows="3" placeholder="Yêu cầu thêm (nếu có)">'+esc(f.note||'')+'</textarea></div></div><div class="bk-act"><button class="btn btn-ghost" onclick="thBk.back()"><i class="fas fa-arrow-left"></i> Quay lại</button><button class="btn btn-primary" onclick="thBk.next()">Tiếp tục <i class="fas fa-arrow-right"></i></button></div></div>'}
 if(B.step===3){var pm=PM.map(function(p){var l=p[0]==='cod'?(c.type==='ocop'?'Thanh toán khi nhận hàng':'Thanh toán tại điểm đến'):p[2];return '<button class="'+(B.m===p[0]?'on':'')+'" onclick="thBk.pick(\''+p[0]+'\')"><i class="fas fa-'+p[1]+'"></i>'+l+'</button>'}).join('');
  var pn=B.m==='vietqr'?'<div class="bk-qr"><img alt="Mã VietQR thanh toán" src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data='+encodeURIComponent('TOURHUB|'+B.code+'|'+Math.round(c.total))+'"><div>Quét bằng ứng dụng ngân hàng<br><span class="bk-tm" id="bkTm">10:00</span><br><small>Nội dung chuyển khoản: <b>'+B.code+'</b></small></div></div>':B.m==='cod'?'<div class="bk-qr"><i class="fas fa-handshake" style="font-size:1.6rem;color:var(--green-d)"></i><div>Bạn thanh toán trực tiếp khi sử dụng dịch vụ hoặc nhận hàng. Đơn ở trạng thái chờ thanh toán.</div></div>':'<div class="bk-qr"><i class="fas fa-shield-alt" style="font-size:1.6rem;color:var(--green-d)"></i><div>Bạn sẽ được chuyển sang '+PM.filter(function(p){return p[0]===B.m})[0][2]+' để xác nhận. Trang này không thu thập số thẻ hay mật khẩu.</div></div>';
  h='<div class="bk-card"><h3>3. Thanh toán</h3><div class="bk-demo"><i class="fas fa-flask"></i> Môi trường thử nghiệm: giao dịch được mô phỏng, không trừ tiền thật.</div><div class="bk-pm">'+pm+'</div>'+pn+'<label style="display:flex;gap:8px;align-items:flex-start;font-size:.88rem;margin-top:6px"><input type="checkbox" id="bkTerms" style="margin-top:4px"> Tôi đồng ý với điều khoản sử dụng và chính sách của nhà cung cấp dịch vụ.</label><div class="bk-act"><button class="btn btn-ghost" onclick="thBk.back()"><i class="fas fa-arrow-left"></i> Quay lại</button><button class="btn btn-primary btn-lg" id="bkPay" onclick="thBk.pay()"><i class="fas fa-lock"></i> '+(B.m==='cod'?'Xác nhận đặt chỗ':'Thanh toán '+money(c.total))+'</button></div></div>'}
 if(B.step===4){var o=B.o;h='<div class="bk-card"><div class="bk-ok"><svg viewBox="0 0 52 52"><circle cx="26" cy="26" r="25"/><path d="M14 27l8 8 16-17"/></svg><h2 style="margin:10px 0 4px">'+(o.status==='paid'?'Thanh toán thành công':'Đặt chỗ thành công')+'</h2><p style="color:var(--text-muted);margin:0">Mã đặt chỗ <b style="color:var(--green-d)">'+o.id+'</b>. Phiếu xác nhận đã sẵn sàng bên dưới.</p></div><div class="voucher"><div><h4>E-voucher TOUR-HUB</h4><p><b>'+esc(nm(c))+'</b></p><p>Khách: '+esc(o.customer.name)+' · '+esc(o.customer.phone)+'</p>'+(o.travelDate?'<p>Ngày sử dụng: '+esc(o.travelDate)+'</p>':'')+'<p>Thanh toán: '+PM.filter(function(p){return p[0]===o.method})[0][2]+' · '+(o.status==='paid'?'Đã thanh toán':'Chờ thanh toán')+'</p><p><b>Tổng: '+money(o.total)+'</b></p><p style="font-size:.75rem;color:var(--text-muted)">Phiếu thử nghiệm, không có giá trị thanh toán.</p></div><img alt="Mã QR đặt chỗ" src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data='+encodeURIComponent('TOURHUB:'+o.id)+'"></div><div class="bk-act" style="justify-content:center"><button class="btn btn-primary" onclick="window.print()"><i class="fas fa-print"></i> In / lưu PDF</button><button class="btn btn-ghost" onclick="go(\'profile\')"><i class="fas fa-receipt"></i> Xem đơn của tôi</button><button class="btn btn-ghost" onclick="go(\'home\')"><i class="fas fa-home"></i> Về trang chủ</button></div></div>'}
 return h}
function draw(){var el=D.getElementById('page-booking');if(!el)return;if(!B.ctx){el.innerHTML='<div class="bk"><div class="bk-card" style="text-align:center">Chưa có đơn đặt chỗ nào đang xử lý.<br><button class="btn btn-primary" style="margin-top:12px" onclick="go(\'service\')">Xem dịch vụ</button></div></div>';return}
 el.innerHTML='<div class="bk">'+stepper()+'<div class="bk-grid">'+body()+sidebar()+'</div></div>';scrollTo({top:0,behavior:'smooth'});clearInterval(B.t);
 if(B.step===3&&B.m==='vietqr'){B.t=setInterval(function(){var e=$('#bkTm');if(!e)return clearInterval(B.t);var r=Math.max(0,B.exp-Date.now()),m=Math.floor(r/60000),s=Math.floor(r%60000/1000);e.textContent=(m<10?'0':'')+m+':'+(s<10?'0':'')+s;if(!r){clearInterval(B.t);e.textContent='Mã đã hết hạn';e.style.color='var(--danger)'}},500)}}
function val(ids){var ok=true;ids.forEach(function(p){var e=D.getElementById(p[0]);if(!e)return;var bad=!p[1](e.value.trim());e.classList.toggle('bad',bad);var sm=e.nextElementSibling;if(sm&&p[2])sm.textContent=p[2];if(bad){if(ok)e.focus();ok=false}});return ok}
function genCode(){return typeof genTxnId==='function'?genTxnId():'TH'+Date.now().toString(36).toUpperCase()}
window.thBk={
 next:function(){if(B.step===1){var d=$('#bkDate');if(d){if(!val([['bkDate',function(v){return !!v&&v>=new Date().toISOString().slice(0,10)},'Ngày sử dụng không hợp lệ: vui lòng chọn từ hôm nay trở đi']]))return toast('Vui lòng chọn lại ngày sử dụng','error');B.f.date=d.value}}
  if(B.step===2){var c=B.ctx.type==='ocop';if(!val([['bkName',function(v){return v.length>1},'Vui lòng nhập họ và tên (tối thiểu 2 ký tự)'],['bkPhone',function(v){return /^0[35789]\d{8}$/.test(v.replace(/[\s.]/g,''))},'Số điện thoại không hợp lệ: nhập 10 số, bắt đầu bằng 03, 05, 07, 08 hoặc 09'],['bkEmail',function(v){return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)},'Email không hợp lệ, ví dụ: ban@email.com']].concat(c?[['bkAddr',function(v){return v.length>5},'Vui lòng nhập địa chỉ nhận hàng đầy đủ (số nhà, đường, phường/xã, tỉnh/thành)']]:[])))return toast('Thông tin chưa hợp lệ. Vui lòng sửa các ô được đánh dấu đỏ.','error');
   B.f.name=$('#bkName').value.trim();B.f.phone=$('#bkPhone').value.trim();B.f.email=$('#bkEmail').value.trim();B.f.addr=c?$('#bkAddr').value.trim():'';B.f.note=$('#bkNote').value.trim()}
  B.step++;draw()},
 back:function(){if(B.step>1){B.step--;draw()}},
 pick:function(m){B.m=m;draw()},
 pay:function(){if(!($('#bkTerms')||{}).checked){var tb=$('#bkTerms');if(tb)tb.focus();return toast('Bạn cần đồng ý điều khoản sử dụng trước khi thanh toán','error')};if(B.m==='vietqr'&&Date.now()>B.exp){B.exp=Date.now()+600000;draw();return toast('Mã đã được làm mới, vui lòng quét lại','warn')}
  var b=$('#bkPay');b.disabled=true;b.innerHTML='<i class="fas fa-circle-notch fa-spin"></i> Đang xử lý...';
  setTimeout(function(){var c=B.ctx,o={};for(var k in c)o[k]=c[k];o.id=B.code;o.method=B.m;o.status=B.m==='cod'?'pending':'paid';o.date=new Date().toISOString();o.user=State.user&&State.user.email;o.customer={name:B.f.name,phone:B.f.phone,email:B.f.email,addr:B.f.addr,note:B.f.note};o.travelDate=B.f.date||'';
   State.orders.unshift(o);if(c.type==='ocop'){(c.items||[]).forEach(function(it){var p=DB.ocop.find(function(x){return x.id===it.id});if(p)p.stock=Math.max(0,p.stock-it.qty)});State.cart=[];State.cartDiscount=0}
   State.pendingTxn=null;State.payContext=null;save();if(typeof updateCartBadge==='function')updateCartBadge();B.o=o;B.step=4;clearInterval(B.t);draw();toast('Đặt chỗ thành công. Mã '+o.id,'success')},1300)}
};
function start(){var c=State.payContext;if(!c)return;B.ctx=c;B.step=1;B.f={};B.m='vietqr';B.code=genCode();B.exp=Date.now()+600000;['detailModal','cartModal','payModal'].forEach(function(m){try{closeModal(m)}catch(e){}});go('booking');draw()}
window.openPay=function(recovered){if(recovered){State.pendingTxn=null;save();return}start()};
window.checkoutCart=function(){if(!requireAuth())return;if(!State.cart.length)return toast('Giỏ hàng trống','error');var sub=State.cart.reduce(function(s,c){return s+c.price*c.qty},0);State.payContext={type:'ocop',items:State.cart.slice(),total:Math.max(0,sub-(State.cartDiscount||0))};start()};
})();

;

(function(){
'use strict';
var D=document,$=function(q,r){return (r||D).querySelector(q)};
function esc(x){return String(x==null?'':x).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
/* ===== Thông báo nổi, nằm trên cùng ===== */
var box=D.createElement('div');box.id='thToasts';box.setAttribute('aria-live','polite');D.body.appendChild(box);
var TT={success:['Thành công','check'],error:['Có lỗi xảy ra','exclamation'],warn:['Lưu ý','exclamation-triangle'],info:['Thông báo','info']};
function toast(msg,type){type=type==='warning'?'warn':(TT[type]?type:'info');if(!msg)return;
 var d=type==='error'?7000:type==='success'?4500:5000;
 $$all('.tt',box).slice(0,-3).forEach(function(e){kill(e)});
 var t=D.createElement('div');t.className='tt '+type;t.setAttribute('role',type==='error'?'alert':'status');t.style.setProperty('--d',d+'ms');
 t.innerHTML='<span class="ti"><i class="fas fa-'+TT[type][1]+'"></i></span><div><b>'+TT[type][0]+'</b><span>'+esc(msg)+'</span></div><button aria-label="Đóng"><i class="fas fa-times"></i></button><i class="bar"></i>';
 $('button',t).onclick=function(){kill(t)};box.appendChild(t);
 var tm=setTimeout(function(){kill(t)},d);t.onmouseenter=function(){clearTimeout(tm)};t.onmouseleave=function(){tm=setTimeout(function(){kill(t)},1800)}}
function $$all(q,r){return Array.prototype.slice.call((r||D).querySelectorAll(q))}
function kill(t){if(!t.parentNode||t.classList.contains('out'))return;t.classList.add('out');setTimeout(function(){t.remove()},300)}
window.toast=toast;try{window.toast=toast}catch(e){}
/* ===== Tài khoản: quy tắc nghiệp vụ ===== */
var UK='th_users_v2';
function users(){try{return JSON.parse(localStorage.getItem(UK)||'[]')||[]}catch(e){return []}}
function putUsers(u){localStorage.setItem(UK,JSON.stringify(u))}
function hash(pw,salt){var s=salt+'|'+pw;if(window.crypto&&crypto.subtle&&window.TextEncoder)return crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)).then(function(b){return Array.prototype.map.call(new Uint8Array(b),function(x){return ('0'+x.toString(16)).slice(-2)}).join('')});
 var h=5381;for(var i=0;i<s.length;i++)h=((h<<5)+h+s.charCodeAt(i))|0;return Promise.resolve('f'+(h>>>0).toString(16))}
function salt(){return Math.random().toString(36).slice(2)+Date.now().toString(36)}
var V={
 name:function(v){v=v.trim();if(v.length<2)return 'Vui lòng nhập họ và tên (tối thiểu 2 ký tự)';if(!/^[\p{L}\s'.-]{2,60}$/u.test(v))return 'Họ tên chỉ gồm chữ cái và khoảng trắng';return ''},
 email:function(v){v=v.trim();if(!v)return 'Vui lòng nhập email';return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)?'':'Email không hợp lệ, ví dụ: ban@email.com'},
 phone:function(v){v=v.replace(/[\s.]/g,'').replace(/^\+84/,'0');if(!v)return 'Vui lòng nhập số điện thoại';return /^0[35789]\d{8}$/.test(v)?'':'Số điện thoại không hợp lệ: 10 số, bắt đầu bằng 03, 05, 07, 08 hoặc 09'},
 pass:function(v){if(!v)return 'Vui lòng nhập mật khẩu';if(v.length<8)return 'Mật khẩu tối thiểu 8 ký tự';if(/\s/.test(v))return 'Mật khẩu không được chứa khoảng trắng';if(!/[A-Za-z]/.test(v)||!/\d/.test(v))return 'Mật khẩu cần có cả chữ và số';if(/^(12345678|password1|matkhau123|abc12345)$/i.test(v))return 'Mật khẩu quá dễ đoán, hãy chọn mật khẩu khác';return ''}
};
function strength(v){var n=0;if(v.length>=8)n++;if(/[a-z]/.test(v)&&/[A-Z]/.test(v))n++;if(/\d/.test(v)&&/[A-Za-z]/.test(v))n++;if(/[^A-Za-z0-9]/.test(v)||v.length>=12)n++;return n}
function normPhone(v){return v.replace(/[\s.]/g,'').replace(/^\+84/,'0')}
/* ===== Giao diện đăng nhập / đăng ký / quên mật khẩu ===== */
var M=D.createElement('div');M.id='thAuth';M.setAttribute('role','dialog');M.setAttribute('aria-modal','true');M.setAttribute('aria-label','Tài khoản TOUR-HUB');D.body.appendChild(M);
function fld(id,l,t,ph,ac){return '<div class="au-f" data-f="'+id+'"><label for="'+id+'">'+l+'</label><div class="au-i"><input id="'+id+'" type="'+t+'" placeholder="'+ph+'" autocomplete="'+(ac||'off')+'">'+(t==='password'?'<button type="button" class="eye" aria-label="Hiện hoặc ẩn mật khẩu"><i class="fas fa-eye"></i></button>':'')+'</div><div class="au-e" role="alert"></div></div>'}
var mode='login';
function view(m){mode=m;var T={login:['Đăng nhập','Chào mừng bạn quay lại TOUR-HUB'],register:['Tạo tài khoản','Đăng ký miễn phí để đặt dịch vụ và lưu hành trình'],forgot:['Đặt lại mật khẩu','Xác minh email và số điện thoại đã đăng ký']}[m];
 var f='';
 if(m==='login')f=fld('auEmail','Email','email','ban@email.com','username')+fld('auPass','Mật khẩu','password','Nhập mật khẩu','current-password')+'<div style="text-align:right;margin:-4px 0 14px"><button type="button" class="au-l" data-go="forgot">Quên mật khẩu?</button></div><button class="au-s" type="submit">Đăng nhập</button><div class="au-ft">Chưa có tài khoản? <button type="button" class="au-l" data-go="register">Đăng ký ngay</button></div>';
 if(m==='register')f=fld('auName','Họ và tên','text','Nguyễn Văn A','name')+fld('auEmail','Email','email','ban@email.com','email')+fld('auPhone','Số điện thoại','tel','09xxxxxxxx','tel')+fld('auPass','Mật khẩu','password','Tối thiểu 8 ký tự, gồm chữ và số','new-password')+'<div class="au-m" style="margin:-6px 0 2px"><i></i><i></i><i></i><i></i></div><div class="au-ml" id="auSt">Độ mạnh mật khẩu</div><div style="height:10px"></div>'+fld('auPass2','Nhập lại mật khẩu','password','Nhập lại mật khẩu','new-password')+'<div class="au-f" data-f="auTerms"><label class="au-c"><input type="checkbox" id="auTerms"> <span>Tôi đồng ý với điều khoản sử dụng và chính sách bảo mật của TOUR-HUB.</span></label><div class="au-e" role="alert"></div></div><button class="au-s" type="submit">Tạo tài khoản</button><div class="au-ft">Đã có tài khoản? <button type="button" class="au-l" data-go="login">Đăng nhập</button></div>';
 if(m==='forgot')f=fld('auEmail','Email đã đăng ký','email','ban@email.com','username')+fld('auPhone','Số điện thoại đã đăng ký','tel','09xxxxxxxx','tel')+fld('auPass','Mật khẩu mới','password','Tối thiểu 8 ký tự, gồm chữ và số','new-password')+fld('auPass2','Nhập lại mật khẩu mới','password','Nhập lại mật khẩu mới','new-password')+'<button class="au-s" type="submit">Đặt lại mật khẩu</button><div class="au-ft"><button type="button" class="au-l" data-go="login">Quay lại đăng nhập</button></div>';
 M.innerHTML='<div class="au"><div class="au-h"><button class="au-x" aria-label="Đóng"><i class="fas fa-times"></i></button><h2>'+T[0]+'</h2><p>'+T[1]+'</p>'+(m==='forgot'?'<div style="height:14px"></div>':'<div class="au-t"><button data-go="login" class="'+(m==='login'?'on':'')+'">Đăng nhập</button><button data-go="register" class="'+(m==='register'?'on':'')+'">Đăng ký</button></div>')+'</div><form class="au-b" novalidate><div class="au-g" id="auG" role="alert"></div>'+f+'</form></div>';
 wire()}
function setErr(id,msg){var w=$('[data-f="'+id+'"]',M);if(!w)return !msg;w.classList.toggle('bad',!!msg);w.classList.toggle('ok',!msg&&!!(($('input',w)||{}).value));var e=$('.au-e',w);if(e)e.textContent=msg||'';return !msg}
function gerr(msg){var g=$('#auG',M);g.textContent=msg||'';g.classList.toggle('show',!!msg)}
function val(id){var e=$('#'+id,M);return e?e.value:''}
function wire(){
 M.querySelectorAll('[data-go]').forEach(function(b){b.onclick=function(){view(b.dataset.go);setTimeout(function(){var i=$('input',M);if(i)i.focus()},40)}});
 $('.au-x',M).onclick=close;
 M.querySelectorAll('.eye').forEach(function(b){b.onclick=function(){var i=$('input',b.parentNode),h=i.type==='password';i.type=h?'text':'password';b.innerHTML='<i class="fas fa-eye'+(h?'-slash':'')+'"></i>'}});
 var map={auName:function(){return setErr('auName',V.name(val('auName')))},auEmail:function(){return setErr('auEmail',V.email(val('auEmail')))},auPhone:function(){return setErr('auPhone',V.phone(val('auPhone')))},auPass:function(){return setErr('auPass',mode==='login'?(val('auPass')?'':'Vui lòng nhập mật khẩu'):V.pass(val('auPass')))},auPass2:function(){return setErr('auPass2',val('auPass2')?(val('auPass2')===val('auPass')?'':'Mật khẩu nhập lại không khớp'):'Vui lòng nhập lại mật khẩu')}};
 Object.keys(map).forEach(function(k){var i=$('#'+k,M);if(i)i.addEventListener('blur',function(){if(i.value)map[k]()});i&&i.addEventListener('input',function(){gerr('');var w=i.closest('.au-f');if(w.classList.contains('bad'))map[k]();if(k==='auPass'&&mode!=='login'){var n=strength(i.value),c=['#e11d48','#FF6A1F','#84cc16','#15a05a'];M.querySelectorAll('.au-m i').forEach(function(x,j){x.style.background=j<n?c[Math.max(0,n-1)]:''});var st=$('#auSt',M);if(st)st.textContent=i.value?['Rất yếu','Yếu','Trung bình','Khá','Mạnh'][n]:'Độ mạnh mật khẩu'}})});
 $('form',M).onsubmit=function(e){e.preventDefault();submit(map)};
}
function lockInfo(em){try{return JSON.parse(localStorage.getItem('th_lock_'+em)||'{}')}catch(e){return {}}}
function submit(map){gerr('');var btn=$('.au-s',M),keys=mode==='login'?['auEmail','auPass']:mode==='register'?['auName','auEmail','auPhone','auPass','auPass2']:['auEmail','auPhone','auPass','auPass2'];
 var ok=true,first=null;keys.forEach(function(k){if(!map[k]()){if(ok)first=k;ok=false}});
 if(mode==='register'&&!$('#auTerms',M).checked){setErr('auTerms','Bạn cần đồng ý điều khoản để tạo tài khoản');if(ok)first='auTerms';ok=false}
 if(!ok){var f=$('#'+first,M);if(f)f.focus();toast('Vui lòng sửa các ô được đánh dấu đỏ rồi thử lại.','error');return}
 var email=val('auEmail').trim().toLowerCase(),list=users();btn.disabled=true;var old=btn.textContent;btn.innerHTML='<i class="fas fa-circle-notch fa-spin"></i> Đang xử lý...';
 function done(){btn.disabled=false;btn.textContent=old}
 var u=list.filter(function(x){return x.email===email})[0];
 setTimeout(function(){
 if(mode==='register'){
  if(u){done();setErr('auEmail','Email này đã được đăng ký. Hãy đăng nhập hoặc dùng email khác.');gerr('Email đã tồn tại trong hệ thống.');toast('Email này đã được đăng ký.','error');return}
  var ph=normPhone(val('auPhone'));if(list.some(function(x){return x.phone===ph})){done();setErr('auPhone','Số điện thoại này đã được dùng cho tài khoản khác.');toast('Số điện thoại đã được đăng ký.','error');return}
  var sl=salt();hash(val('auPass'),sl).then(function(h){var nu={id:'U'+Date.now().toString(36),name:val('auName').trim().replace(/\s+/g,' '),email:email,phone:ph,salt:sl,hash:h,created:new Date().toISOString()};list.push(nu);putUsers(list);login(nu,'Đăng ký thành công','Tài khoản đã được tạo. Chào mừng '+nu.name+' đến với TOUR-HUB!')})}
 else if(mode==='login'){
  var L=lockInfo(email);if(L.until&&L.until>Date.now()){done();var m=Math.ceil((L.until-Date.now())/60000);gerr('Tài khoản tạm khóa do nhập sai nhiều lần. Vui lòng thử lại sau '+m+' phút hoặc đặt lại mật khẩu.');toast('Tài khoản tạm khóa '+m+' phút do nhập sai mật khẩu nhiều lần.','error');return}
  if(!u){done();setErr('auEmail','Không tìm thấy tài khoản với email này.');gerr('Tài khoản không tồn tại. Bạn có thể đăng ký mới.');toast('Không tìm thấy tài khoản với email này.','error');return}
  hash(val('auPass'),u.salt).then(function(h){done();if(h!==u.hash){var n=(L.n||0)+1,left=5-n;if(n>=5){localStorage.setItem('th_lock_'+email,JSON.stringify({n:0,until:Date.now()+300000}));gerr('Bạn đã nhập sai 5 lần. Tài khoản bị khóa 5 phút.');toast('Tài khoản bị khóa 5 phút do nhập sai mật khẩu 5 lần.','error')}else{localStorage.setItem('th_lock_'+email,JSON.stringify({n:n}));setErr('auPass','Mật khẩu không đúng. Còn '+left+' lần thử.');gerr('Email hoặc mật khẩu không chính xác.');toast('Mật khẩu không đúng. Còn '+left+' lần thử.','error');$('#auPass',M).select()}return}
   localStorage.removeItem('th_lock_'+email);login(u,'Đăng nhập thành công','Chào mừng trở lại, '+u.name+'!')})}
 else{
  if(!u||u.phone!==normPhone(val('auPhone'))){done();gerr('Email và số điện thoại không khớp với tài khoản nào. Vui lòng kiểm tra lại.');toast('Không xác minh được tài khoản. Hãy kiểm tra email và số điện thoại.','error');return}
  var s2=salt();hash(val('auPass'),s2).then(function(h){u.salt=s2;u.hash=h;putUsers(list);localStorage.removeItem('th_lock_'+email);done();toast('Mật khẩu đã được đặt lại. Vui lòng đăng nhập bằng mật khẩu mới.','success');view('login');$('#auEmail',M).value=email})}
 },450)}
function login(u,t,m){State.user={name:u.name,email:u.email,phone:u.phone};save();try{updateAuthUI()}catch(e){}close();toast(m,'success');
 if(window._thAfter){var f=window._thAfter;window._thAfter=null;setTimeout(f,350)}}
function open(m){view(m||'login');M.classList.add('open');D.body.style.overflow='hidden';setTimeout(function(){var i=$('input',M);if(i)i.focus()},60)}
function close(){M.classList.remove('open');D.body.style.overflow=''}
M.addEventListener('mousedown',function(e){if(e.target===M)close()});
D.addEventListener('keydown',function(e){if(e.key==='Escape'&&M.classList.contains('open'))close()});
window.openLogin=function(){open('login')};window.openRegister=function(){open('register')};window.openAuth=function(){open('login')};window.showAuth=function(m){open(m)};
window.requireAuth=function(){if(State.user)return true;toast('Vui lòng đăng nhập để tiếp tục.','warn');open('login');return false};
window.logout=function(){State.user=null;try{localStorage.removeItem('th_user')}catch(e){}save();try{updateAuthUI()}catch(e){}go('home');toast('Bạn đã đăng xuất.','success')};
window.doLogout=window.logout;
try{updateAuthUI()}catch(e){}
})();

;

(function(){
var D=document;
var LBL={'fa-qrcode':'Quét mã QR','fa-moon':'Đổi giao diện sáng/tối','fa-sun':'Đổi giao diện sáng/tối','fa-shopping-cart':'Giỏ hàng','fa-times':'Đóng','fa-search':'Tìm kiếm','fa-user':'Tài khoản','fa-heart':'Yêu thích','fa-comments':'Trò chuyện','fa-comment':'Trò chuyện','fa-trash':'Xóa','fa-chevron-left':'Trước','fa-chevron-right':'Sau','fa-share-alt':'Chia sẻ','fa-bars':'Mở menu'};
function fix(){
 D.querySelectorAll('button:not([aria-label])').forEach(function(b){
  if(b.textContent.trim()||b.title)return;
  var i=b.querySelector('i');if(!i)return;
  for(var k in LBL){if(i.classList.contains(k)){b.setAttribute('aria-label',LBL[k]);return}}
  b.setAttribute('aria-label','Nút chức năng');
 });
 D.querySelectorAll('.nav-link[onclick],.brand[onclick]').forEach(function(e){
  if(e.getAttribute('role'))return;e.setAttribute('role','link');e.tabIndex=0;
 });
}
D.addEventListener('keydown',function(e){
 if((e.key==='Enter'||e.key===' ')&&e.target.matches&&e.target.matches('.nav-link[role=link],.brand[role=link]')){e.preventDefault();e.target.click()}
});
fix();setTimeout(fix,800);
new MutationObserver(function(){clearTimeout(fix._t);fix._t=setTimeout(fix,200)}).observe(D.body,{childList:true,subtree:true});
})();
