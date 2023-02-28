import UserModel from "../models/userModle.js";

export const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createUser = async (req, res) => {
  const user = await UserModel.findOne({ phone: req.body.phone });
  if (user) {
    return res
      .status(409)
      .json({
        message: "phone number already registered, use a different one",
      });
  }
  try {
    const result = new UserModel(req.body);

    await result.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const authUser = async (req, res) => {
  const user = await UserModel.findOne({ phone: req.body.phone });

  try {
    if (!user) {
      return res
        .status(409)
        .json({ message: "unregistered phone number, kidly signUp" });
    } else {
      return res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
