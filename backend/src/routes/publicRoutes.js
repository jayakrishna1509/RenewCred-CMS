const express = require("express");
const router = express.Router();

const {
  getPublishedPages,
  getPageBySlug,
} = require("../controllers/publicController");

router.get("/pages", getPublishedPages);
router.get("/pages/:slug", getPageBySlug);

module.exports = router;