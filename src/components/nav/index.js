import React, { useState, useEffect } from "react";
import "./nav.css";
import alMoradLogo from "../../uploads/alMoradLogo2.png";
import { Link } from "react-router-dom";

export default function Nav() {
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [boxShadow, setBoxShadow] = useState("");
  const [showVerticalNavbar, setShowVerticalNavbar] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0 || window.innerWidth > 480) {
        setBackgroundColor("#36372f");
        setBoxShadow("0px 6px 10px #36372f");
        setShowVerticalNavbar(false);
      } else {
        setBackgroundColor("transparent");
        setBoxShadow("");
      }
    }

    function handleMobileScreen() {
      if (window.innerWidth > 480) {
        setShowVerticalNavbar(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className="navBar"
      style={{ backgroundColor: backgroundColor, boxShadow: boxShadow }}
    >
      {showVerticalNavbar ? (
        <button
          className="navBar-toggle-button"
          onClick={() => setShowVerticalNavbar(false)}
        >
          Close
        </button>
      ) : (
        <button
          className="navBar-toggle-button"
          onClick={() => setShowVerticalNavbar(true)}
        >
          Menu
        </button>
      )}
      {showVerticalNavbar && <div className="navBar-vertical">Samir</div>}
      <Link to="/" className="navBar-logo link">
        <img src={alMoradLogo} className="logo-home" alt="logo" />

        <h3>AlMorad</h3>
      </Link>
      <Link to="/" className="navBar-nav-home link">
        Home
      </Link>

      <Link to="/rent" className="navBar-nav-rent link">
        Rent
      </Link>
      <Link to="/listproperties" className="navBar-nav-listproperties link">
        Buy
      </Link>
      <Link to="/contact" className="navBar-nav-contact link">
        Contact
      </Link>

      {/* </div> */}
      <div className="navBar-nav-login-rightside">
        <Link to="/login" className="navBar-nav-login link">
          Login
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/signup" className="navBar-nav-register link">
          Register
        </Link>
      </div>
    </div>
  );
}
