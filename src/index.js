import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { doc, getDatabase } from 'firebase/database';
import { initializeApp } from 'firebase/app';



const firebaseConfig = {
  apiKey: "AIzaSyDSVytX-LiEz2Hc7avTVe-SnckOItOSio4",
  authDomain: "sochess-aebc7.firebaseapp.com",
  databaseURL: "https://sochess-aebc7-default-rtdb.firebaseio.com",
  projectId: "sochess-aebc7",
  storageBucket: "sochess-aebc7.appspot.com",
  messagingSenderId: "782526133222",
  appId: "1:782526133222:web:8e7251a063219bee56dc27",
  measurementId: "G-5JND16JMRE"
};


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
