import { CONFIG } from "@/constants/config.constant";
import { axiosInstance } from "@/lib/axios";
import { fetchWrapper } from "@/lib/fetch";

export const addToCart = async (productId: string, quantity = 1) => {
  const response = await axiosInstance.post("/shopping-cart", {
    productId,
    quantity,
  });
  return response.data;
};

export const getCarts = async () => {
  const response = await fetchWrapper(`${CONFIG.SERVER_API}/shopping-cart`);
  return response.json();
};
