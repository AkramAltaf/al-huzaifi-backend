import express from "express";
import {
  register,
  getAllRegistrations,
  deleteRegistration,
  getRegistrationById,
} from "../controllers/registration-controller.js";

const router = express.Router();

router.post("/", register);

router.get("/", getAllRegistrations);

router.get("/:id", getRegistrationById);

router.delete("/:id", deleteRegistration);

export default router;
