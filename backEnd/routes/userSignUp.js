import express from "express";
const UserRouter = express.Router();
import {
  getUsers,
  createUser,
  authUser,
} from "../controllers/userController.js";

UserRouter.get("/", getUsers);
UserRouter.post("/", createUser);
UserRouter.post("/auth", authUser);

export default UserRouter;
