import React, { useState } from "react";

function UserLogin({ onSignup, onLogin }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

const handleLogin = () => {
  const user = JSON.parse(localStorage.getItem("smartQueueUser"));

  if (!user) {
    alert("No account found. Please create an account first.");
    return;
  }

  const enteredEmail = email.trim().toLowerCase();
  const savedEmail = user.email.trim().toLowerCase();

  if (enteredEmail === savedEmail && password === user.password) {
    onLogin();
  } else {
    alert("Invalid email or password");
  }
};
  return (
    <div className="login-page">

      <div className="login-card">

        <h2>Welcome Back</h2>

        <p>
          Login to your SmartQueue account
        </p>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />


        <div className="password-field">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
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


        <button
          className="login-btn"
          onClick={handleLogin}
        >
          Login
        </button>


        <p className="login-note">
          New user?

          <span onClick={onSignup}>
            {" "}Sign Up
          </span>

        </p>

      </div>

    </div>
  );
}

export default UserLogin;