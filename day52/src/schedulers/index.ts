// import { QUEUEJOB } from "../constants/queue.constant";
// import { emailQueue } from "../queue/email.queue";
import nodeCron from "node-cron";
import { redisPub } from "../utils/redis";
// emailQueue.upsertJobScheduler(
//   "email-notice-scheduler",
//   {
//     pattern: "*/5 * * * * *", //5 giây chạy 1 lần
//     //Nhận chuỗi cấu hình cronjob (Phần mềm chạy theo lịch của Linux)
//   },
//   {
//     name: QUEUEJOB.LOGIN_NOTICE,
//   },
// );

//Có 1 số công việc mất ít thời gian nhưng cần lặp lại

nodeCron.schedule("*/5 * * * * *", () => {
  console.log("Đang xử lý công việc");
  redisPub.publish("notification", `Tin nhắn: ${Math.random()}`);
});
