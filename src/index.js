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
    apiKey: "AIzaSyCsVFP1U4oFRKVAZ1FYpqCHhcRLPq4lL6c",
    authDomain: "reactjs-coderhouse-ac404.firebaseapp.com",
    projectId: "reactjs-coderhouse-ac404",
    storageBucket: "reactjs-coderhouse-ac404.appspot.com",
    messagingSenderId: "103205041342",
    appId: "1:103205041342:web:635b1b5fcc4399da121aef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />
);
