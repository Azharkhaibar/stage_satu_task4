const express = require("express");
const app = express();
const fs = require("fs");
const mongoose = require("mongoose");
const multer = require("multer");

const port = 4000;

// Middleware untuk handling file upload
const upload = multer({ dest: "uploads/" });

// Koneksi ke MongoDB
mongoose
  .connect("mongodb://localhost:27017/dumbways")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Definisikan skema dan model Mongoose
const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nama: { type: String, required: true },
  alamat: { type: String, required: true },
  telepon: { type: String, required: true },
  email: { type: String, required: true },
  tanggal_lahir: { type: Date, required: true },
});

const userModel = mongoose.model("taskb56", userSchema);

// Middleware untuk parsing body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files
app.use("/design", express.static("design"));
app.use("/jsday1", express.static("jsday1"));
app.use("/images", express.static("images"));

// Template engine
app.set("view engine", "hbs");
app.set("views", "views");

// Routes
app.get("/contact", renderContact);
app.get("/task4&5", renderTaskFourFive);
app.get("/index", renderIndex);
app.get("/oop", renderOOP);
app.get("/indox", renderIndox);
app.get("/blog", renderBlog);
app.get("/blog-detail", renderBlogDetails);
app.post("/submit-blog", upload.single("image"), submitBlogCard);
app.post("/submit-project", upload.single("image"), submitProject);

// GET
app.get("/getUsers", async (req, res) => {
    userModel.find({}).then(function(Users) {
      res.json(Users)
    }).catch(function(err) {
      console.log(err);
      
    })
});

app.get('/', async(req, res) => {
  try {
    const messages = "Index berhasil di render"; // Define the message you want to return
    console.log(messages); // Log the message to the console
    res.json({ message: messages }); // Send the message as a JSON response
  } catch(err) {
    res.status(500).send(err);
  }
  console.log(this.Message);
  
})

const BLOG_FILE_CARD = "blogPosts.json";
const PROJECT_FILE = "projects.json";

// Fungsi untuk membaca dan menulis file JSON
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

// Handling rute
function renderIndox(req, res) {
  res.render("indox", { data: "testing" });
}

function renderTaskFourFive(req, res) {
  res.render("task4&5");
}

function renderIndex(req, res) {
  const messages = "Index berhasil di render";
  const projects = readProjects();
  console.log("Projects being passed to template:", projects);
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
  console.log("Received project data:", { name, start_date, end_date, description, technologies, image });
  projects.push({ name, start_date, end_date, description, technologies, image });
  writeProjects(projects);
  res.redirect("/index");
}

// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
