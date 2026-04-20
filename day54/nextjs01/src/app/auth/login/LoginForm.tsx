"use client";

import { useActionState, useEffect } from "react";
import { demoAction } from "./action";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [state, action, pending] = useActionState(
    demoAction,
    {} as { message: string; success: boolean },
  );
  const router = useRouter();
  useEffect(() => {
    if (state.success) {
      router.push(`/`);
    }
  }, [state.success]);
  return (
    <form action={action}>
      <input
        name="name"
        type="text"
        className="px-3 py-1 outline-0 border border-[#ccc] w-full"
      />
      <button className="px-3 py-1 bg-green-600">
        {pending ? "Loading..." : "Login"}
      </button>
      {state.message && (
        <span className="block text-green-600">{state.message}</span>
      )}
    </form>
  );
}
