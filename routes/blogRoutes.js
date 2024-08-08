const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
const upload = require("../middleware/upload");

// Route to render blog page
router.get("/blog", async (req, res) => {
  try {
    const blogPosts = await Blog.find();
    res.render("blog", { blogPosts });
  } catch (err) {
    console.error("Error rendering blog:", err);
    res.status(500).send("Internal Server Error");
  }
});

// Route to handle blog form submission
router.post("/blogs", upload.single("image"), async (req, res) => {
  const { title, content } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
    const blogPost = new Blog({ title, content, image });
    await blogPost.save();
    res.redirect("/blog"); // Redirect to blog page after submission
  } catch (error) {
    console.error("Error inserting blog post:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
