import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './login.css'; // Import CSS file

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin() {
    if(!email || !password){
        alert("fill the form")
    }else{

    
    const result = await fetch("https://68876f3b071f195ca980bd39.mockapi.io/users");
    const response = await result.json();

    const data = response.find(item => item.myEmail === email && item.myPassword === password);
    
    if (data) {
      alert("Login successful");
      navigate("/home");
    } else {
      alert("Failed to login");
      setEmail("")
      setPassword("")
    }
  }
}

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login to Your Account</h2>

        <label>Email</label>
        <input
          type="text"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
