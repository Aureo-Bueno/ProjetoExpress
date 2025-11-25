import express from "express";
import { userController } from "../controllers/user-controller";

const userRouter = express.Router();

userRouter.get("/", userController.getUsers.bind(userController));
userRouter.post("/", userController.createUser.bind(userController));
userRouter.get("/:id", userController.getUser.bind(userController));
userRouter.delete("/:id", userController.deleteUser.bind(userController));
userRouter.put("/:id", userController.updateUser.bind(userController));
export default userRouter;
