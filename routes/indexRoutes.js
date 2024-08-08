const express = require("express");
const router = express.Router();
const { renderIndex, renderContact, renderTaskFourFive, renderOOP, renderIndox } = require("../controllers/indexController");

router.get("/", renderIndex);
router.get("/contact", renderContact);
router.get("/task4&5", renderTaskFourFive);
router.get("/oop", renderOOP);
router.get("/indox", renderIndox);

module.exports = router;
