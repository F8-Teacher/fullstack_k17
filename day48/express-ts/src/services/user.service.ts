import { UserFindManyArgs, UserWhereInput } from "../generated/prisma/models";
import { UserQuery } from "../types/user.type";
import { prisma } from "../utils/prisma";

export const userService = {
  findAll({ status, s, page = 1, limit = 3, select = "" }: UserQuery) {
    const filters = {} as UserWhereInput;
    if (["true", "false"].includes(status)) {
      filters.status = status === "true";
    }
    if (s) {
      filters.OR = [
        {
          name: {
            contains: s,
            mode: "insensitive",
          },
        },
        {
          email: {
            contains: s,
            mode: "insensitive",
          },
        },
      ];
    }
    const offset = (page - 1) * limit;
    type SelectType = {
      [key: string]: boolean;
    };
    const fields = select
      .trim()
      .split(",")
      .filter((item) => item)
      .reduce((acc, cur) => {
        acc[cur.trim()] = true;
        return acc;
      }, {} as SelectType);
    const options = {
      where: filters,
      take: limit,
      skip: offset,
    } as UserFindManyArgs;
    if (Object.keys(fields).length) {
      options.select = fields;
    }
    return Promise.all([
      prisma.user.findMany(options),
      prisma.user.count({
        where: filters,
      }),
    ]);
  },
  async find(id: number) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  },
  create(userData: { name: string; email: string; status: boolean }) {
    return prisma.user.create({
      data: {
        ...userData,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  },
  update(
    userData: { name: string; email: string; status: boolean },
    id: number,
  ) {
    return prisma.user.update({
      where: { id },
      data: userData,
    });
  },
  delete(id: number) {
    return prisma.user.delete({
      where: { id },
    });
  },
};
