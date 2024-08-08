const express = require("express");
const path = require("path");
const hbs = require("hbs");
const mongoose = require("mongoose");
const upload = require("./middleware/upload"); // Adjust the path as needed

const app = express();
const port = 4000;

// Connect to MongoDB
const mongoUrl = "mongodb://127.0.0.1:27017/webbaju";
mongoose
  .connect(mongoUrl, {
    serverSelectionTimeoutMS: 10000,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

// Set up Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views')); // Adjust the path as needed

// Middleware for parsing body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files
app.use("/design", express.static("design"));
app.use("/jsday1", express.static("jsday1"));
app.use("/images", express.static("images"));
app.use("/uploads", express.static("uploads"));

// Routes
const blogRoutes = require("./routes/blogRoutes"); // Adjust path as needed
app.use("/blog", blogRoutes);

app.get("/", (req, res) => {
  res.render("index", { message: "Index berhasil di render" });
});

app.get('/blog', (req,res) => {
  res.render('blog')
})

app.get('/index', (req, res) => {
  res.render('index')
})

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/task4&5", (req, res) => {
  res.render("task4&5");
});

app.get("/oop", (req, res) => {
  res.render("oop");
});

app.get("/indox", (req, res) => {
  res.render("indox", { data: "testing" });
});

// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
