import React, { useEffect } from "react";
import "./about.css";
import Nav from "../../components/nav";
import Footer from "../../components/footer";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);
  return (
    <div>
      <Nav />
      <div className="about-hero">
        <h1 className="about-hero-h1">
          At <span className="about-hero-h1-1">Al-Morad</span>, we are
          passionate about connecting people with their ideal homes or lands.
        </h1>
      </div>
      <div className="about-main">
        <h1 className="about-section-header">About Us</h1>
        <p className="about-section-content">
          At Al-Morad, we are on a mission to redefine the way people discover,
          explore, and connect with their perfect homes. With a deep-rooted
          commitment to excellence, we have curated a diverse portfolio of
          apartments and properties for sale and rent, catering to a wide range
          of preferences and lifestyles. Backed by a team of passionate real
          estate professionals, we leverage cutting-edge technology and
          personalized customer service to empower our users with comprehensive
          information and a seamless journey in their pursuit of finding a place
          they can truly call home. Whether you are a first-time buyer, seasoned
          investor, or simply seeking a new living space, we are here to guide
          and support you every step of the way, ensuring your satisfaction and
          making the process enjoyable and rewarding. Discover the possibilities
          with Al-Morad and let us help you make your dream home a reality.
        </p>
        <div className="about-img-map">
          <img
            className="about-image"
            src="https://i.ibb.co/74JG823/Aboutimage.webp"
            alt=""
          />
          <iframe
            title="Map of Halabi Supermarket"
            className="about-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d532.7046602785639!2d36.07736764231194!3d34.549229891802845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152225d32eb4b109%3A0x390a62cfbb75b19b!2z2KfZhNit2YTYqNmKINmE2YTYqtis2KfYsdip!5e0!3m2!1sen!2slb!4v1681889550925!5m2!1sen!2slb"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}
