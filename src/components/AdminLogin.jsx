import React, { useState } from "react";

function AdminLogin({ onLogin }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {

    const enteredEmail = email.trim().toLowerCase();
    const enteredPassword = password.trim();

    if (
      enteredEmail === "admin@gmail.com" &&
      enteredPassword === "admin123"
    ) {
      onLogin();
    } else {
      alert("Invalid admin email or password");
    }
  };

  return (
    <div className="admin-login-page">

      <div className="admin-login-card">

        <div className="admin-login-logo">
          SMART<span>QUEUE</span>
        </div>

        <h1>Admin Login</h1>

        <p>
          Login to manage the SmartQueue system
        </p>

        <div className="admin-form-group">

          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter admin email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        </div>

        <div className="admin-form-group">

          <label>Password</label>

          <div className="admin-password-field">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>

          </div>

        </div>

        <button
          className="admin-login-button"
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="admin-login-note">
          Admin access only
        </p>

      </div>

    </div>
  );
}

export default AdminLogin;