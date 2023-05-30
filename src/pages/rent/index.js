import React, { useState, useEffect } from "react";
import axios from "axios";
import "./rent.css";
import CardMain from "../../components/cardmain";

export default function Rent() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get(`https://almorad-app-api.onrender.com/rentProperty`)
      .then((response) => setProperties(response.data.response))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="rent">
      <div className="rent-hero">
        <h1 className="rent-hero-h1">
          Find your ideal
          <span className="rent-hero-h1-1"> rental</span> home from our
          carefully selected collection.
        </h1>
      </div>
      <div className="rent-cardmains">
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
