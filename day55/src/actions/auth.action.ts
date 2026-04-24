"use server";

import { login, logout, refreshToken } from "@/services/auth.service";
import { cookies } from "next/headers";

export const loginAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const token = await login({ email, password });
  const cookieStore = await cookies();
  cookieStore.set("accessToken", token.accessToken, {
    httpOnly: true,
    maxAge: 3600,
  });
  cookieStore.set("refreshToken", token.refreshToken, {
    httpOnly: true,
    maxAge: 86400 * 7,
  });
  return token.user;
};

export const getAccessToken = async () => {
  const cookieStore = await cookies();
  return cookieStore.get("accessToken")?.value;
};

export const logoutAction = async () => {
  //gọi service
  logout();
  //remove token khỏi cookie
  const cookieStore = await cookies();
  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");
};

export const makeRefreshToken = async (isSave = true) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("refreshToken")?.value;

  if (!token) {
    return false;
  }
  try {
    const newToken = await refreshToken(token);

    if (!newToken) {
      return false;
    }
    if (isSave) {
      cookieStore.set("accessToken", newToken.accessToken, {
        httpOnly: true,
        maxAge: 3600,
      });
      cookieStore.set("refreshToken", newToken.refreshToken, {
        httpOnly: true,
        maxAge: 86400 * 7,
      });
      return true;
    }

    return {
      accessToken: newToken.accessToken,
      refreshToken: newToken.refreshToken,
    };
  } catch {
    return false;
  }
};
