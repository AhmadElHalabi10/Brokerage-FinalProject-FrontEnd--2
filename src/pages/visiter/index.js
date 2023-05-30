import React from "react";
import Nav from "../../components/nav";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer";

export default function Visiter() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
