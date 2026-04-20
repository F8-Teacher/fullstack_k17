import { revalidateTag } from "next/cache";
import { CACHE } from "../constants/cache.constant";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

const getPosts = async (): Promise<{ id: number; title: string }[]> => {
  const response = await fetch(`http://localhost:4000/posts`, {
    cache: "force-cache",
    next: {
      tags: [CACHE.POST.LIST],
    },
  });
  return response.json();
};
export default async function PostsPage() {
  const posts = await getPosts();
  const addAction = async (formData: FormData) => {
    "use server";
    const title = formData.get("title");
    const response = await fetch(`http://localhost:4000/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
    if (response.ok) {
      //   revalidatePath("/posts");
      //   revalidateTag("posts:list", "max");
      revalidateTag(CACHE.POST.LIST, {
        expire: 0,
      });
    }
  };
  return (
    <div>
      <h1 className="text-3xl">Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="mb-3 border-b border-[#ddd] pb-2">
          <h2 className="text-xl mb-1">{post.title}</h2>
          <div className="flex gap-2">
            <Link
              href={`/posts/edit/${post.id}`}
              className="bg-amber-500 text-white px-1"
            >
              Edit
            </Link>
            <DeleteButton id={post.id} />
          </div>
        </div>
      ))}
      <form action={addAction}>
        <input
          type="text"
          name="title"
          className="px-3 py-1 outline-0 border border-[#ddd] w-full"
        />
        <button className="px-3 py-1 bg-green-500 text-white">Add</button>
      </form>
    </div>
  );
}
