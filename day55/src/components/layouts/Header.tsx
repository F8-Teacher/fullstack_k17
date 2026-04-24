import Link from "next/link";

import UserProfile from "./UserProfile";

export default function Header() {
  return (
    <header className="max-w-300 py-3 mx-auto flex justify-between items-center">
      <div>
        <span className="text-3xl font-medium">Logo</span>
      </div>
      <ul className="flex gap-3 items-center">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/products"}>Products</Link>
        </li>
        <li>
          <Link href={"/cart"}>Cart (0)</Link>
        </li>
        <UserProfile />
      </ul>
    </header>
  );
}
