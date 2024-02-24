import Blog from "../models/blogModel.js";
import Comment from "../models/commentModel.js";

export const createBlogHandler = async (req, res) => {
  const { blogTitle, blogDescription } = req.body;
  const blog = await Blog.create({
    title: blogTitle,
    body: blogDescription,
    createdBy: req.user._id,
    coverImageURL: `/uploads/coverImage/${req.file.filename}`,
  });
  return res.redirect(`/blog/${blog._id}`);
};

export const viewBlogHandler = async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate("createdBy");
  const comments = await Comment.find({ blogId: blog._id }).populate(
    "createdBy"
  );
  return res.render("viewBlog", {
    user: req.user,
    blog,
    comments,
  });
};
