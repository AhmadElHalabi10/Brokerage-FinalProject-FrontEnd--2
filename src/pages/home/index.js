import React, { useState, useEffect } from "react";
import "./home.css";
import CardPhoto1 from "../../uploads/CardPhoto1.jpg";
import CardPhoto2 from "../../uploads/CardPhoto2.jpg";
import CardPhoto3 from "../../uploads/CardPhoto3.jpg";
import Nav from "../../components/nav/index.js";
import Footer from "../../components/footer/index.js";

import Card from "../../components/card";
import { BiNavigation } from "react-icons/bi";

export default function Home() {
  // const [EmailValue, setEmailValue] = useState("");

  // const handleChange = (event) => {
  //   setEmailValue(event.target.value);

  // }

  const [email, setEmail] = useState("");
  const handleClick = () => {
    setEmail("");
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);

  // const handleKeyDown = (event) => {
  //   if (event.keyCode === 13) {
  //   }
  // };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setEmail("");
    }
  };

  return (
    <div className="home">
      <Nav />
      <div className="home-hero">
        <h1 className="home-hero-h1">
          Welcome to our world of exceptional
          <span className="home-hero-h1-1"> properties</span>.
        </h1>
      </div>

      <div className="home-diffierentTypeOfProperties">
        <p className="home-diffierentTypeOfProperties-p1">
          Different Types of properties
        </p>
        <p className="home-diffierentTypeOfProperties-p2">
          Best type of properties for you
        </p>
      </div>
      <div className="home-products">
        <div className="home-products-product1">
          <div className="home-products-numberofproperties">3 properties</div>
        </div>
        <div className="home-products-product2">
          <div className="home-products-numberofproperties">2 properties</div>
        </div>
        <div className="home-products-product3">
          <div className="home-products-numberofproperties">1 properties</div>
        </div>
      </div>

      <div className="home-propertiesYouMayLike">
        <div className="home-propertiesYouMayLike-paragraph">
          <p className="home-propertiesYouMayLike-p1">
            Properties you may like
          </p>
          <p className="home-propertiesYouMayLike-p2">
            Our Featured properties
          </p>
        </div>
        <div className="home-propertiesYouMayLike-products">
          <Card
            className="home-propertiesYouMayLike-products-card1"
            image="https://i.ibb.co/9Wpzfjm/Card-Photo1.webp"
            price="30000"
            bedNumber="4"
            space="125"
            description="Luxurious villa retreat, blending modern elegance with natural serenity."
          />
          <Card
            className="home-propertiesYouMayLike-products-card2"
            image="https://i.ibb.co/jwG7xKr/Card-Photo2.webp"
            price="40000"
            bedNumber="3"
            space="135"
            description="Stylish urban apartment offering contemporary living in a vibrant locale."
          />
          <Card
            className="home-propertiesYouMayLike-products-card2"
            image="https://i.ibb.co/9yWGK87/Card-Photo3.webp"
            price="50000"
            bedNumber="5"
            space="145"
            description="A tranquil sanctuary of elegance and comfort, your private villa awaits."
          />
        </div>
      </div>
      <div className="home-latestoffers">
        <div className="home-latestoffers-paragraph">
          <p className="home-latestoffers-p1">Want to get the latest offers?</p>
          <p className="home-latestoffers-p2">
            Send us your email and we will do the rest
          </p>
        </div>
        <form>
          <div className="home-latestoffers-searchbar-container">
            <input
              type="search"
              placeholder="Type email..."
              className="home-latestoffers-searchbar"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <BiNavigation
              className="home-latestoffers-searchbar-navigationicon"
              size={40}
              onClick={handleClick}
            />
          </div>
          {/* <button type="submit">Submit</button> */}
        </form>
      </div>
      <Footer />
    </div>
  );
}
