# CORS

- Chính sách của trình duyệt
- Chặn các request từ các url không rõ nguồn gốc (origin)
- origin = scheme + hostname + port

## Bypass

- Back-end cho phép origin front-end được phép lấy tài nguyên
- Thông qua response header từ back-end trả về

## 2 loại request

1. simple request

- request vẫn gửi lên server
- server vẫn trả về response
- browser block access response

2. non-simple request

- request preflight gửi trước (path trùng với request, method là OPTIONS)
- nếu preflight pass --> request chính sẽ được gửi
- nếu preflight failed --> request chính sẽ bị block ở trình duyệt

## Dùng api của bên thứ 3

Không pass cors

Front-end --> my back-end --> api bên thứ 3

my back-end: proxy
