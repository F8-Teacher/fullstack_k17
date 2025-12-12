# Công cụ quản lý thư viện

## Vấn đề

Tải thư viện -> Copy vào project -> Gọi file của thư viện vào dự án

- Di chuyển: Nặng
- Xóa bỏ: Gặp khó khăn
- Cập nhật: Gặp khó khăn

## Sinh ra công cụ quản lý thư viện (Package Manager)

JavaScript:

- npm = node package manager
- yarn

Đặc điểm

- File cấu hình: package.json
- Thư mục chứa thư viện: node_modules

1. Khởi tạo dự án npm

npm init -y

2. Cài đặt thư viện

npm i tenthuvien@phienban

npm i tenthuvien

npm i --> Cài đặt tất cả thư viện có trong dự án

npm i tenthuvien --save-dev --> Cài thư viện phục vụ cho dev

3. Xóa thư viện

npm uninstall tenthuvien

npm un tenthuvien

4. Cập nhật thư viện

npm update tenthuvien@phienbanr

npm update tenthuvien

npm update --> Cập nhật tất cả thư viện
