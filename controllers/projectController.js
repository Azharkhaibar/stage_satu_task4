const { readProjects, writeProjects } = require("../utils/fileUtils");

function submitProject(req, res) {
  const { name, start_date, end_date, description, technologies } = req.body;
  const image = req.file ? req.file.filename : null;
  const projects = readProjects();
  console.log("Received project data:", {
    name,
    start_date,
    end_date,
    description,
    technologies,
    image,
  });
  projects.push({
    name,
    start_date,
    end_date,
    description,
    technologies,
    image,
  });
  writeProjects(projects);
  res.redirect("/index");
}

module.exports = { submitProject };
