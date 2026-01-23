import React, { useEffect, useRef, useState } from "react";
import Button from "./components/Button";
export default function App() {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef(null);
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleClick = (e: React.PointerEvent<HTMLButtonElement>) => {
    e.currentTarget.style.color = "red";
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.placeholder = "ABC";
    }
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChangeValue} ref={inputRef} />
        <button onClick={handleClick}>Click me</button>
      </form>
      <h2>{value}</h2>
      <Button ref={buttonRef} text="Click me">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem et
          sequi odio quaerat quibusdam vero sint, veritatis eveniet nesciunt
          magni, voluptatibus fuga harum omnis ipsa blanditiis beatae
          necessitatibus. Libero, maiores.
        </p>
      </Button>
    </div>
  );
}

//xác định kiểu của các thư viện sử dụng
// - First-Type --> Hỗ trợ sẵn -> Ít khi bị lỗi typescript (zod)
// - Không hỗ trợ sẵn: Tìm các type, interface,...

//Tìm cách sử dụng: Thư viện, hook, event
