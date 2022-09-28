import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNRZN5vXJula52acmLWoAfiBLFsofdBF0",
  authDomain: "banco-del-sud.firebaseapp.com",
  projectId: "banco-del-sud",
  storageBucket: "banco-del-sud.appspot.com",
  messagingSenderId: "242846204219",
  appId: "1:242846204219:web:bc45963e81c74127b5f71e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

reportWebVitals();
