import express from "express";
import path from "path";
import "dotenv/config";
import pageRouter from "./routes/pageRouter.js";
import userRouter from "./routes/userRouter.js";
import blogRouter from "./routes/blogRouter.js";
import commentRouter from "./routes/commentRouter.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { checkForAuthenticationCookie } from "./middlewares/authMiddleware.js";

const app = express();
const PORT = process.env.PORT || 3000;

mongoose
  .connect(`${process.env.DB_PATH}${process.env.DB_NAME}`)
  .then(() => console.log("MongoDB is connected"));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.static(path.resolve("./public")));

app.use("/", pageRouter);
app.use("/user", userRouter);
app.use("/blog", blogRouter);
app.use("/comment", commentRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
