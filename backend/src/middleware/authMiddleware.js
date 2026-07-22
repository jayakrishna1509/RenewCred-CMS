const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    // Read Authorization Header
    const authHeader = req.headers.authorization;

    // Check if token exists
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Access denied. No token provided.",
      });
    }

    // Extract Token
    const token = authHeader.split(" ")[1];

    // Verify Token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Save logged-in user information
    req.admin = decoded;

    // Continue to next middleware/controller
    next();

  } catch (error) {
  console.log(error);

  return res.status(401).json({
    success: false,
    message: error.message,
  });
}
};

module.exports = authMiddleware;