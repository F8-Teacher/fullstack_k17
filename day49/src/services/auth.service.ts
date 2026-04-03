import { JwtPayload } from "jsonwebtoken";
import { hashPassword, verifyPassword } from "../utils/hashing";
import { jwtService } from "./jwt.service";
import { userService } from "./user.service";
import { redisClient } from "../utils/redis";

export const authService = {
  async register(userData: { name: string; email: string; password: string }) {
    //Hashing password
    const passwordHash = hashPassword(userData.password);
    //Gọi userService để thêm vào database
    const user = await userService.create({
      ...userData,
      password: passwordHash,
    });
    //Gửi email xác thực, chào mừng
    //Tạo token (Gọi jwtService)
    const accessToken = jwtService.createAccessToken(user.id);
    return { accessToken };
  },
  async login(email: string, password: string) {
    //Find email
    const user = await userService.findByEmail(email);
    if (!user) {
      throw new Error("Email or password not correct");
    }
    //Lấy password hash
    const passwordHash = user.password;

    //Verify password
    if (!verifyPassword(password, passwordHash)) {
      throw new Error("Email or password not correct");
    }

    //Tạo token
    const accessToken = jwtService.createAccessToken(user.id);
    return { accessToken };
  },

  async profile(token: string) {
    //verfify token
    const decoded = jwtService.verifyAccessToken(token);
    if (!decoded) {
      return false;
    }
    //Check blacklist
    const blacklist = await redisClient.get(`blacklist:${token}`);
    if (blacklist) {
      return false;
    }
    const { userId } = decoded as JwtPayload;
    //Query db
    const user = await userService.find(userId);
    //Check user block không? verify chưa?
    return user;
  },
  async logout(token: string) {
    const { exp } = jwtService.decodedToken(token) as JwtPayload;
    const seconds = Math.ceil(exp! - Date.now() / 1000);
    // await redisClient.set(`blacklist:${token}`, 1);
    await redisClient.setEx(`blacklist:${token}`, seconds, "1");
    return true;
  },
};
