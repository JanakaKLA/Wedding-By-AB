import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3 },
  email: { type: String, required: true },
  tno: { type: String, required: true, match: /^\d+$/ },
  date: { type: String, required: true },
  time: { type: String, required: true },
});

export default mongoose.model("Appointment", appointmentSchema);
