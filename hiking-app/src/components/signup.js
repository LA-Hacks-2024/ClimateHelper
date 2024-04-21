// src/components/Login.js

import React, { useState } from 'react';
import { signInWithEmailAndPassword } from '../services/authService.js';  
import {useNavigate} from "react-router-dom";
import { signInWithPopup } from 'firebase/auth';


function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   await signInWithPopup(email, password); 
    //   console.log('Login successful');
    //   // Redirect user or update UI
    // } catch (error) {
    //   console.error('Failed to Login:', error.message);
    // }
    console.log(`Signup submitted with: email: ${email}, password: ${password}`);
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className="menu">
      <div className="input-container">
        <input
          className="input-element"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>
        </div>
        <div>
        <div className="input-container">
        <input
          className="input-element"
          type="password" 
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
         </div>
        </div>
          <button classname="login-button" type="submit">Sign up</button>
          </form>

          <div className="App-about">
      <div className="menu">
      <ul>
      <li onClick={() => {
        navigate("/");
      }}>
        Go to Home page
      </li>
      </ul>
      </div>
    </div>

    </div>
  );
}

export default Signup;