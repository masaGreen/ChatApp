import express from "express";
import dbConnection from "./dbConnection.js";
import UserRouter from "./routes/userSignUp.js";
import chatRouter from "./routes/chat.js";
import messageRouter from "./routes/message.js";
import cors from "cors";
import multer from "multer";


const app = express();


dbConnection;
//middleware
app.use(
  cors({origin:"http://localhost:3000"})
  //  cors({origin:"https://chat-app-client-pi-mauve.vercel.app"})
);

app.use(express.json());
app.use("/images", express.static("images"));

// to be worked on for cloud storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images")
    
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

