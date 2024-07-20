# CSS/SCSS Module

## Vấn đề

```
App
    Carousel
    Products
    Posts
```

- Trùng lặp class giữa các component
- Ghi đè css

## Giải pháp

- Đặt class khác ==> Rất khó: 1 dự án nhiều người làm
- Sử dụng các thư viện để scope stylesheet ==> Style chỉ hoạt động trong nội bộ component mà không ảnh hưởng tới component khác
- CSS Module ==> Tự generate các class khác nhau ==> Thêm hậu tố vào các class mà lập trình viên định nghĩa
