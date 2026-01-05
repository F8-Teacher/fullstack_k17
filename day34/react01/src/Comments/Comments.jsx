import React, { useState } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
export default function Comments() {
  const [comments, setComments] = useState([
    "Comment 1",
    "Comment 2",
    "Comment 3",
  ]);
  return (
    <div>
      <CommentList comments={comments} />
      <CommentForm setComments={setComments} />
    </div>
  );
}
