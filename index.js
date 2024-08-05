const express = require("express");
const app = express();
const fs = require("fs");
const port = 3000;

const BLOG_FILE_CARD = "blogPosts.json";
const PROJECT_FILE = "projects.json";

// middleware
app.use("/design", express.static("design"));
app.use("/jsday1", express.static("jsday1"));
app.use("/images", express.static("images"));

// Middleware to parse URL-encoded and JSON request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// menampilkan views
app.set("view engine", "hbs");
app.set("views", "views");

// routes
app.get("/contact", renderContact);
app.get("/task4&5", renderTaskFourFive);
app.get("/index", renderIndex);
app.get("/oop", renderOOP);
app.get("/indox", renderIndox);
app.get("/blog", renderBlog);
app.get("/blog-detail", renderBlogDetails);
app.post("/submit-blog", submitBlogCard);
app.post("/submit-project", submitProject);

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

function readProjects() {
  try {
    const data = fs.readFileSync(PROJECT_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading projects:", error);
    return [];
  }
}

function writeProjects(projects) {
  try {
    fs.writeFileSync(PROJECT_FILE, JSON.stringify(projects, null, 2), "utf8");
  } catch (error) {
    console.error("Error writing projects:", error);
  }
}

// handling rute
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
  const projects = readProjects();
  console.log("Projects being passed to template:", projects); // Add this line
  res.render("index", { messages, projects });
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
  res.render("blog-detail");
}

function submitProject(req, res) {
  const { name, start_date, end_date, description, technologies } = req.body;
  const image = req.file ? req.file.filename : null;
  const projects = readProjects();
  console.log("Received project data:", { name, start_date, end_date, description, technologies, image }); // Add this line
  projects.push({ name, start_date, end_date, description, technologies, image });
  writeProjects(projects);
  res.redirect("/index");
}


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
