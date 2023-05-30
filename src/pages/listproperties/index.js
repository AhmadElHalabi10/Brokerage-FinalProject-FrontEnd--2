import React, { useState, useEffect } from "react";
import axios from "axios";
import "./listproperties.css";
import CardMain from "../../components/cardmain";

export default function ListProperties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get(`https://almorad-app-api.onrender.com/buyProperty`)
      .then((response) => {
        setProperties(response.data.response);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="listproperties">
      <div className="listproperties-hero">
        <h1 className="listproperties-hero-h1">
          <span className="listproperties-hero-h1-1">F</span>
          <span className="listproperties-hero-h1-2">i</span>
          <span className="listproperties-hero-h1-3">n</span>
          <span className="listproperties-hero-h1-4">d</span>
          <span className="listproperties-hero-h1-5"> y</span>our dream home.
          Browse our properties fo
          <span className="listproperties-hero-h1-5">r</span>
          <span className="listproperties-hero-h1-4"> s</span>
          <span className="listproperties-hero-h1-3">a</span>
          <span className="listproperties-hero-h1-2">l</span>
          <span className="listproperties-hero-h1-1">e</span>
          <span className="listproperties-hero-h1-1">.</span>
        </h1>
      </div>
      <div className="listproperties-cards">
        {console.log(properties)}
        {properties.map((property, index) => (
          <CardMain
            image={property.image}
            title={property.title}
            place={property.place}
            numberBedRoom={property.numberBedRoom}
            numberBathRooms={property.numberBathRooms}
            capacity={property.capacity}
            price={property.price}
            key={index} // Add a unique key prop for each property
          />
        ))}
      </div>
    </div>
  );
}
