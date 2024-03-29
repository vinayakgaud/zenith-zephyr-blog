import { Router } from "express";
import {
  createUserHandler,
  loginUserHandler,
  logoutUserHandler,
  profilePageHandler,
} from "../controllers/userController.js";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(`./public/uploads/profileImage/`));
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

const router = Router();

router.post("/signup", upload.single("profileImage"), createUserHandler);
router.post("/signin", loginUserHandler);
router.get("/logout", logoutUserHandler);
router.get("/profile", profilePageHandler);
export default router;
