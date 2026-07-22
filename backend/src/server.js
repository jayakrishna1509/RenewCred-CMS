const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const adminRoutes = require("./routes/adminRoutes");
const pageRoutes = require("./routes/pageRoutes");
const publicRoutes = require("./routes/publicRoutes");

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/admin", adminRoutes);
app.use("/api/pages", pageRoutes);
app.use("/api/public", publicRoutes);

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "RenewCred CMS Backend is running 🚀",
  });
});

// Port
const PORT = process.env.PORT || 5001;

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});