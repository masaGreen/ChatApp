import express from "express"
import { getMessages, createMessage, deleteMessage } from "../controllers/messageController.js"
const messageRouter = express.Router()

messageRouter.get("/:senderId/:recipientId", getMessages)
messageRouter.post("/", createMessage)
messageRouter.delete("/:id", deleteMessage)

export default messageRouter