import React, { useState } from "react";

function GetToken({ onBack }) {

  const [service, setService] = useState("");
  const [token, setToken] = useState("");

  const getToken = () => {

    if (!service) {
      alert("Please select a service");
      return;
    }

    const number = Math.floor(Math.random() * 50) + 1;
    const newToken = "A-" + number;

    setToken(newToken);

    const queueData = {
      service: service,
      token: newToken,
      status: "Waiting",
      peopleAhead: 18,
      waitTime: 15
    };

    localStorage.setItem(
      "smartQueueToken",
      JSON.stringify(queueData)
    );
  };

  return (
    <div className="token-page">

      <div className="token-container">

        <div className="page-header">

          <p className="page-label">
            SMART QUEUE MANAGEMENT
          </p>

          <h1>
            Get Your Digital Token
          </h1>

          <p>
            Select a service and generate your token
            without waiting in a physical queue.
          </p>

        </div>


        <div className="token-card">

          <h2>Select a Service</h2>

          <p>
            Choose the service you want to access.
          </p>

          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
          >

            <option value="">
              Select Service
            </option>

            <option value="Banking">
              Banking
            </option>

            <option value="Customer Service">
              Customer Service
            </option>

            <option value="Document Service">
              Document Service
            </option>

            <option value="Enquiry">
              Enquiry
            </option>

          </select>


          <button
            className="generate-token-btn"
            onClick={getToken}
          >
            Generate Token
          </button>


          {token && (

            <div className="token-result">

              <p>Your Token Number</p>

              <h2>{token}</h2>

              <div className="token-details">

                <div>
                  <span>Service</span>
                  <strong>{service}</strong>
                </div>

                <div>
                  <span>Status</span>
                  <strong>Waiting</strong>
                </div>

                <div>
                  <span>People Ahead</span>
                  <strong>18</strong>
                </div>

                <div>
                  <span>Estimated Wait</span>
                  <strong>15 min</strong>
                </div>

              </div>

              <p className="token-message">
                Please wait for your turn. You can check
                your queue status from My Queue.
              </p>

            </div>

          )}

        </div>


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

export default GetToken;