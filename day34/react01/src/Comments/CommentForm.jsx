import React, { useState } from "react";

export default function CommentForm({ setComments }) {
  const [comment, setComment] = useState("");
  const handleChange = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setComments((comments) => {
      return [...comments, comment];
    });
    setComment("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={comment} />{" "}
        <button>Send</button>
      </form>
    </div>
  );
}
