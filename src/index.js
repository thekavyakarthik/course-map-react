import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FaBars } from "react-icons/fa";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SideBarToggle />
    <App />
    {/*<div className="Side-bar">
      <CourseAdd />
      <CourseList />
      <TotalCredit />
    </div>*/}
  </React.StrictMode>
);

function SideBarToggle() {
  return (
    <button className="Course-menu-button">
      <FaBars className="Course-menu-icon" />
    </button>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();