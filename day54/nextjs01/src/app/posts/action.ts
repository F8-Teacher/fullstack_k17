"use server";

import { revalidateTag } from "next/cache";
import { CACHE } from "../constants/cache.constant";
import { redirect } from "next/navigation";

export const deleteAction = async (id: number) => {
  const response = await fetch(`http://localhost:4000/posts/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    revalidateTag(CACHE.POST.LIST, {
      expire: 0,
    });
    revalidateTag(CACHE.POST.DETAIL(id as unknown as string), {
      expire: 0,
    });
    redirect("/posts");
  }
};
