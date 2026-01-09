import React, { use } from "react";
import { ConvertContext } from "./Convert";

export default function Vnd() {
  const { vnd, handleChangeVnd } = use(ConvertContext);
  const handlePreventCharactor = (e) => {
    if ((e.keyCode < 48 || e.keyCode > 57) && e.keyCode !== 8) {
      e.preventDefault();
    }
  };
  return (
    <div>
      <label htmlFor="">Vnd</label>
      <input
        type="text"
        placeholder="Vnd..."
        onChange={handleChangeVnd}
        value={vnd}
        onKeyDown={handlePreventCharactor}
      />
    </div>
  );
}
