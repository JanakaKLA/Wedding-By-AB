import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Appointment.css";

function AdminAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch appointments from backend
    const fetchAppointments = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/appointment");
        setAppointments(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch appointments. Please try again.");
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  if (loading) {
    return <div>Loading appointments...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="admin-container">
      <h1>Admin - View Appointments</h1>
      <table className="appointments-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments.length > 0 ? (
            appointments.map((appointment) => (
              <tr key={appointment._id}>
                <td>{appointment.name}</td>
                <td>{appointment.email}</td>
                <td>{appointment.tno}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No appointments found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AdminAppointments;
