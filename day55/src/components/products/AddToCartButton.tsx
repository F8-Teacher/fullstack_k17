"use client";

import { toast } from "sonner";
import { Button } from "../ui/button";
import { addToCart } from "@/services/cart.service";
import { Product } from "@/types/product.type";

export default function AddToCartButton({ product }: { product: Product }) {
  return (
    <Button
      onClick={() => {
        toast.promise(() => addToCart(product._id), {
          loading: "Đang thêm giỏ hàng",
          success: () => {
            return `Đã thêm sản phẩm ${product.name} vào giỏ hàng`;
          },
          error: "Thêm giỏ hàng thất bại",
        });
      }}
      variant={"destructive"}
    >
      Add to cart
    </Button>
  );
}
