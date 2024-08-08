const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { submitProject } = require("../controllers/projectController");

router.post("/submit", upload.single("image"), submitProject);

module.exports = router;
