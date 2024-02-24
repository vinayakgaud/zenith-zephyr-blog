import { Router } from "express";
import {
  getHomePageHandler,
  getSignupPageHandler,
  getSigninPageHandler,
  getAddBlogPageHandler,
} from "../controllers/pageController.js";

const router = Router();
router.get("/", getHomePageHandler);
router.get("/signup", getSignupPageHandler);
router.get("/signin", getSigninPageHandler);
router.get("/addBlog", getAddBlogPageHandler);

export default router;
