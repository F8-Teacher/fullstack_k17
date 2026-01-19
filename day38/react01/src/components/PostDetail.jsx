import { useQuery } from "@tanstack/react-query";

const getPost = async (postId) => {
  const response = await fetch(`http://localhost:3000/posts/${postId}`);
  return response.json();
};
export default function PostDetail({ postId }) {
  const { data, isLoading } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => getPost(postId),
    gcTime: 1000 * 60 * 10,
    staleTime: 1000 * 60, //1 phút
  });
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>
    </div>
  );
}
