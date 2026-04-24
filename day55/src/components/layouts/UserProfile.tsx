"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect } from "react";

import { Spinner } from "../ui/spinner";
import { useAuthStore } from "@/stores/auth.store";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function UserProfile() {
  const { user, isAuthenticated, isLoading, refetchUser, logout } =
    useAuthStore();
  const router = useRouter();
  useEffect(() => {
    refetchUser?.();
  }, []);
  return (
    <>
      {isLoading ? (
        <Button variant={"outline"}>
          <Spinner className="animate-spin" />
        </Button>
      ) : isAuthenticated ? (
        <>
          <li>Chào: {user?.fullName}</li>
          <li>
            <Button
              variant={"outline"}
              onClick={() => {
                toast.promise(
                  () => {
                    return logout?.() as unknown as Promise<void>;
                  },
                  {
                    loading: "Đang logout",
                    success: () => {
                      router.push("/auth/login");
                      return "Logout success";
                    },
                  },
                );
              }}
            >
              Logout
            </Button>
          </li>
        </>
      ) : (
        <li>
          <Link href={"/auth/login"}>
            <Button>Login</Button>
          </Link>
        </li>
      )}
    </>
  );
}
