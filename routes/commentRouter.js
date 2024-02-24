import { Router } from "express";
import { createCommentHandler } from "../controllers/commentController.js";

const router = Router();

router.post("/:blogId", createCommentHandler);

export default router;
