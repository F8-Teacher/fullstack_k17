# Indexing

Chỉ đánh index trên các cột cần thiết: Chọn các cột thường xuyên xuất hiện trong mệnh đề WHERE, JOIN, ORDER BY, GROUP BY.

Ưu tiên Khóa chính (Primary Key) và Khóa ngoại (Foreign Key): Các trường này thường được dùng để liên kết bảng và tìm kiếm.

Đánh Index trên cột có độ phân biệt cao (High Cardinality): Chọn các cột có nhiều giá trị khác nhau (như email, username, id), tránh đánh trên cột có quá ít giá trị khác nhau (như giới tính).

Sử dụng Composite Index (Chỉ mục kết hợp): Nếu WHERE sử dụng nhiều cột, tạo 1 index trên các cột đó thay vì nhiều index đơn lẻ. Quy tắc là "Leftmost Prefix" - sắp xếp các cột theo thứ tự xuất hiện trong câu lệnh truy vấn.

Tránh đánh index quá nhiều: Mỗi bảng chỉ nên có một vài index chính, vì index làm chậm quá trình INSERT, UPDATE, DELETE do phải cập nhật lại chỉ mục.

Sử dụng Unique Index: Đảm bảo dữ liệu không trùng lặp và tìm kiếm nhanh hơn.
Loại Index Clustered/Non-Clustered: Mỗi bảng chỉ có 1 Clustered Index (thường là khóa chính), còn lại là Non-Clustered.

Lưu ý:

- Nếu số record < 10.0000 bản ghi --> scan full table nhanh hơn --> Không đánh index
- Nếu số record >= 10.000 --> Cân nhắc đánh index
- Nếu số record >= 100.000 --> Chắc chắn phải đánh index

Lời khuyên: Không nên đánh index ngay từ đầu

Ví dụ:

```
SELECT * FROM products WHERE name LIKE '%sp1%'
```

s -> p -> 1

Nếu câu lệnh truy vấn có where like -> Dùng Full text search index

name: nồi cơm điện abc

```
SELECT * FROM products WHERE name LIKE '%nồi cơm điện%'
```

const result = await prisma.$queryRaw`SELECT * FROM User WHERE email = ${email}`;
