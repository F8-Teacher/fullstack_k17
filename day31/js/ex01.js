const inputEl = document.querySelector("input");
const btn = document.querySelector("button");
const previewEl = document.querySelector(".preview img");
let previewURL;
inputEl.addEventListener("change", (e) => {
  if (previewURL) {
    URL.revokeObjectURL(previewURL);
  }
  previewURL = URL.createObjectURL(e.target.files[0]);
  previewEl.src = previewURL;
});

btn.addEventListener("click", async () => {
  const file = inputEl.files[0];
  const formData = new FormData();
  formData.append("file", file);
  btn.innerText = "Uploading...";
  btn.disabled = true;
  const response = await fetch(`https://api.escuelajs.co/api/v1/files/upload`, {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  previewEl.src = data.location;
  btn.innerText = "Upload";
  btn.disabled = false;
});

//Blob URL: Mã hóa nội dung (text, ảnh, video,...) thành dạng nhị phân (Binary) --> Cung cấp URL để truy cập
//Blob sẽ bị mất khi tắt tab, reload,...

//Upload file
//Make HTTP Request (Form Data) --> Binary --> Server --> URL
