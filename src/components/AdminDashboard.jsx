import React from "react";

function AdminDashboard({
  onTokens,
  onUsers,
  onAppointments,
  onQueue,
  onLogout
}) {

  const tokenData = JSON.parse(
    localStorage.getItem("smartQueueToken")
  );

  const userData = JSON.parse(
    localStorage.getItem("smartQueueUser")
  );

  const appointmentData = JSON.parse(
    localStorage.getItem("smartQueueAppointment")
  );

  return (
    <div className="admin-layout">

      {/* Sidebar */}

      <aside className="admin-sidebar">

        <div className="admin-logo">
          SMART<span>QUEUE</span>
        </div>

        <div className="admin-menu">

          <button className="active">
            Dashboard
          </button>

          <button onClick={onTokens}>
            Manage Tokens
          </button>

          <button onClick={onUsers}>
            Users
          </button>

          <button onClick={onAppointments}>
            Appointments
          </button>

          <button onClick={onQueue}>
            Queue Management
          </button>

        </div>

        <button
          className="admin-logout"
          onClick={onLogout}
        >
          Logout
        </button>

      </aside>


      {/* Main Content */}

      <main className="admin-main">

        <div className="admin-header">

          <div>

            <h1>
              Admin Dashboard
            </h1>

            <p>
              Welcome to SmartQueue Admin Panel
            </p>

          </div>

          <div className="admin-profile">
            Admin
          </div>

        </div>


        {/* Statistics */}

        <div className="admin-cards">

          <div className="admin-card">

            <p>
              Total Tokens
            </p>

            <h2>
              {tokenData ? "1" : "0"}
            </h2>

            <span>
              Current token records
            </span>

          </div>


          <div className="admin-card">

            <p>
              People Waiting
            </p>

            <h2>
              {tokenData &&
              tokenData.status === "Waiting"
                ? tokenData.peopleAhead
                : "0"}
            </h2>

            <span>
              Currently waiting
            </span>

          </div>


          <div className="admin-card">

            <p>
              Appointments
            </p>

            <h2>
              {appointmentData ? "1" : "0"}
            </h2>

            <span>
              Scheduled appointments
            </span>

          </div>


          <div className="admin-card">

            <p>
              Registered Users
            </p>

            <h2>
              {userData ? "1" : "0"}
            </h2>

            <span>
              Registered users
            </span>

          </div>

        </div>


        {/* Current Token */}

        <div className="admin-section">

          <h2>
            Current Queue Status
          </h2>

          {tokenData ? (

            <div className="admin-current-token">

              <div>
                <p>
                  Token Number
                </p>

                <h2>
                  {tokenData.token}
                </h2>
              </div>

              <div>
                <p>
                  Service
                </p>

                <strong>
                  {tokenData.service}
                </strong>
              </div>

              <div>
                <p>
                  Status
                </p>

                <strong>
                  {tokenData.status}
                </strong>
              </div>

              <div>
                <p>
                  Estimated Wait
                </p>

                <strong>
                  {tokenData.waitTime} min
                </strong>
              </div>

            </div>

          ) : (

            <p>
              No active token available.
            </p>

          )}

        </div>


        {/* Quick Actions */}

        <div className="admin-section">

          <h2>
            Quick Actions
          </h2>

          <div className="admin-actions">

            <button onClick={onTokens}>
              Manage Tokens
            </button>

            <button onClick={onUsers}>
              Manage Users
            </button>

            <button onClick={onAppointments}>
              Manage Appointments
            </button>

            <button onClick={onQueue}>
              Manage Queue
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default AdminDashboard;