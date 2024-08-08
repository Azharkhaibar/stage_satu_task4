const { readProjects } = require("../utils/fileUtils");

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

module.exports = {
  renderIndox,
  renderTaskFourFive,
  renderIndex,
  renderContact,
  renderOOP,
};
