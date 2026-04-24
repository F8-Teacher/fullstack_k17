import { getAccessToken, makeRefreshToken } from "@/actions/auth.action";
import { CONFIG } from "@/constants/config.constant";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: CONFIG.SERVER_API,
});

//Interceptors
axiosInstance.interceptors.request.use(async (config) => {
  //Lấy accessToken -> Nhờ Server Action lấy hộ
  const accessToken = await getAccessToken();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});
let refreshPromise: null | Promise<
  boolean | { accessToken: string; refreshToken: string }
> = null;
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    //Check status
    if (error.status === 401 && typeof window !== "undefined") {
      //Cần phải refresh token
      if (!refreshPromise) {
        refreshPromise = makeRefreshToken();
      }
      const isRefresh = await refreshPromise;
      refreshPromise = null;
      if (isRefresh) {
        //retry
        return axiosInstance(error.config);
      } else if (window.location.pathname !== "/auth/login") {
        window.location.href = "/auth/login";
        return;
      }
    }
    return Promise.reject(error);
  },
);
