import express from "express";
import {
  getAllUsers,
  login,
  register,
} from "../controllers/auth-controller.js";
import authMiddleware from "../middlewares/auth-middleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/users", authMiddleware, getAllUsers);

export default router;
