// src/components/Login.js

import React, { useState } from 'react';
import { signInWithEmailAndPassword } from '../services/authService.js';  
import {useNavigate} from "react-router-dom";
import { signInWithPopup } from 'firebase/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth/cordova";

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
    const app = initializeApp(firebaseConfig);
  //  const auth = getAuth();
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
      refreshPage();
      console.log(name);
    })
    .catch((error) => {
      console.log(error);
   });
};

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User registration successful
        const user = userCredential.user;
        console.log('User created:', user);

        // TODO: Update the user profile or send a verification email

        // Clear the form
        setEmail('');
        setPassword('');

        // TODO: Redirect to another page after successful signup
      })
      .catch((error) => {
        // Handle errors here
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error signing up:", errorCode, errorMessage);
        // TODO: Implement more user-friendly error messages or actions based on errorCode
      });
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