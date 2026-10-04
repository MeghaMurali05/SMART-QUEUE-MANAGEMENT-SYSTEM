import React, { useState } from "react";

function AdminQueue({ onBack }) {

  const [tokenData, setTokenData] = useState(
    JSON.parse(localStorage.getItem("smartQueueToken")) || null
  );

  const [waiting, setWaiting] = useState(18);
  const [completed, setCompleted] = useState(0);

  const refreshQueue = () => {

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

    if (waiting > 0) {
      setWaiting(waiting - 1);
    }

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

    setCompleted(completed + 1);

  };


  return (
    <div className="admin-page">

      <h2>Queue Management</h2>

      <p>
        Manage the current queue and token status.
      </p>


      {/* Queue Statistics */}

      <div className="admin-cards">

        <div className="admin-card">

          <p>People Waiting</p>

          <h2>
            {waiting}
          </h2>

        </div>


        <div className="admin-card">

          <p>Currently Serving</p>

          <h2>
            {tokenData && tokenData.status === "Serving"
              ? tokenData.token
              : "None"}
          </h2>

        </div>


        <div className="admin-card">

          <p>Completed Tokens</p>

          <h2>
            {completed}
          </h2>

        </div>

      </div>


      {/* Refresh */}

      <button onClick={refreshQueue}>
        Refresh Queue
      </button>


      {/* Current Token */}

      <div className="admin-section">

        <h2>
          Current Token
        </h2>


        {tokenData ? (

          <div className="admin-current-token">

            <div>

              <p>Token Number</p>

              <h2>
                {tokenData.token}
              </h2>

            </div>


            <div>

              <p>Service</p>

              <strong>
                {tokenData.service}
              </strong>

            </div>


            <div>

              <p>Status</p>

              <strong>
                {tokenData.status}
              </strong>

            </div>


            <div>

              <p>Estimated Wait</p>

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


      {/* Queue Actions */}

      <div className="admin-section">

        <h2>
          Queue Actions
        </h2>


        <div className="admin-actions">

          <button
            onClick={serveToken}
            disabled={
              !tokenData ||
              tokenData.status === "Serving" ||
              tokenData.status === "Completed"
            }
          >
            Serve Token
          </button>


          <button
            onClick={completeToken}
            disabled={
              !tokenData ||
              tokenData.status !== "Serving"
            }
          >
            Complete Token
          </button>

        </div>

      </div>


      {/* Back */}

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

export default AdminQueue;