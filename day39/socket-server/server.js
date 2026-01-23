import { Server } from "socket.io";

const io = new Server({
  cors: "*",
});

io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  if (token === "123") {
    next();
  } else {
    next(new Error("Unauthorize"));
  }
});

//Kết nối
io.on("connection", (socket) => {
  console.log("Kết nối thành công:", socket.id);

  //Lắng nghe message từ client gửi lên
  socket.on("hello-world", (data) => {
    console.log(`Thông điệp từ client gửi lên:`, data);
    //Gửi cho client vừa gửi lên (sender)
    io.in("Fullstack-K17").emit(
      "new-message",
      `Thông điệp từ server: ${Math.random()}`,
    );
  });

  //Lắng nghe message yêu cầu join room từ client
  socket.on("join-room", (room) => {
    //room --> tên room
    //Thực hiện join socket vào room
    socket.join(room);
    //Báo về cho client biết là đã join xong
    socket.emit("joined-room");
  });

  socket.on("leave-room", (room) => {
    socket.leave(room);
    socket.emit("leaved-room");
  });

  //Đóng kết nối
  socket.on("disconnect", () => {
    console.log("Đóng kết nối thành công:", socket.id);
  });
});

io.listen(3000);
