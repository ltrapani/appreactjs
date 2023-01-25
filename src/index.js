import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_2-P8JxYrZzzZMiy5D3x_YY8OVCb2Gpk",
    authDomain: "reactjs-coderhouse-a5ea5.firebaseapp.com",
    projectId: "reactjs-coderhouse-a5ea5",
    storageBucket: "reactjs-coderhouse-a5ea5.appspot.com",
    messagingSenderId: "739961147235",
    appId: "1:739961147235:web:551186132ec9c46e878d56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />
);
