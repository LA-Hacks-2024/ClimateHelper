// src/components/Login.js

import React, { useState } from 'react';
import { signInWithEmailAndPassword } from '../services/authService.js';
import {useNavigate} from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(email, password);
      console.log('Login successful');
      // Redirect user or update UI
    } catch (error) {
      console.error('Failed to login:', error.message);
    }
  };

 


  return (
    <div>
      <form onSubmit={handleLogin}>
      <div className="menu">
      <div className="input-container">
        <input
          className="input-element"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        />
         </div>
        </div>
          <button classname="login-button" type="submit">Login</button>
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

export default Login;