import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './signup.css'; // Import the CSS file

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function hanldeSignup() {
    if(!name || !email || !password){
        alert("fill the detals")
    }else{

    
    const formData = {
      myName: name,
      myEmail: email,
      myPassword: password,
    };

    const result = await fetch("https://68876f3b071f195ca980bd39.mockapi.io/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (result.ok) {
      alert("Account created successfully");
      setName("");
      setEmail("");
      setPassword("");
      navigate("/login");
    } else {
      alert("Failed to create the account");
    }
  }
}

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create an Account</h2>

        <label>Enter Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="John Doe" />

        <label>Enter Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@mail.com" />

        <label>Enter Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" />

        <button onClick={hanldeSignup}>Sign Up</button>
      </div>
    </div>
  );
}

export default SignUp;
