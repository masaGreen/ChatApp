import MessageModel from "../models/messageModel.js"

export const getMessages = async(req,res)=>{
    
    try {
        const messages = await MessageModel.find({"members":{$all:[req.params.senderId, req.params.recipientId]}})
      
        res.status(200).json(messages)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const createMessage = async(req,res)=>{
    try {
        const newMessage = new MessageModel(req.body)
        await newMessage.save()
        res.status(201).json(newMessage)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const deleteMessage = async(req, res)=>{
    
    try {
        await MessageModel.findByIdAndDelete(req.params.id)
        res.status(200).json("deleted")
    } catch (error) {
        
        res.status(404).json(error)
    }
}