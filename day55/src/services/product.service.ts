import { CONFIG } from "@/constants/config.constant";
import { Product } from "@/types/product.type";

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${CONFIG.SERVER_API}/products`);
  const { products } = await response.json();
  return products;
};
