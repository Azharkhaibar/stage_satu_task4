const Blog = require("../models/Blog");

async function renderBlog(req, res) {
  try {
    const blogPosts = await Blog.find();
    res.render("blog", { blogPosts });
  } catch (err) {
    console.error("Error rendering blog:", err);
    res.status(500).send("Internal Server Error");
  }
}

function renderBlogDetails(req, res) {
  res.render("blog-detail");
}

async function submitBlogPost(req, res) {
  const { title, content } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
    const blogPost = new Blog({ title, content, image });
    await blogPost.save();
    res.redirect("/blogs"); // Redirect to blog page after submission
  } catch (error) {
    console.error("Error inserting blog post:", error);
    res.status(500).send("Internal Server Error");
  }
}

async function getBlogPosts(req, res) {
  try {
    const blogPosts = await Blog.find().exec();
    res.json(blogPosts);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = {
  renderBlog,
  renderBlogDetails,
  submitBlogPost,
  getBlogPosts,
};
