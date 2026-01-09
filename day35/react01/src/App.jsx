/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import Layout from "./components/Layout";
export const AppContext = createContext();

export default function App() {
  const [message, setMessage] = useState("F8 - Học React không khó");
  const [theme, setTheme] = useState("light");
  return (
    <AppContext.Provider value={{ message, setMessage, theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <Layout />
      </div>
    </AppContext.Provider>
  );
}

//Share dữ liệu tới nhiều component
//Cách cũ: Đẩy lên component cha -> Component con thông qua props

//Context: Truyền dữ liệu tới các component con mà nó mong muốn không cần thông qua props

//Context Object: React.createContext
//Context Provider --> Component để bọc các component khác (Gửi dữ liệu vào context)
//Context Consumer --> Nhận dữ liệu từ provider --> React hook useContext, use
