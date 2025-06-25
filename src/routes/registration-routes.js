import express from "express";
import {
  register,
  getAllRegistrations,
} from "../controllers/registration-controller.js";

const router = express.Router();

router.post("/", register);

router.get("/", getAllRegistrations);

export default router;
