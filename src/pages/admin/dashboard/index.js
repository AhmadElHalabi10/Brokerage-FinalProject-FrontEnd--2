import React from "react";
import "./dashboard.css";
import SideBar from "../../../components/sidebar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <SideBar />
      <Outlet />
      {/* <div className="dashboard-container">Dashboard</div> */}
    </div>
  );
}
