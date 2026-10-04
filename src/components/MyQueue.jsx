import React, { useState } from "react";

function MyQueue({ onBack }) {

  const [queueData, setQueueData] = useState(
    JSON.parse(localStorage.getItem("smartQueueToken"))
  );

  const refreshQueue = () => {

    const data = JSON.parse(
      localStorage.getItem("smartQueueToken")
    );

    setQueueData(data);
  };

  const cancelToken = () => {

    const confirmCancel = window.confirm(
      "Are you sure you want to cancel your token?"
    );

    if (!confirmCancel) {
      return;
    }

    localStorage.removeItem("smartQueueToken");

    setQueueData(null);
  };

  return (
    <div className="queue-page">

      <div className="queue-container">

        <div className="queue-header">

          <p>
            SMART QUEUE MANAGEMENT
          </p>

          <h1>
            My Queue
          </h1>

          <span>
            Track your current token and queue status.
          </span>

        </div>


        {queueData ? (

          <div className="queue-status-card">

            <div className="queue-token">

              <p>
                Your Token
              </p>

              <h2>
                {queueData.token}
              </h2>

              <span>
                {queueData.service}
              </span>

            </div>


            <div className="queue-details">

              <div>

                <p>
                  Status
                </p>

                <strong>
                  {queueData.status || "Waiting"}
                </strong>

              </div>


              <div>

                <p>
                  People Ahead
                </p>

                <strong>
                  {queueData.peopleAhead}
                </strong>

              </div>


              <div>

                <p>
                  Estimated Wait
                </p>

                <strong>
                  {queueData.waitTime} min
                </strong>

              </div>

            </div>


            <div className="queue-actions">

              <button
                className="refresh-button"
                onClick={refreshQueue}
              >
                Refresh Queue
              </button>


              {queueData.status !== "Completed" && (

                <button
                  className="cancel-button"
                  onClick={cancelToken}
                >
                  Cancel Token
                </button>

              )}

            </div>

          </div>

        ) : (

          <div className="empty-queue-card">

            <h2>
              No Active Token
            </h2>

            <p>
              You don't have an active queue token.
              Get a token to join the queue.
            </p>

          </div>

        )}


        {/* Bottom Footer */}

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

export default MyQueue;