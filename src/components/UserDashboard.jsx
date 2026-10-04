import React, { useState } from "react";

function UserDashboard({
  onDashboard,
  onGetToken,
  onMyQueue,
  onAppointments,
  onLogout
}) {

  const [showNotifications, setShowNotifications] = useState(false);
  const userData = JSON.parse(
  localStorage.getItem("smartQueueUser")
);

  const tokenData = JSON.parse(
    localStorage.getItem("smartQueueToken")
  );

  const [queueData, setQueueData] = useState(
  JSON.parse(localStorage.getItem("smartQueueToken"))
);

  const savedAppointments = JSON.parse(
  localStorage.getItem("smartQueueAppointments")
);

const appointmentData = Array.isArray(savedAppointments)
  ? savedAppointments
  : [];

  return (
    <div className="user-dashboard">

      {/* Sidebar */}

      <aside className="user-sidebar">

        <div className="sidebar-logo">
          SMART<span>QUEUE</span>
        </div>

        <div className="sidebar-menu">

          <button
            className="sidebar-item active"
            onClick={onDashboard}
          >
            Dashboard
          </button>

          <button
            className="sidebar-item"
            onClick={onGetToken}
          >
            Services
          </button>

          <button
            className="sidebar-item"
            onClick={onGetToken}
          >
            Get Token
          </button>

          <button
            className="sidebar-item"
            onClick={onMyQueue}
          >
            My Queue
          </button>

          <button
            className="sidebar-item"
            onClick={onMyQueue}
          >
            Live Queue
          </button>

        </div>

        <div className="sidebar-bottom">
  

  <button
    className="sidebar-item logout-sidebar"
    onClick={onLogout}
  >
    Logout
  </button>
</div>

      </aside>


      {/* Main Area */}

      <main className="user-main">

        {/* Top Bar */}

        <header className="user-topbar">

          <div className="search-box">

            <input
              type="text"
              placeholder="Search services, tokens..."
            />

          </div>


          <div className="topbar-right">

            <button
              className="notification-button"
              onClick={() =>
                setShowNotifications(!showNotifications)
              }
            >
              Notifications
            </button>

            {showNotifications && (

              <div className="notification-dropdown">

                <h4>Notifications</h4>

                <p>Your queue token is ready.</p>

                <p>
                  You will be notified when your turn is near.
                </p>

                <p>
                  Check your upcoming appointment.
                </p>

              </div>

            )}

            <button className="profile-button">
            {userData ? userData.name : "User"}
            </button>

          </div>

        </header>


        {/* Dashboard Content */}

        <div className="dashboard-content">

          {/* Welcome */}

          <section className="dashboard-welcome">

            <div>

              <h1>
                Good Morning
              </h1>

              <p>
                Welcome to Smart Queue Manager
              </p>

              <span>
                Skip the waiting. Get your digital token
                and save time.
              </span>

            </div>

            <div className="dashboard-date">

              <p>Today</p>

              <strong>
                {new Date().toLocaleDateString()}
              </strong>

            </div>

          </section>


          {/* Statistics */}

          <section className="statistics-grid">

            <div className="stat-card">

              <p>Total Tokens</p>

              <h2>124</h2>

              <span>
                Today's tokens
              </span>

            </div>


            <div className="stat-card">

              <p>People Waiting</p>

              <h2>18</h2>

              <span>
                In queue right now
              </span>

            </div>


           <div className="stat-card">

  <p>Currently Serving</p>

  <h2>
    {queueData && queueData.status === "Serving"
      ? queueData.token
      : "Not-Available"}
  </h2>

  <span>
    {queueData && queueData.status === "Serving"
      ? "Currently serving"
      : "Waiting for service"}
  </span>

</div>


            <div className="stat-card">

              <p>Avg. Wait Time</p>

              <h2>12 min</h2>

              <span>
                Estimated wait
              </span>

            </div>

          </section>


          {/* Main Dashboard Grid */}

          <section className="dashboard-main-grid">

            {/* Current Queue */}

            <div className="current-queue-card">

              <div className="card-heading">

                <div>
                  <h2>Current Queue</h2>
                  <p>Live queue information</p>
                </div>

                <button onClick={onMyQueue}>
                  View All
                </button>

              </div>


              <div className="queue-table">

                <div className="queue-table-header">

                  <span>Token No.</span>
                  <span>Service</span>
                  <span>Status</span>
                  <span>Waiting Time</span>

                </div>
{queueData ? (

  <div className="queue-row">

    <span>{queueData.token}</span>

    <span>{queueData.service}</span>

    <span
      className={
        queueData.status === "Serving"
          ? "status-serving"
          : "status-waiting"
      }
    >
      {queueData.status}
    </span>

    <span>
      {queueData.waitTime} min
    </span>

  </div>

) : (

  <div className="queue-row">

    <span>No Token</span>

    <span>-</span>

    <span className="status-waiting">
      No Active Queue
    </span>

    <span>-</span>

  </div>

)}



              </div>

            </div>


            {/* Current Token */}

            <div className="current-token-card">

              <div className="current-token-header">

                <p>Your Current Token</p>

                {tokenData ? (
                  <h2>{tokenData.token}</h2>
                ) : (
                  <h2>No Token</h2>
                )}

                <span>
                  {tokenData
                    ? tokenData.service
                    : "Get a token to join the queue"}
                </span>

              </div>


              <div className="current-token-details">

                <div>

                  <p>People Ahead</p>

                  <strong>
                    {tokenData
                      ? tokenData.peopleAhead
                      : 0}
                  </strong>

                </div>


                <div>

                  <p>Estimated Wait Time</p>

                  <strong>
                    {tokenData
                      ? `${tokenData.waitTime} min`
                      : "0 min"}
                  </strong>

                </div>

              </div>


              <button
                className="queue-status-button"
                onClick={tokenData ? onMyQueue : onGetToken}
              >
                {tokenData
                  ? "View Queue Status"
                  : "Get New Token"}
              </button>

            </div>

          </section>


          {/* Appointment */}
<section className="dashboard-appointment">
  <div>
    <h2>Upcoming Appointments</h2>

    {appointmentData.length > 0 ? (
      <div>
        {appointmentData.slice(0, 3).map((appointment, index) => (
          <p key={appointment.id || index}>
            {appointment.service} — {appointment.date} at{" "}
            {appointment.time}
          </p>
        ))}

        {appointmentData.length > 3 && (
          <p>
            + {appointmentData.length - 3} more appointments
          </p>
        )}
      </div>
    ) : (
      <p>No upcoming appointments.</p>
    )}
  </div>

  <button onClick={onAppointments}>
    Manage Appointments
  </button>
</section>
          

        </div>

      </main>

    </div>
  );
}

export default UserDashboard;