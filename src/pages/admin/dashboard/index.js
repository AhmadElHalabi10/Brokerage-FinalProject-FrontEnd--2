import React from "react";
import SideBar from "../../../components/sidebar";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <SideBar />
      <div className="dashboard-container">Dashboard</div>
    </div>
  );
}
