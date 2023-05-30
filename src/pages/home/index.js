import React, { useState } from "react";
import "./home.css";
import ProductCardPhoto1 from "../../uploads/ProductCardPhoto1.jpg";
import ProductCardPhoto2 from "../../uploads/ProductCardPhoto2.jpg";
import ProductCardPhoto3 from "../../uploads/ProductCardPhoto3.jpg";
import CardPhoto1 from "../../uploads/CardPhoto1.jpg";
import CardPhoto2 from "../../uploads/CardPhoto2.jpg";
import CardPhoto3 from "../../uploads/CardPhoto3.jpg";

import Card from "../../components/card";
import { BiNavigation } from "react-icons/bi";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");

  const handleClick = () => {
    setSearchValue("");
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      setSearchValue("");
    }
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="home">
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
          <img
            className="home-products-img"
            src={ProductCardPhoto1}
            alt="Hello1"
          />
          <div className="home-products-numberofproperties">3 properties</div>
        </div>
        <div className="home-products-product2">
          <img
            className="home-products-img"
            src={ProductCardPhoto2}
            alt="Hello2"
          />
          <div className="home-products-numberofproperties">3 properties</div>
        </div>
        <div className="home-products-product3">
          <img
            className="home-products-img"
            src={ProductCardPhoto3}
            alt="Hello3"
          />
          <div className="home-products-numberofproperties">3 properties</div>
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
            image={CardPhoto1}
            price="30000"
            bedNumber="4"
            space="125"
            description="Luxurious villa retreat, blending modern elegance with natural serenity."
          />
          <Card
            className="home-propertiesYouMayLike-products-card2"
            image={CardPhoto2}
            price="40000"
            bedNumber="3"
            space="135"
            description="Stylish urban apartment offering contemporary living in a vibrant locale."
          />
          <Card
            className="home-propertiesYouMayLike-products-card2"
            image={CardPhoto3}
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
        <div className="home-latestoffers-searchbar-container">
          <input
            type="search"
            placeholder="Type email..."
            className="home-latestoffers-searchbar"
            value={searchValue}
            onClick={handleClick}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <BiNavigation
            className="home-latestoffers-searchbar-navigationicon"
            size={40}
          />
        </div>
      </div>
    </div>
  );
}
