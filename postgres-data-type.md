1. Kiểu dữ liệu Số (Numeric Types)
   Dùng để lưu trữ các con số từ số nguyên đến số thập phân có độ chính xác cao

- SMALLINT: Số nguyên 2-byte (phạm vi -32,768 đến 32,767).
- INTEGER (hoặc INT): Số nguyên 4-byte phổ biến nhất.
- BIGINT: Số nguyên 8-byte cho các giá trị cực lớn.
- DECIMAL / NUMERIC: Số thập phân có độ chính xác cố định, thường dùng cho dữ liệu tài chính.
- REAL / DOUBLE PRECISION: Số thực dấu phẩy động (độ chính xác không tuyệt đối)

2. Kiểu dữ liệu Chuỗi (Character Types)
   Dùng để lưu trữ văn bản với các giới hạn khác nhau.

- CHAR(n): Chuỗi có độ dài cố định $n$ ký tự. Nếu ngắn hơn sẽ tự bù khoảng trắng.
- VARCHAR(n): Chuỗi có độ dài thay đổi nhưng giới hạn tối đa n ký tự.
- TEXT: Chuỗi có độ dài không giới hạn (đặc sản của Postgres, hiệu năng tương đương VARCHAR)

3. Kiểu dữ liệu Ngày tháng & Thời gian (Date/Time Types)

- DATE: Chỉ lưu ngày (năm, tháng, ngày).
- TIME: Chỉ lưu giờ (giờ, phút, giây).
- TIMESTAMP: Lưu cả ngày và giờ.
- TIMESTAMPTZ: Giống TIMESTAMP nhưng có kèm thông tin múi giờ (khuyến khích dùng để tránh sai lệch giờ).
- INTERVAL: Lưu khoảng thời gian (ví dụ: "3 days", "2 hours").

4. Kiểu dữ liệu Logic & Đặc biệt

- BOOLEAN: Chỉ nhận giá trị TRUE, FALSE hoặc NULL.
- JSON / JSONB: Lưu trữ dữ liệu cấu trúc JSON. Trong đó JSONB được ưu tiên vì lưu dưới dạng nhị phân, hỗ trợ lập chỉ mục (index) giúp truy vấn cực nhanh.
- UUID: Lưu trữ mã định danh duy nhất (Universally Unique Identifier).
- ENUM: Kiểu liệt kê các giá trị cố định (ví dụ: trạng thái đơn hàng: 'pending', 'shipped', 'delivered')

5. Kiểu dữ liệu Mạng & Hình học (Nâng cao)

- Mạng: INET (địa chỉ IPv4/IPv6), CIDR, MACADDR.
- Hình học: POINT, LINE, POLYGON (dùng trong bản đồ/GIS).
