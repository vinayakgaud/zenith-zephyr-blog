import { Router } from "express";
import {
  createBlogHandler,
  viewBlogHandler,
} from "../controllers/blogController.js";
createBlogHandler;
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(`./public/uploads/coverImage/`));
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

const router = Router();

router.post("/addBlog", upload.single("coverImage"), createBlogHandler);
router.get("/:id", viewBlogHandler);

export default router;
