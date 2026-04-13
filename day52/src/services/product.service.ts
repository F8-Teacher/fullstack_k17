import { CACHE_KEY, CACHE_TAG, CACHE_TTL } from "../constants/cache.constant";
import { cache } from "../utils/cache";
import { prisma } from "../utils/prisma";
import { redisClient } from "../utils/redis";

export const productService = {
  async findAll(query: { page: number; limit: number; q: string }) {
    const { page = 1, limit = 10, q = "" } = query;

    // let listVer = (await redisClient.get(
    //   `products:version`,
    // )) as unknown as number;

    // if (!listVer) {
    //   listVer = await redisClient.incr(`products:version`);
    // }
    const tags = CACHE_TAG.PRODUCTS.LIST;
    const key = CACHE_KEY.PRODUCTS.LIST(query);
    redisClient.sAdd(tags, key); //add nhóm
    redisClient.expire(tags, 3600); //Đặt thời gian cho tag

    return cache.remember(
      key,
      () =>
        prisma.product.findMany({
          orderBy: {
            id: "desc",
          },
          take: +limit,
          skip: (page - 1) * limit,
          where: {
            name: {
              contains: q,
            },
          },
          omit: {
            description: true,
          },
        }),
      CACHE_TTL.PRODUCTS.LIST,
    );
  },
  async create(productData: {
    name: string;
    price: number;
    description: string;
  }) {
    const product = await prisma.product.create({
      data: productData,
    });
    // cache.forget("products:list"); //invalidate
    // redisClient.incr(`products:version`);
    cache.invalidateTags([CACHE_TAG.PRODUCTS.LIST]);
    return product;
  },
  async find(id: number) {
    return cache.remember(
      CACHE_KEY.PRODUCTS.DETAIL(id),
      () =>
        prisma.product.findUnique({
          where: { id },
        }),
      CACHE_TTL.PRODUCTS.DETAIL,
    );
  },
  async update(
    id: number,
    productData: { name: string; price: number; description: string },
  ) {
    const product = await prisma.product.update({
      where: { id },
      data: productData,
    });
    if (!product) {
      throw new Error("Update product failed");
    }
    // cache.forget(`products:list`);
    // redisClient.incr(`products:version`);
    cache.forget(CACHE_KEY.PRODUCTS.DETAIL(id));
    cache.invalidateTags([CACHE_TAG.PRODUCTS.LIST]);
    return product;
  },
  async delete(id: number) {
    const product = await prisma.product.delete({
      where: { id },
    });
    if (!product) {
      throw new Error("Delete product failed");
    }
    // cache.forget(`products:list`);
    // redisClient.incr(`products:version`);
    // cache.forget(`products:${id}`);
    cache.forget(CACHE_KEY.PRODUCTS.DETAIL(id));
    cache.invalidateTags([CACHE_TAG.PRODUCTS.LIST]);
    return product;
  },
};
