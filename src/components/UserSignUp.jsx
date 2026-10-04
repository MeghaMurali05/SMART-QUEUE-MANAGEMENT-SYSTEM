import React, { useState } from "react";

function UserSignup({ onLogin }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = () => {

    if (!name || !email || !phone || !password) {
      alert("Please fill all fields");
      return;
    }

    const user = {
      name,
      email,
      phone,
      password
    };

    localStorage.setItem(
      "smartQueueUser",
      JSON.stringify(user)
    );

    alert("Account created successfully!");

    onLogin();
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <h2>Create Account</h2>

        <p>Register for SmartQueue</p>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <div className="password-field">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
          >
            {showPassword ? "Hide" : "Show"}
          </button>

        </div>

        <button
          className="login-btn"
          onClick={handleSignup}
        >
          Create Account
        </button>

        <p className="login-note">

          Already have an account?

          <span onClick={onLogin}>
            {" "}Login
          </span>

        </p>

      </div>

    </div>
  );
}

export default UserSignup;