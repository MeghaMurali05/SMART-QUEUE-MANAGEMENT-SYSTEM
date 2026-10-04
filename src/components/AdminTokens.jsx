
import React, { useState } from "react";

function AdminTokens({ onBack }) {

  const [tokenData, setTokenData] = useState(
    JSON.parse(localStorage.getItem("smartQueueToken")) || null
  );

  const refreshToken = () => {

    const data = JSON.parse(
      localStorage.getItem("smartQueueToken")
    );

    setTokenData(data);
  };


  const serveToken = () => {

    if (!tokenData) {
      alert("No token available");
      return;
    }

    if (tokenData.status === "Completed") {
      alert("This token is already completed");
      return;
    }

    const updatedData = {
      ...tokenData,
      status: "Serving"
    };

    localStorage.setItem(
      "smartQueueToken",
      JSON.stringify(updatedData)
    );

    setTokenData(updatedData);
  };


  const completeToken = () => {

    if (!tokenData) {
      alert("No token available");
      return;
    }

    if (tokenData.status !== "Serving") {
      alert("Serve the token first");
      return;
    }

    const updatedData = {
      ...tokenData,
      status: "Completed"
    };

    localStorage.setItem(
      "smartQueueToken",
      JSON.stringify(updatedData)
    );

    setTokenData(updatedData);
  };


  return (
    <div className="admin-page">

      <h2>Manage Tokens</h2>

      <p>
        View and manage user queue tokens.
      </p>


      <button onClick={refreshToken}>
        Refresh Tokens
      </button>


      <div className="token-table">

        <table>

          <thead>

            <tr>
              <th>Token</th>
              <th>Service</th>
              <th>Status</th>
              <th>Action</th>
            </tr>

          </thead>


          <tbody>

            {tokenData ? (

              <tr>

                <td>
                  {tokenData.token}
                </td>

                <td>
                  {tokenData.service}
                </td>

                <td>
                  {tokenData.status}
                </td>

                <td>

                  {tokenData.status === "Waiting" && (

                    <button onClick={serveToken}>
                      Serve
                    </button>

                  )}


                  {tokenData.status === "Serving" && (

                    <button onClick={completeToken}>
                      Complete
                    </button>

                  )}


                  {tokenData.status === "Completed" && (

                    <span>
                      Completed
                    </span>

                  )}

                </td>

              </tr>

            ) : (

              <tr>

                <td colSpan="4">
                  No tokens available
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

export default AdminTokens;