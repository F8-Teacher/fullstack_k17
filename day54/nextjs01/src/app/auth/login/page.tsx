// import { cookies } from "next/headers";

import LoginForm from "./LoginForm";

export default async function LoginPage() {
  //   const demoAction = async (formData: FormData) => {
  //     "use server";
  //     const name = formData.get("name");
  //     console.log(name);
  //     const cookieStore = await cookies();
  //     cookieStore.set("token", "ok-123");
  //   };
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
}
