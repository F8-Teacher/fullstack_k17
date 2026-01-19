import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import PostDetail from "./PostDetail";
import PostForm from "./PostForm";

const getPosts = async () => {
  const response = await fetch(`http://localhost:3000/posts`);
  return response.json();
};
export default function Posts() {
  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
  const [postId, setPostId] = useState(0);
  return (
    <div>
      <h1>Posts</h1>
      {posts?.map((post) => (
        <div key={post.id}>
          <h3>
            {post.title}{" "}
            <button onClick={() => setPostId(post.id)}>Detail</button>
          </h3>
          {postId && postId === post.id ? <PostDetail postId={postId} /> : ""}
        </div>
      ))}
      <PostForm />
    </div>
  );
}
