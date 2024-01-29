import { Router } from "express";
import {
  getHomePageHandler,
  getSignupPageHandler,
  getSigninPageHandler,
} from "../controllers/pageController.js";

const router = Router();
router.get("/", getHomePageHandler);
router.get("/signup", getSignupPageHandler);
router.get("/signin", getSigninPageHandler);

export default router;
