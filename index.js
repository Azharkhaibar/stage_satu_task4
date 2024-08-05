const express = require("express");
const app = express();
const fs = require("fs");
const port = 3000;

const BLOG_FILE_CARD = "blogPosts.json";

function readBlogPost() {
  try {
    const dataBlog = fs.readFileSync(BLOG_FILE_CARD, "utf8");
    return JSON.parse(dataBlog);
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return [];
  }
}

function writeBlogPost(posts) {
  try {
    fs.writeFileSync(BLOG_FILE_CARD, JSON.stringify(posts, null, 2), "utf8");
  } catch (error) {
    console.error("Error writing blog posts:", error);
  }
}

// Middleware to serve static files
app.use("/design", express.static("design"));
app.use("/jsday1", express.static("jsday1"));
app.use("/images", express.static("images"));

// Middleware to parse URL-encoded and JSON request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting up the view engine
app.set("view engine", "hbs");
app.set("views", "views");

// Routes
app.get("/contact", renderContact);
app.get("/task4&5", renderTaskFourFive);
app.get("/index", renderIndex);
app.get("/oop", renderOOP);
app.get("/indox", renderIndox);
app.get("/blog", renderBlog);
app.get('/blog-detail', renderBlogDetails);
app.post("/submit-blog", submitBlogCard);

// Route handlers
function renderIndox(req, res) {
  res.render("indox", {
    data: "testing",
  });
}

function renderTaskFourFive(req, res) {
  res.render("task4&5");
}

function renderIndex(req, res) {
  const messages = "Index berhasil di render";
  res.render("index", { messages });
  console.log(messages);
}

function renderContact(req, res) {
  res.render("contact");
}

function renderOOP(req, res) {
  try {
    res.render("oop");
  } catch (err) {
    console.log("Render OOP gagal");
  }
}

function renderBlog(req, res) {
  const blogPosts = readBlogPost();
  res.render("blog", { blogPosts });
}

function submitBlogCard(req, res) {
  const { title, content } = req.body;
  const image = req.file ? req.file.filename : null;
  const blogPosts = readBlogPost(); 
  blogPosts.push({ title, content, image });
  writeBlogPost(blogPosts); 
  res.redirect("/blog");
}

function renderBlogDetails(req, res) {
    res.render('blog-detail');
}


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
