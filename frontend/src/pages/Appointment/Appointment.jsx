import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Appointment.css";

function AppointmentForm() {
  const [selectedDate, setSelectedDate] = useState(null); // For date picker
  const navigate = useNavigate(); // Initialize navigate function

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      tno: "",
      time: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      tno: Yup.string().matches(/^\d+$/, "Must be a valid phone number").required("Telephone number is required"),
      time: Yup.string().required("Time is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const data = {
          ...values,
          date: selectedDate ? selectedDate.toISOString().split("T")[0] : null,
        };

        if (!data.date) {
          toast.error("Date is required!");
          return;
        }

        await axios.post("http://localhost:4000/api/appointment", data, {
          headers: { "Content-Type": "application/json" },
        });

        toast.success("Appointment booked successfully!");

        // Clear the form and redirect to home page after a short delay
        resetForm(); // Clear form values
        setSelectedDate(null); // Reset the date picker
        setTimeout(() => navigate("/"), 2000); // Redirect to the home page after 2 seconds
      } catch (error) {
        console.error("Error booking appointment:", error);
        toast.error("Failed to book the appointment. Please try again.");
      }
    },
  });

  return (
    <div className="container">
      <ToastContainer /> {/* To display toast notifications */}
      <h1>Book an Appointment</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error-message">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error-message">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="tno">Telephone Number:</label>
          <input
            id="tno"
            type="tel"
            name="tno"
            value={formik.values.tno}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.tno && formik.errors.tno ? (
            <div className="error-message">{formik.errors.tno}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <DatePicker
            id="date"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="Select a date"
            className="date-picker"
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            id="time"
            type="time"
            name="time"
            value={formik.values.time}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.time && formik.errors.time ? (
            <div className="error-message">{formik.errors.time}</div>
          ) : null}
        </div>
        <button type="submit" className="submit-btn">
          Book Appointment
        </button>
      </form>
    </div>
  );
}

export default AppointmentForm;
