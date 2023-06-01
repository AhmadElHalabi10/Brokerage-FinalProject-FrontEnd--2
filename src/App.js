import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Visiter from "./pages/visiter";
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
import RentDashboard from "./pages/admin/rentdashboard/index.js";
import BuyDashboard from "./pages/admin/buydashboard";
import PrivateRoutes from "./components/routes/privateroutes.js";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Visiter />}>
              <Route path="/" element={<Home />} />
              <Route path="/rent" element={<Rent />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/listproperties" element={<ListProperties />} />
              <Route element={<PrivateRoutes />}>
                <Route path="/dashboard/admin" element={<Dashboard />}>
                  <Route path="/dashboard/admin" element={<BuyDashboard />} />
                  <Route path="rent" element={<RentDashboard />} />
                  <Route
                    path="/dashboard/admin/unauthorized"
                    element={<Unauthorized />}
                  />
                </Route>
              </Route>
            </Route>
          </Route>
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/popup" element={<PopUpProduct />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
