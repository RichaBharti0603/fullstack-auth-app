import React, { useState } from "react";
import axios from "axios";
import "./LoginPage.css"; // Style file

const LoginPage = () => {
  const [uid, setUid] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        uid,
        password,
      });

      setMessage(res.data.message);
      // Store user or redirect as needed
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Welcome back!</h2>

        <input
          type="text"
          placeholder="UID"
          value={uid}
          onChange={(e) => setUid(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
