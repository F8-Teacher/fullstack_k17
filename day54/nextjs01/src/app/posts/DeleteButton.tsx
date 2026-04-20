"use client";

import { useState } from "react";
import { deleteAction } from "./action";

export default function DeleteButton({ id }: { id: number }) {
  const [isLoading, setLoading] = useState(false);
  return (
    <button
      className="bg-red-500 text-white px-1 disabled:bg-red-300"
      onClick={async () => {
        setLoading(true);
        await deleteAction(id);
        setLoading(false);
      }}
      disabled={isLoading}
    >
      {isLoading ? "Deleting" : "Delete"}
    </button>
  );
}
