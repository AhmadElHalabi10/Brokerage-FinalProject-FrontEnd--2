import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import Rent from "./pages/rent";
import Contact from "./pages/contact";
// import Admin from "./pages/admin";
import SignIn from "./pages/signin";
import ListProperties from "./pages/listproperties";
import SignUp from "./pages/signup";
// import PopUpProduct from "./pages/popupproduct";
import Unauthorized from "./pages/admin/unauthorized/index.js";
import Dashboard from "./pages/admin/dashboard";
import AdminsDashboard from "./pages/admin/adminsDashboard";
import UsersDashboard from "./pages/admin/usersDashboard";
import BuyDashboard from "./pages/admin/buydashboard";
import RentDashboard from "./pages/admin/rentdashboard";
import ContactUsDashboard from "./pages/admin/contactUsDashboard";
import OffersDashboard from "./pages/admin/offersDashboard";

import PrivateRoutes from "./components/routes/privateroutes.js";
import ContactDashboard from "./pages/admin/contactUsDashboard";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/listproperties" element={<ListProperties />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* <Route element={<PrivateRoutes />}> */}
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/admins" element={<AdminsDashboard />} />
            <Route path="/dashboard/users" element={<UsersDashboard />} />

            <Route
              path="/dashboard/buy-properties"
              element={<BuyDashboard />}
            />
            <Route
              path="/dashboard/rent-properties"
              element={<RentDashboard />}
            />
            <Route
              path="/dashboard/contact-us"
              element={<ContactUsDashboard />}
            />
            <Route path="/dashboard/offers" element={<OffersDashboard />} />
            <Route path="/dashboard/unauthorized" element={<Unauthorized />} />
          </Route>

          {/* <Route path="/popup" element={<PopUpProduct />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
