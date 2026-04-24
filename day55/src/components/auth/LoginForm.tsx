"use client";

import { loginAction } from "@/actions/auth.action";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/auth.store";

export default function LoginForm() {
  const router = useRouter();
  const { setUser } = useAuthStore();
  return (
    <form
      action={async (formData) => {
        toast.promise(() => loginAction(formData), {
          success: async (data) => {
            //Gọi zustand để đồng bộ user lên store ngay lập tức
            setUser?.(data);
            router.push("/");
            return "Login success";
          },
          loading: "Đang login",
          error: "Email or password not correct",
        });
      }}
    >
      <div className="mb-3">
        <label htmlFor="">Email</label>
        <Input type="email" name="email" placeholder="Email..." />
      </div>
      <div className="mb-3">
        <label htmlFor="">Password</label>
        <Input type="password" name="password" placeholder="Password..." />
      </div>
      <Button>Login</Button>
    </form>
  );
}

//Flow Auth: Login Form -> Server Action -> API Back-end -> Token -> Save cookie (http only)
