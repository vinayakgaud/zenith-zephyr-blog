import Blog from "../models/blogModel.js";

export const getHomePageHandler = async (req, res) => {
  const allBlogs = await Blog.find({}).sort({ createdAt: -1 });
  return res.render("home", {
    user: req.user,
    blogs: allBlogs,
  });
};

export const getSignupPageHandler = (req, res) => {
  return res.render("signup");
};

export const getSigninPageHandler = (req, res) => {
  return res.render("signin");
};

export const getAddBlogPageHandler = (req, res) => {
  return res.render("addBlog", {
    user: req.user,
  });
};
