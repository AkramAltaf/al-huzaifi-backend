import Registration from "../models/registration-model.js";

// Register a new user (form submission)
export const register = async (req, res) => {
  try {
    const registration = new Registration(req.body);
    await registration.save();
    res.status(201).json({ message: "Registration successful", registration });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all registrations (optional, for admin)
export const getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find();
    res.status(200).json(registrations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
