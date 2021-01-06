require("dotenv").config();

const app = require("./app");
const http = require("http");
const socketio = require("socket.io");

const PORT = process.env.PORT || "3001";

const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  console.log("user connected");

  socket.on("sendMessage", (msg) => {
    console.log("Message: ", msg);
    io.emit("message", msg);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(PORT, () => {
  console.log("Server created on Port:", PORT);
});