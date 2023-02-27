
import express from "express";
import { getChats, createChat } from "../controllers/chatController.js";
const chatRouter = express.Router();

chatRouter.get("/", getChats)
chatRouter.post("/", createChat)

export default chatRouter