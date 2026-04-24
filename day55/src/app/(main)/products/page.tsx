import AddToCartButton from "@/components/products/AddToCartButton";
import { getProducts } from "@/services/product.service";
import Image from "next/image";

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <div>
      <h1 className="text-3xl">Products</h1>
      <div className="flex flex-wrap mt-3 -mx-3">
        {products.map((product) => (
          <div key={product._id} className="w-1/4 px-3 mb-3">
            <div>
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="h-50 object-cover mb-3 block"
              />
              <h2 className="text-xl mb-3 font-medium">{product.name}</h2>
              <p className="text-lg mb-3">
                Price: {product.price.toLocaleString()}
              </p>
              <AddToCartButton product={product} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
