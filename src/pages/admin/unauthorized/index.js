import React from "react";
import "./unauthorized.css";
import MainButton from "/home/ahmad/Desktop/Final-Project/Brokerage-Repository/NewFolder/src/components/mainbutton";
import { Link } from "react-router-dom";

export default function Unauthorized() {
  return (
    <div className="unauthorized-page">
      <div className="unauthorized-page-container">
        <h2>unauthorized</h2>
        <div>401 - You don't have access to this page</div>
        <div>This page is not publicly available.</div>
        <div>To access this page please login first.</div>
        <Link to="/admin-login">
          <MainButton name="Login" />
        </Link>
      </div>
    </div>
  );
}
