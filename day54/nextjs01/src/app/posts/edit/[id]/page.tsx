import { CACHE } from "@/app/constants/cache.constant";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

const getPost = async (id: string) => {
  const response = await fetch(`http://localhost:4000/posts/${id}`, {
    cache: "force-cache",
    next: {
      tags: [CACHE.POST.DETAIL(id)],
    },
  });
  return response.json();
};
export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(id);
  const updateAction = async (formData: FormData) => {
    "use server";
    const title = formData.get("title");
    const response = await fetch(`http://localhost:4000/posts/${id}`, {
      method: "PUT",
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
      revalidateTag(CACHE.POST.DETAIL(id), {
        expire: 0,
      });
      redirect("/posts");
    }
  };
  return (
    <div>
      <h1 className="text-3xl">Edit</h1>
      <form action={updateAction}>
        <input
          type="text"
          name="title"
          className="px-3 py-1 outline-0 border border-[#ddd] w-full"
          defaultValue={post.title}
        />
        <button className="px-3 py-1 bg-green-500 text-white">Update</button>
      </form>
    </div>
  );
}
