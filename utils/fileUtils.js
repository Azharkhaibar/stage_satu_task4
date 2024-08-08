const fs = require("fs");

const BLOG_FILE_CARD = "blogPosts.json";
const PROJECT_FILE = "projects.json";

// Functions for reading and writing JSON files
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

module.exports = {
  readBlogPost,
  writeBlogPost,
  readProjects,
  writeProjects,
};
