let keyword = "LOREM";
let content = `Xin chào anh em Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur laborum perspiciatis maiores autem suscipit eos ut tenetur, sequi aliquid sint repellendus eveniet aperiam unde aliquam expedita itaque quae molestiae! Xin chào anh em Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur laborum perspiciatis maiores autem suscipit eos ut tenetur, sequi aliquid sint repellendus eveniet aperiam unde aliquam expedita itaque quae molestiae! Xin chào anh em Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur laborum perspiciatis maiores autem suscipit eos ut tenetur, sequi aliquid sint repellendus eveniet aperiam unde aliquam expedita itaque quae molestiae! `;

//B1: Xác định vị trí của keyword trong content
//B2: Tách chuỗi content thành 3 đoạn và bọc span vào keyword

let newContent = "";
//Tìm lần 1
let position = content.toLowerCase().indexOf(keyword.toLowerCase());
let count = 0;
while (position !== -1) {
  newContent +=
    content.slice(0, position) +
    "<span>" +
    content.slice(position, position + keyword.length) +
    "</span>";
  //Cắt bỏ đoạn đầu khỏi content
  content = content.slice(position + keyword.length);
  //Tìm lại keyword trong content mới (content đã bị cắt)
  position = content.toLowerCase().indexOf(keyword.toLowerCase());
  count++;
}

newContent += content; //Nối đoạn content còn thiếu (do bị thoát vòng lặp)

document.body.innerHTML = `
<p>Từ khóa: ${keyword}</p>
<p>${newContent}</p>
<p>Đã tìm thấy ${count} kết quả</p>
`;

// //Tìm lần 2
// position = content.toLowerCase().indexOf(keyword.toLowerCase());
// newContent +=
//   content.slice(0, position) +
//   "<span>" +
//   content.slice(position, position + keyword.length) +
//   "</span>";
// content = content.slice(position + keyword.length);

// //Tìm lần 3
// position = content.toLowerCase().indexOf(keyword.toLowerCase());
// newContent +=
//   content.slice(0, position) +
//   "<span>" +
//   content.slice(position, position + keyword.length) +
//   "</span>";
// content = content.slice(position + keyword.length);

//Nguyên tắc khi tìm kiếm
// - Không phân biệt hoa thường
// - Không được thay đổi lại văn bản gốc

/*
Lần 1:
newContent = "Xin chào anh em <span>Lorem</span>"
content = " ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur laborum perspiciatis maiores autem suscipit eos ut tenetur, sequi aliquid sint repellendus eveniet aperiam unde aliquam expedita itaque quae molestiae! Xin chào anh em Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur laborum perspiciatis maiores autem suscipit eos ut tenetur, sequi aliquid sint repellendus eveniet aperiam unde aliquam expedita itaque quae molestiae! Xin chào anh em Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur laborum perspiciatis maiores autem suscipit eos ut tenetur, sequi aliquid sint repellendus eveniet aperiam unde aliquam expedita itaque quae molestiae!"

Lần 2:
newContent = "Xin chào anh em <span>Lorem</span> ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur laborum perspiciatis maiores autem suscipit eos ut tenetur, sequi aliquid sint repellendus eveniet aperiam unde aliquam expedita itaque quae molestiae! Xin chào anh em <span>Lorem</span>"
content = " ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur laborum perspiciatis maiores autem suscipit eos ut tenetur, sequi aliquid sint repellendus eveniet aperiam unde aliquam expedita itaque quae molestiae! Xin chào anh em Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur laborum perspiciatis maiores autem suscipit eos ut tenetur, sequi aliquid sint repellendus eveniet aperiam unde aliquam expedita itaque quae molestiae!"

Lần 3:

Lần 4:
*/

//Bài tập: Kiểm tra độ mạnh yếu mật khẩu (Không dùng biểu thức chính quy)
// - Từ 8 ký tự trở lên
// - Có ít nhất 2 ký tự hoa
// - Có ít nhất 2 ký tự thường
// - Có ít nhất 1 số
// - Có ít nhất 1 ký tự đặc biệt: !@#$%^&*()
const isStrengthPassword = (password) => {
  const symbol = "!@#$%^&*()";
  const number = "1234567890";
  let isNumber = false;
  let isSymbol = false;
  let upperCount = 0;
  let lowerCount = 0;
  if (password.length < 8) {
    return false;
  }
  for (let i = 0; i < password.length; i++) {
    const char = password.charAt(i);
    if (symbol.includes(char)) {
      isSymbol = true;
    }
    if (number.includes(char)) {
      isNumber = true;
    }
    if (char >= "a" && char <= "z") {
      lowerCount++;
    }
    if (char >= "A" && char <= "Z") {
      upperCount++;
    }
  }
  if (upperCount >= 2 && lowerCount >= 2 && isSymbol && isNumber) {
    return true;
  }
  return false;
};
console.log(isStrengthPassword("HAoangan@123"));
