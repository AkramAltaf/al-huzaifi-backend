import express from "express";
import {
  register,
  getAllRegistrations,
  deleteRegistration,
} from "../controllers/registration-controller.js";

const router = express.Router();

router.post("/", register);

router.get("/", getAllRegistrations);

router.delete("/:id", deleteRegistration);

export default router;
