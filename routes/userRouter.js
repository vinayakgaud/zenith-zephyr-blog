import { Router } from "express";
import {
  createUserHandler,
  loginUserHandler,
  logoutUserHandler,
} from "../controllers/userController.js";
const router = Router();
router.post("/signup", createUserHandler);
router.post("/signin", loginUserHandler);
router.get("/logout", logoutUserHandler);
export default router;
