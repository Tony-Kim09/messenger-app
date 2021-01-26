require("dotenv").config();

const app = require("./app");
const http = require("http");
const socketio = require("socket.io");

const PORT = process.env.PORT || "3001";

const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  console.log("user connected");

  socket.on("join", (conversationInfo) => {

    socket.join(conversationInfo.id);
    socket.emit("message", { sender: "Admin", text: `You are now talking to ${conversationInfo.target}`});
  })

  socket.on("sendMessage", ({currentConversationID, msg}) => {
    io.to(currentConversationID).emit("message", msg);
  });

  socket.on("disconnect", () => {

    console.log("user disconnected");
  });
});

server.listen(PORT, () => {
  console.log("Server created on Port:", PORT);
});