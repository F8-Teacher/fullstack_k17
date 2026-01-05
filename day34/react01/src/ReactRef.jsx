import { useEffect, useRef, useState } from "react";
import Button from "./components/Button";

export default function ReactRef() {
  const myRef = useRef(10);
  const [count, setCount] = useState(10);
  const inputRef = useRef();
  const btnRef = useRef();
  useEffect(() => {
    console.log(myRef);
    console.log(inputRef);
    inputRef.current.focus();
    console.log(btnRef);
  }, []);
  const handleClick = () => {
    myRef.current++;
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <input type="text" placeholder="Nhập từ khóa..." ref={inputRef} />
      <Button ref={btnRef} />
    </div>
  );
}

//Ref:
// Tham chiếu đến kết quả cuối cùng (Không bị reset khi re-render)
// Không kích hoạt re-render khi thay đổi
// Được phép thay đổi trực tiếp
// Tham chiếu đến element -> DOM (Element node)
