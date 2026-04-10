import { Job, Worker } from "bullmq";
import { QUEUE, QUEUEJOB } from "../constants/queue.constant";
import { redisWorkerConnection } from "../utils/bullmq";
import { sendMailTemplate } from "../utils/mail";

new Worker(
  QUEUE.EMAIL,
  async (job: Job) => {
    if (job.name === QUEUEJOB.LOGIN_NOTICE) {
      const { email, subject, name, link, otp } = job.data;
      const id = Math.random();
      console.log("Đang gửi email", id);
      //   throw Error("Gửi email bị lỗi");
      //   await sendMailTemplate(email, subject, "login-notice", {
      //     name,
      //     link,
      //     otp,
      //   });
      //   console.log("Đã gửi email", id);
    }
    //Lưu ý: Nếu không có lỗi gì? bullmq sẽ hiểu là job hoàn thành
    //Nếu có lỗi (throw) bullmq sẽ hiểu là job thất bại
  },
  {
    connection: redisWorkerConnection!,
  },
);
