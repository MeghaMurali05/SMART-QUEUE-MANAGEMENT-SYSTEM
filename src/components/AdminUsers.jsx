import React, { useState } from "react";

function AdminUsers({ onBack }) {

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("smartQueueUser")) || null
  );

  const refreshUser = () => {

    const data = JSON.parse(
      localStorage.getItem("smartQueueUser")
    );

    setUser(data);
  };

  return (
    <div className="admin-page">

      <h2>Manage Users</h2>

      <p>
        View registered SmartQueue users.
      </p>

      <button onClick={refreshUser}>
        Refresh Users
      </button>


      <div className="user-table">

        <table>

          <thead>

            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
            </tr>

          </thead>


          <tbody>

            {user ? (

              <tr>

                <td>
                  {user.name}
                </td>

                <td>
                  {user.email}
                </td>

                <td>
                  {user.phone}
                </td>

                <td>
                  Active
                </td>

              </tr>

            ) : (

              <tr>

                <td colSpan="4">
                  No users available
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

export default AdminUsers;