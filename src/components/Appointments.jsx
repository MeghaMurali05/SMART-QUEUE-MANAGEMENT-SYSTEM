import React, { useState } from "react";

function Appointments({ onBack }) {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const getAppointments = () => {
    const saved = JSON.parse(
      localStorage.getItem("smartQueueAppointments")
    );

    if (Array.isArray(saved)) {
      return saved;
    }

    // Convert old single appointment data if it exists
    const oldAppointment = JSON.parse(
      localStorage.getItem("smartQueueAppointment")
    );

    return oldAppointment ? [oldAppointment] : [];
  };

  const [appointments, setAppointments] = useState(getAppointments());

  const bookAppointment = () => {
    if (!service || !date || !time) {
      alert("Please fill all fields");
      return;
    }

    const newAppointment = {
      id: Date.now(),
      service,
      date,
      time,
      status: "Confirmed"
    };

    const updatedAppointments = [
      ...appointments,
      newAppointment
    ];

    setAppointments(updatedAppointments);

    localStorage.setItem(
      "smartQueueAppointments",
      JSON.stringify(updatedAppointments)
    );

    setService("");
    setDate("");
    setTime("");

    alert("Appointment booked successfully!");
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
    <div className="appointment-page">
      <div className="appointment-container">

        <div className="appointment-header">
          <p>SMART QUEUE MANAGEMENT</p>
          <h1>Appointments</h1>
          <span>Book and manage your service appointments.</span>
        </div>

        {/* BOOK APPOINTMENT */}
        <div className="appointment-card">
          <h2>Book Appointment</h2>
          <p>Select your service, date and preferred time.</p>

          <div className="form-group">
            <label>Service</label>

            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="">Select Service</option>
              <option value="Banking">Banking</option>
              <option value="Customer Service">
                Customer Service
              </option>
              <option value="Document Service">
                Document Service
              </option>
              <option value="Enquiry">Enquiry</option>
            </select>
          </div>

          <div className="form-group">
            <label>Date</label>

            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Time</label>

            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <button
            className="book-button"
            onClick={bookAppointment}
          >
            Add Appointment
          </button>
        </div>

        {/* EXISTING APPOINTMENTS */}
        <div className="appointment-card">
          <h2>My Appointments</h2>

          {appointments.length === 0 ? (
            <p>No appointments booked yet.</p>
          ) : (
            appointments.map((appointment, index) => (
              <div
                className="appointment-details"
                key={appointment.id || index}
              >
                <div>
                  <span>Service</span>
                  <strong>{appointment.service}</strong>
                </div>

                <div>
                  <span>Date</span>
                  <strong>{appointment.date}</strong>
                </div>

                <div>
                  <span>Time</span>
                  <strong>{appointment.time}</strong>
                </div>

                <div>
                  <span>Status</span>
                  <strong>Confirmed</strong>
                </div>

                <button
                  className="cancel-button"
                  onClick={() =>
                    cancelAppointment(appointment.id)
                  }
                >
                  Cancel Appointment
                </button>
              </div>
            ))
          )}
        </div>

        <div className="inner-page-footer">
          <button
            className="back-button"
            onClick={onBack}
          >
            Back to Dashboard
          </button>
        </div>

      </div>
    </div>
  );
}

export default Appointments;