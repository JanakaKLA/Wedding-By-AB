import express from 'express';
import Appointment from '../models/Appointment.js';
import authMiddleware from '../middleware/auth.js';
const router = express.Router();

// POST: Add a new appointment
router.post("/", async (req, res) => {
  try {
    const { name, email, tno, date, time } = req.body;

    // Validate inputs (basic example)
    if (!name || !email || !tno || !date || !time) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const appointment = new Appointment({ name, email, tno, date, time });
    await appointment.save();

    res.status(201).json({ message: "Appointment booked successfully", appointment });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

// GET: Fetch all appointments (optional)
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

export default router;
