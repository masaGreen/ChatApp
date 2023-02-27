import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    members:Array,
    message:String,
    image:String,
},{
    timestamps:true
})

const MessageModel = mongoose.model("Message", messageSchema)
export default MessageModel