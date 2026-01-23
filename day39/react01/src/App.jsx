import { useState } from "react";
import { useEffect } from "react";
import { io } from "socket.io-client";
const socket = io("ws://localhost:3000", {
  auth: {
    token: "123",
  },
});
export default function App() {
  const [message, setMessage] = useState("");
  const [isJoin, setIsJoin] = useState(false);
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Client đã kết tới Socket Server");
    });
    socket.on("disconnect", () => {
      console.log("Client đã đóng kết Server Socket");
    });
    socket.on("new-message", (data) => {
      setMessage(data);
    });
    socket.on("joined-room", () => {
      setIsJoin(true);
    });
    socket.on("leaved-room", () => {
      setIsJoin(false);
    });
    socket.on("connect_error", (err) => {
      console.log(err.message); // prints the message associated with the error
    });
  }, []);
  const handleClick = () => {
    //Gửi thông điệp lên server
    socket.emit("hello-world", "Xin chào back-end");
  };
  const handleJoinAndLeave = () => {
    socket.emit(isJoin ? "leave-room" : "join-room", "Fullstack-K17");
  };
  return (
    <div>
      <h1>Socket</h1>
      <div>
        <button onClick={handleJoinAndLeave}>
          {isJoin ? "Leave Room" : "Join Room"}
        </button>
      </div>
      <hr />
      {message && <h2>{message}</h2>}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
