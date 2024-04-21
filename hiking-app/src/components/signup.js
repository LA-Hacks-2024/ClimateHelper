// src/components/Login.js

import React, { useState } from 'react';
import { signInWithEmailAndPassword } from '../services/authService.js';  
import {useNavigate} from "react-router-dom";
import { signInWithPopup } from 'firebase/auth';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_FIREBASE_PROJ_ID}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_ID}`,
  appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
  measurementId: `${process.env.REACT_APP_FIREBASE_MEASUREMENT_ID}`
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Attempt to create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created:', userCredential.user);
      // Optional: navigate to another screen upon success
      navigate('/signup'); // Adjust the route as necessary
    } catch (error) {
      console.error('Failed to signup:', error.message);
    }
    setEmail('');
  setPassword('');
  };

  
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div>
          <label for="email">Email:</label>
          <input 
            type="email" 
            id="email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label for="password">Password:</label>
          <input 
            type="password" 
            id="password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
     <div className='login-button'>
          <li onClick={handleSubmit}  type="submit"> Submit</li>
          </div>
          </form>

          <div className="App-about">
      <div className="login-button-1">

      <li onClick={() => {
        navigate("/");
      }}>
        Go to Home page
      </li>
   
      </div>
    </div>

    </div>
  );
}

export default Signup;