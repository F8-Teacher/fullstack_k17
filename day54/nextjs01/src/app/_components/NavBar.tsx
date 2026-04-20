"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import { AppContext } from "./AppProvider";

export default function NavBar() {
  const [username, setUsername] = useState("");
  const router = useRouter();
  const { message } = use(AppContext);
  // useEffect(() => {
  //   const getToken = async () => {
  //     const response = await fetch(`/api/cookies?key=token`);
  //     const { value: token } = await response.json();
  //     console.log(token);
  //   };
  //   getToken();

  //   const setToken = async () => {
  //     await fetch(`/api/cookies`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         key: "token",
  //         value: "k17",
  //       }),
  //     });
  //   };
  //   setToken();
  // }, []);
  return (
    <header className="max-w-2/3 mx-auto py-3 flex justify-between items-center">
      <h1 className="text-3xl font-medium">Logo: {message}</h1>
      <ul className="flex gap-2 items-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          Chào: {username}
          <button onClick={() => setUsername("Hoàng An")}>Update</button>
          <button onClick={() => router.push(`/products`)}>Go Products</button>
        </li>
      </ul>
    </header>
  );
}
