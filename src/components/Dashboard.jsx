import React, { useState } from "react";

function Dashboard({ onUserClick, onAdminClick }) {

  const [tokenData] = useState(
    JSON.parse(localStorage.getItem("smartQueueToken")) || null
  );

  const currentServing =
    tokenData && tokenData.status === "Serving"
      ? tokenData.token
      : "Not Available";

  const waitingPeople =
    tokenData && tokenData.status === "Waiting"
      ? tokenData.peopleAhead
      : 0;

  const waitTime =
    tokenData
      ? `${tokenData.waitTime} min`
      : "0 min";

  return (
    <div className="home-page">

      {/* NAVBAR */}

      <nav className="home-navbar">

        <div className="home-logo">
          SMART<span>QUEUE</span>
        </div>

        <div className="home-nav-links">

          <a
            className="active"
            href="#home"
          >
            Home
          </a>

          <a href="#services">
            Services
          </a>

          <a href="#about">
            About
          </a>

        </div>

        <div className="home-nav-buttons">

          <button
            className="home-user-button"
            onClick={onUserClick}
          >
            User
          </button>

          <button
            className="home-admin-button"
            onClick={onAdminClick}
          >
            Admin
          </button>

        </div>

      </nav>


      {/* HERO */}

      <section
        id="home"
        className="home-hero"
      >

        <div className="hero-content">

          <p className="hero-label">
            SMART QUEUE MANAGEMENT SYSTEM
          </p>

          <h1>
            Manage Your Queue
            <br />
            <span>Smarter</span>
          </h1>

          <p className="hero-description">
            Skip long waiting lines, get your digital token,
            track your queue position and save your valuable time.
          </p>

          <div className="hero-buttons">

            <button
              className="start-button"
              onClick={onUserClick}
            >
              Get Started
            </button>

            <a
              className="services-button"
              href="#services"
            >
              View Services
            </a>

          </div>

        </div>


        {/* LIVE QUEUE CARD */}

        <div className="hero-queue-card">

          <div className="queue-card-heading">

            <h3>Live Queue</h3>

            <span>Live</span>

          </div>

          <div className="serving-box">

            <p>Currently Serving</p>

            <h2>
              {currentServing}
            </h2>

            <span>
              {tokenData && tokenData.status === "Serving"
                ? tokenData.service
                : "No active service"}
            </span>

          </div>

          <div className="queue-card-stats">

            <div>

              <strong>
                {waitingPeople}
              </strong>

              <p>
                Waiting
              </p>

            </div>

            <div>

              <strong>
                {waitTime}
              </strong>

              <p>
                Average Wait
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* SERVICES */}

      <section
        id="services"
        className="home-features"
      >

        <div className="feature-card">

          <div className="feature-number">
            01
          </div>

          <div>

            <h3>
              Digital Token
            </h3>

            <p>
              Get your token without standing
              in a physical queue.
            </p>

          </div>

        </div>


        <div className="feature-card">

          <div className="feature-number">
            02
          </div>

          <div>

            <h3>
              Live Queue
            </h3>

            <p>
              Track your position and know
              when your turn is coming.
            </p>

          </div>

        </div>


        <div className="feature-card">

          <div className="feature-number">
            03
          </div>

          <div>

            <h3>
              Appointments
            </h3>

            <p>
              Book your service appointment
              without waiting in line.
            </p>

          </div>

        </div>

      </section>


      {/* ABOUT */}

      <section
        id="about"
        className="home-about"
      >

        <div className="about-content">

          <p className="about-label">
            ABOUT SMARTQUEUE
          </p>

          <h2>
            A Smarter Way to
            <span> Serve</span>
          </h2>

          <p>
            SmartQueue is a modern queue management system
            designed to make your service experience faster,
            easier and more efficient.
          </p>

          <p>
            Whether it is a bank, hospital, government office
            or any service center, SmartQueue helps reduce
            waiting time and improves the overall experience.
          </p>

        </div>


        <div className="about-points">

          <div>

            <strong>
              01
            </strong>

            <h3>
              Faster Service
            </h3>

            <p>
              Reduce waiting time
            </p>

          </div>


          <div>

            <strong>
              02
            </strong>

            <h3>
              Better Experience
            </h3>

            <p>
              Simple and convenient
            </p>

          </div>


          <div>

            <strong>
              03
            </strong>

            <h3>
              Smart & Reliable
            </h3>

            <p>
              Easy queue management
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Dashboard;