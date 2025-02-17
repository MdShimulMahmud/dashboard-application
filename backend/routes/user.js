import express from "express";
import {
  deleteUser,
  getAllUsers,
  login,
  register,
} from "../controllers/user.js";
import auth from "../middleware/auth.js";

const router = express.Router();
router.get("/", getAllUsers);
router.post("/register", register);
router.post("/login", login);
router.delete("/:id", auth, deleteUser);

export { router };
