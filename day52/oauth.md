# OAuth Flow

1. User truy cập vào ứng bên thứ 3

Ví dụ: Bấm nút "Login thông qua Google"

2. Ứng dụng bên thứ 3 xin ủy quyền

- Gửi request lên OAuth Service (Google)
- Google check xem request có hợp lệ hay không?
- Nếu hợp lệ --> Trả về thông tin ủy quyền: Đăng nhập --> Nút chấp nhận ủy quyền

3. Lấy Authorization code

Sau khi user chấp nhận ủy quyền cho bên thứ 3 ==> Google chuyển hướng về ứng dụng bên thứ 3 (CALLBACK URL) ==> Kèm theo Authorization code

4. Đổi lấy access token

Ứng dụng bên thứ 3 gọi api tới Google để lấy access token

5. Đổi lấy data

Ứng dụng bên thứ 3 dùng Access token để đổi lấy dữ liệu mong muốn (user google, ảnh google drive,...)

## **Google**

### Lấy Authentication Code

GET https://accounts.google.com/o/oauth2/v2/auth

Params:

- client_id: CLIENT ID cua ban
- redirect_uri: Link Callback
- response_type: code
- scope: email profile
- access_type: offline

### Lấy Access Token

POST https://oauth2.googleapis.com/token

Body:

- code: Code lấy từ bước trên
- client_id: CLIENT ID cua ban
- client_secret: SECRET cua ban
- redirect_uri: Link Callback
- grant_type: authorization_code

### Lấy user từ access token

GET https://www.googleapis.com/oauth2/v2/userinfo
Authorization: Bearer {token}

## **Github**

### Lấy Authorization Code

GET https://github.com/login/oauth/authorize

Params:

- client_id: CLIENT ID cua ban
- redirect_uri: Link Callback
- scope: user
- state: github

### Lấy Access Token

POST https://github.com/login/oauth/access_token

Body:

- client_id: CLIENT ID cua ban
- client_secret: SECRET cua ban
- code: Code lấy từ bước trên
- redirect_uri: Link Callback

### Lấy user từ access token

GET https://api.github.com/user

Headers

- Authorization: token
- User-Agent: MyApp
