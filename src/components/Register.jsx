import { useState } from "react";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

const handleRegister = (e) => {
  e.preventDefault();

  const user = {
    name: name,
    email: email,
    phone: phone,
    password: password
  };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Registration successful!");

  console.log("User registered:", user);
};
  return (
    <div className="register">

      <div className="register-box">

        <h1>Create Account</h1>
        <p>Register to use Smart Queue Manager</p>

        <form onSubmit={handleRegister}>

          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Phone</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default Register;