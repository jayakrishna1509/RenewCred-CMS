const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  createPage,
  getAllPages,
  getPageById,
  updatePage,
  deletePage,
} = require("../controllers/pageController");

// Protected Routes
router.post("/", authMiddleware, createPage);
router.get("/", authMiddleware, getAllPages);
router.get("/:id", authMiddleware, getPageById);
router.put("/:id", authMiddleware, updatePage);
router.delete("/:id", authMiddleware, deletePage);

module.exports = router;