import { useEffect, useState } from "react";

export default function App() {
  const [avatar, setAvatar] = useState("");
  const [message, setMessage] = useState("");
  const [isShowTop, setShowTop] = useState(false);
  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    if (!["image/jpg", "image/jpeg", "image/png"].includes(file.type)) {
      setMessage("Định dạng không hợp lệ");
      return;
    }
    const previewUrl = URL.createObjectURL(file);
    setAvatar(previewUrl);
  };
  const handleScrollTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    return () => {
      if (avatar) {
        URL.revokeObjectURL(avatar);
      }
    };
  }, [avatar]);
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setShowTop(y >= 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      style={{
        height: "2000px",
      }}
    >
      <h1>Avatar</h1>
      <input type="file" onChange={handleChangeFile} />
      {avatar && (
        <div>
          <img
            src={avatar}
            style={{
              width: 150,
            }}
            alt=""
          />
        </div>
      )}
      {message && <p style={{ color: "red" }}>{message}</p>}
      {isShowTop && (
        <button
          onClick={handleScrollTop}
          style={{
            position: "fixed",
            right: "5px",
            bottom: "5px",
          }}
        >
          Top
        </button>
      )}
    </div>
  );
}

//URL.createObjectUrl(fileObject)

//State thay đổi -> Update UI -> Xử lý các việc khác (Side Effect)
// - Call api
// - storage
// - timer
// - event
