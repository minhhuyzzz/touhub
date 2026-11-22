# TOUR-HUB v19

Website du lịch số nhiều trang. Mở `index.html` để bắt đầu (khuyến nghị chạy qua máy chủ: `python -m http.server 8000`).

## Thay đổi v19
- **Google Maps thật**: bản đồ địa điểm (Story, Food, Dịch vụ, Check-in, Giờ vàng, Planner) dùng Google Maps nhúng, tìm theo tên + tỉnh (không còn cố định Đà Nẵng). Có nút "Mở Google Maps" và "Chỉ đường".
- Trang **Giờ vàng**: thêm tab "Google Maps trực tiếp" + nút chỉ đường; đổi tên "mật độ ước tính" cho đúng bản chất dữ liệu.
- **Planner**: tính theo số đêm, số phòng, số xe; tự chọn hạng lưu trú phù hợp ngân sách; nút "Tối ưu chi phí"; vé tham quan theo bảng giá ước tính; lộ trình từng ngày mở trên Google Maps; PDF giữ chữ Việt không dấu thay vì mất chữ.
- Ảnh cục bộ trong `assets/img/`: Ninh Bình, bún chả Hương Liên, Robusta BMT, OCOP Đắk Lắk, bánh pía Sóc Trăng.

## Khóa Google (tùy chọn)
Không bắt buộc. Muốn bản nhúng chính thức: bật Maps Embed API (miễn phí) và thêm
`<script>window.TH_CONFIG={gmapsKey:'AIza...'}</script>` trước `assets/gmaps.js`.

Đưa lên web: kéo thả cả thư mục lên Netlify hoặc GitHub Pages (HTTPS).

## Video địa danh (lưu trong máy)
Đặt file MP4 vào `assets/video/` theo danh sách trong `assets/video/DANH-SACH-VIDEO.txt`
(ví dụ `hue.mp4`, `ha-long.mp4`, `son-doong.mp4`). Story Hub và Check-in Hub phát file này trước;
thiếu file thì dùng YouTube dự phòng, hoặc hiện "Video đang được cập nhật".
"# touhub" 
