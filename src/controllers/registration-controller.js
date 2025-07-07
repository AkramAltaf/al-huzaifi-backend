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

// Delete a registration by ID
export const deleteRegistration = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Registration.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: "Registration not found" });
    }
    res.status(200).json({ message: "Registration deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get registration details by ID
export const getRegistrationById = async (req, res) => {
  try {
    const { id } = req.params;
    const registration = await Registration.findById(id);
    if (!registration) {
      return res.status(404).json({ error: "Registration not found" });
    }
    res.status(200).json(registration);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
