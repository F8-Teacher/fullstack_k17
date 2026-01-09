/* eslint-disable react-refresh/only-export-components */
import Vnd from "./Vnd";
import Usd from "./Usd";
import { createContext, useState } from "react";
export const ConvertContext = createContext();
const USD_RATE = 26000;
export default function Convert() {
  const [vnd, setVnd] = useState("");
  const [usd, setUsd] = useState("");
  const handleChangeVnd = (e) => {
    const vnd = e.target.value;
    setVnd(vnd);
    const usd = (vnd / USD_RATE).toFixed(2);
    setUsd(usd);
  };
  const handleChangeUsd = (e) => {
    const usd = e.target.value;
    setUsd(usd);
    const vnd = (usd * USD_RATE).toFixed(0);
    setVnd(vnd);
  };
  return (
    <div>
      <h2>Chuyển đổi tiền tệ</h2>
      <ConvertContext.Provider
        value={{
          vnd,
          usd,
          handleChangeVnd,
          handleChangeUsd,
        }}
      >
        <Vnd />
        <Usd />
      </ConvertContext.Provider>
    </div>
  );
}
