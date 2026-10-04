function Home() {
  return (
    <div className="home">

      {/* Navbar */}
      <nav className="home-navbar">

        <div className="home-logo">
          <span>●</span> SMARTQUEUE
        </div>

        <div className="home-nav">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
        </div>

        <div className="home-actions">
          <button className="user-btn">User</button>
          <button className="admin-btn">Admin</button>
        </div>

      </nav>


      {/* Hero Section */}
      <section className="home-hero">

        <div className="hero-content">

          <p className="hero-label">
            SMART QUEUE MANAGEMENT SYSTEM
          </p>

          <h1>
            Manage Your Queue
            <br />
            <span>Smarter & Faster</span>
          </h1>

          <p className="hero-text">
            Get digital tokens, track your queue position,
            manage appointments and reduce waiting time.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Get Started
            </button>

            <button className="outline-btn">
              Explore Services
            </button>
          </div>

        </div>


        {/* Queue Preview */}
        <div className="queue-preview">

          <div className="preview-top">
            <h3>Queue Overview</h3>
            <span>● Live</span>
          </div>

          <div className="current-token">
            <p>Currently Serving</p>
            <h2>A-106</h2>
            <small>Counter 02</small>
          </div>

          <div className="preview-stats">

            <div>
              <strong>18</strong>
              <span>Waiting</span>
            </div>

            <div>
              <strong>12m</strong>
              <span>Avg. Wait</span>
            </div>

          </div>

        </div>

      </section>


      {/* Features */}
      <section className="features" id="services">

        <div className="feature-card">
          <div className="feature-icon">🎟️</div>
          <h3>Digital Token</h3>
          <p>Get your queue token digitally without waiting in line.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">👥</div>
          <h3>Live Queue</h3>
          <p>Track your position and know when your turn is coming.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🔔</div>
          <h3>Smart Notifications</h3>
          <p>Receive updates about your token and queue status.</p>
        </div>

      </section>

    </div>
  );
}

export default Home;