import jwt from "jsonwebtoken";
import User from "../models/user.js";

// Authentication Middleware
const auth = async (req, res, next) => {
  try {
    const token =
      req.header("Authorization").replace("Bearer ", "") || req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) {
      throw new Error();
    }

    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).json({ message: "Please authenticate" });
  }
};

export default auth;
