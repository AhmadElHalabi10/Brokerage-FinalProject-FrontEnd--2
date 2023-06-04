import React, { useState, useEffect } from "react";
import axios from "axios";
import "./rent.css";
import CardMain from "../../components/cardmain";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import Loader from "../../components/loader";

export default function Rent() {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true); // New loading state
  const propertiesPerPage = 5;

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);

  useEffect(() => {
    setIsLoading(true); // Set loading state to true when fetching data
    // Fetch data from the API
    axios
      .get(`${process.env.REACT_APP_URL}/rentProperty`)
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
    <div className="rent">
      <Nav />
      <div className="rent-hero">
        <h1 className="rent-hero-h1">
          Find your ideal
          <span className="rent-hero-h1-1"> rental</span> home from our
          carefully selected collection.
        </h1>
      </div>
      <div className="rent-cardmains">
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
