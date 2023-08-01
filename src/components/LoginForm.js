// LoginForm.js

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./LoginForm.css";

const LoginForm = () => {
    const navigator = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
      navigator('/HomePage');
  };

  return (
    <div className="login-form-container">
          <form onSubmit={handleSubmit}>
              <h1>Login Page</h1>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="button" onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
