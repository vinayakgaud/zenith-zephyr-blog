import User from "../models/userModel.js";
import { inputValidate, loginInputValidate } from "../utils/inputValidation.js";

export const createUserHandler = async (req, res) => {
  if (!req.body.accept) return res.send("Please accept terms and conditions");
  const { fullName, email, password } = req.body;
  const parsedPayload = inputValidate.safeParse({
    fullName,
    email,
    password,
  });
  if (!parsedPayload.success) {
    return res.render("signup", {
      err: parsedPayload.error.errors[0].message,
    });
  }
  await User.create({
    fullName,
    email,
    password,
    profileImageURL: `/uploads/profileImage/${req.file.filename}`,
  });
  return res.redirect("/");
};

export const loginUserHandler = async (req, res) => {
  const { email, password } = req.body;
  const parsedPayload = loginInputValidate.safeParse({
    email,
    password,
  });

  if (!parsedPayload.success) {
    return res.render("signin", {
      err: parsedPayload.error.errors[0].message,
    });
  }

  try {
    const userToken = await User.matchPasswordAndGenerateToken(email, password);
    if (userToken.error) {
      return res.render("signin", {
        err: userToken.error,
      });
    }
    return res.cookie("token", `Bearer ${userToken}`).redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const logoutUserHandler = (req, res) => {
  res.clearCookie("token").redirect("/");
};

export const profilePageHandler = async (req, res) => {
  console.log(req.user);
  return res.render("profilePage", {
    user: req.user,
  });
};
