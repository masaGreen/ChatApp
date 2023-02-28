import ChatModel from "../models/chatModel.js";

export const getChats = async (req, res) => {
  try {
    const result = await ChatModel.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createChat = async (req, res) => {
  try {
    const newChat = new ChatModel(req.body);
    await newChat.save();
    res.status(201).json(newChat);
  } catch (error) {
    res.status(500).json(error);
  }
};
