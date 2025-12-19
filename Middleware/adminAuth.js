import jwt from "jsonwebtoken";

export const adminProtect = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json("No token provided");
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "admin") {
      return res.status(403).json("Admin access only");
    }

    req.adminId = decoded.id;
    next();
  } catch (error) {
    console.error("ADMIN AUTH ERROR:", error.message);
    res.status(401).json("Unauthorized");
  }
};
