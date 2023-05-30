import React from "react";
import "./sideBar.css";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sidebar">
      <Link to="/dashboard/admin" className="sidebar-buy">
        Buy
      </Link>
      <Link to="/dashboard/admin/rent" className="sidebar-rent">
        Rent
      </Link>
    </div>
  );
}
