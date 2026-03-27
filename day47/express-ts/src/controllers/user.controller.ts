import { Request, Response } from "express";
import { userService } from "../services/user.service";

export const userController = {
  findAll: async (req: Request, res: Response) => {
    const users = await userService.findAll();
    res.json({
      success: true,
      message: "Get users success",
      data: users,
    });
  },
  find: async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await userService.find(+id!);
    res.json({
      success: true,
      message: "Get user success",
      data: user,
    });
  },
  create: async (req: Request, res: Response) => {
    const user = await userService.create(req.body);
    res.status(201).json({
      success: true,
      message: "Create user success",
      data: user,
    });
  },
};
