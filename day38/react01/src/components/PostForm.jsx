import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
const createPost = async (newPost) => {
  const response = await fetch(`http://localhost:3000/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });
  if (!response.ok) {
    throw new Error("Có lỗi khi thêm");
  }
  return response.json();
};
export default function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      console.log("Thành công");
      queryClient.invalidateQueries(["posts"]);
    },
    onError: () => {
      console.log("Lỗi");
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ title, body });
  };
  return (
    <div>
      <h2>Add Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Title..."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Body..."
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button>Add</button>
      </form>
    </div>
  );
}
