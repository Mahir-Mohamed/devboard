import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    console.log("Authorization Header:", authHeader);

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Not authorized",
      });
    }

    const token = authHeader.split(" ")[1];

    console.log("Extracted Token:", token);
    console.log("JWT Secret Exists:", !!process.env.JWT_SECRET);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("Decoded Token:", decoded);

    req.user = decoded;

    next();

  } catch (error) {

    console.log("JWT ERROR:");
    console.log(error);

    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });

  }
};

export default protect;