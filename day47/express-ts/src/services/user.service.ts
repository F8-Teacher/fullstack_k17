import { prisma } from "../utils/prisma";

export const userService = {
  findAll() {
    return prisma.user.findMany({
      omit: {
        status: true,
      },
    });
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
};
