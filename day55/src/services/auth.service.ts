import { CONFIG } from "@/constants/config.constant";
import { axiosInstance } from "@/lib/axios";

export const login = async (formData: { email: string; password: string }) => {
  const response = await fetch(`${CONFIG.SERVER_API}/auth/login`, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
    method: "POST",
  });
  if (!response.ok) {
    throw new Error("Unathorize");
  }
  return response.json();
};

export const getCurrentUser = async () => {
  const response = await axiosInstance.get("/profile/me");
  return response.data.user;
};

export const logout = async () => {
  return await axiosInstance.post("/auth/logout");
};

export const refreshToken = async (token: string) => {
  console.log(`refreshing`, token);
  const response = await fetch(`${CONFIG.SERVER_API}/auth/refresh`, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      refreshToken: token,
    }),
    method: "POST",
  });
  console.log(response);
  if (!response.ok) {
    throw new Error("Unathorize");
  }
  return response.json();
};
