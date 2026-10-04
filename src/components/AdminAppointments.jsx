
import React, { useState } from "react";

function AdminAppointments({ onBack }) {
  const getAppointments = () => {
    const saved = JSON.parse(
      localStorage.getItem("smartQueueAppointments")
    );

    return Array.isArray(saved) ? saved : [];
  };

  const [appointments, setAppointments] = useState(getAppointments());

  const refreshAppointments = () => {
    const data = getAppointments();
    setAppointments(data);
  };

  const cancelAppointment = (id) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this appointment?"
    );

    if (!confirmCancel) return;

    const updatedAppointments = appointments.filter(
      (appointment) => appointment.id !== id
    );

    setAppointments(updatedAppointments);

    localStorage.setItem(
      "smartQueueAppointments",
      JSON.stringify(updatedAppointments)
    );
  };

  return (
    <div className="admin-page">
      <h2>Manage Appointments</h2>

      <p>View and manage user appointments.</p>

      <button onClick={refreshAppointments}>
        Refresh Appointments
      </button>

      <div className="appointment-table">
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {appointments.length > 0 ? (
              appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>{appointment.service}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.status || "Confirmed"}</td>

                  <td>
                    <button
                      onClick={() =>
                        cancelAppointment(appointment.id)
                      }
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">
                  No appointments available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="admin-page-footer">
        <button
          className="admin-back-button"
          onClick={onBack}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default AdminAppointments;
