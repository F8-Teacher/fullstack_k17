import React, { use } from "react";
import { ConvertContext } from "./Convert";

export default function Usd() {
  const { usd, handleChangeUsd } = use(ConvertContext);
  return (
    <div>
      <label htmlFor="">Usd</label>
      <input
        type="number"
        placeholder="Usd..."
        onChange={handleChangeUsd}
        value={usd}
      />
    </div>
  );
}
