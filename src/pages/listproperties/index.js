import React, { useState, useEffect } from "react";
import axios from "axios";
import "./listproperties.css";
import CardMain from "../../components/cardmain";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import Loader from "../../components/loader"; // Import the loader component

export default function ListProperties() {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true); // New loading state
  const propertiesPerPage = 5;

  useEffect(() => {
    // Fetch data from the API
    axios
      .get(`https://almorad-app-api.onrender.com/buyProperty`)
      .then((response) => {
        setProperties(response.data.response);
        setIsLoading(false); // Set loading state to false when data arrives
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false); // Set loading state to false if an error occurs
      });
  }, []);

  // Calculate the index range for properties to display based on the current page
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  // Function to handle page navigation
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="listproperties">
      <Nav />
      <div className="listproperties-hero">
        <h1 className="listproperties-hero-h1">
          Find your dream home. Browse our properties
          <span className="listproperties-hero-h1-1"> for sale</span>
        </h1>
      </div>
      <div className="listproperties-cards">
        {isLoading ? ( // Render the loader if isLoading is true
          <Loader />
        ) : (
          // Render the properties when data has arrived
          currentProperties.map((property, index) => (
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
          ))
        )}
      </div>
      <div className="pagination">
        {Array.from(
          { length: Math.ceil(properties.length / propertiesPerPage) },
          (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={currentPage === i + 1 ? "active" : ""}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
      <Footer />
    </div>
  );
}
