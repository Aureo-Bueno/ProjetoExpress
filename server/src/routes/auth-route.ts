import express from "express";
import { authController } from "../controllers/auth-controller";

const authRouter = express.Router();

authRouter.post("/login", authController.login.bind(authController));
authRouter.post("/logout", authController.logout.bind(authController));
authRouter.get("/me", authController.getCurrentUser.bind(authController));

export default authRouter;
