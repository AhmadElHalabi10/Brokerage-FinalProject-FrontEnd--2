import "./footer.css";
import React from "react";
import LogoFooter from "../../uploads/alMoradLogo2.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
// import FormDialog from "../suggestProduct/suggest";
// import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img className="footer-content-logo" src={LogoFooter} />
        <p>
          Find your dream home or ideal investment property with our extensive
          listings of apartments and lands for sale and rent.
        </p>
        <div className="footer-socials">
          <a>
            <FaFacebook />
          </a>

          <a>
            <FaInstagram />
          </a>

          <a>
            <FaWhatsapp />
          </a>

          <a>
            <FaYoutube />
          </a>

          <a>
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          copyright &copy;2023 designed by <span>Halabi</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
