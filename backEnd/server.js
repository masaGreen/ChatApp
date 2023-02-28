import express from "express";
import dbConnection from "./dbConnection.js";
import UserRouter from "./routes/userSignUp.js";
import chatRouter from "./routes/chat.js";
import messageRouter from "./routes/message.js";
import cors from "cors";
import multer from "multer";
import { Server } from "socket.io";

const app = express();


dbConnection;
//middleware
app.use(
  cors()
);
app.use(express.json());
app.use("/images", express.static("images"));
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage });

//routes
app.use("/chat", chatRouter);
app.use("/user", UserRouter);
app.use("/message", messageRouter);
app.post("/imageUpload", upload.single("image"), (req, res) => {
  res.status(200).json("successful upload");
});

app.listen(3500, () => {
  console.log("server running at post 3500");
});

const socketio = new Server(3800, {
  cors: {
    origin: "https://chat-app-client-pi-mauve.vercel.app",
  }
});

let users = [];
function checkUser(userId, socketId) {
  const newUser = users.find((user) => user.userId === userId);
  if (newUser) return;
  users.push({ socketId, userId });
}

function findUser(id) {
  const socketUser = users.find((user) => user.userId === id);
  return socketUser;
}
function removeUser(id) {
  users = users.filter((user) => user.socketId !== id);
  return users;
}

socketio.on("connection", (socket) => {
  socket.on("addUser", (user) => {
    checkUser(user, socket.id);

    socketio.emit("getUsers", users);
  });

  socket.on("message", (data) => {
    const myUser = findUser(data.members[1]);

    if (myUser) {
      socketio.to(myUser.socketId).emit("newmess", data);
    }
  });

  socket.on("disconnect", () => {
    removeUser(socket.id);
    socketio.emit("leftUsers", users);
  });
});
