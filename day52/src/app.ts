import express from "express";
import "dotenv/config";
import indexRouter from "./routes/index.route";
import { redisSub } from "./utils/redis";
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(indexRouter);
redisSub.subscribe("notification", (message: string) => {
  console.log(message);
});
app.listen(PORT, () => {
  console.log(`Server running with Port: ${PORT}`);
});
