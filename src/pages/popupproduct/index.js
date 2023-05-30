import React from "react";
import "./popupproduct.css";
import Card from "../../components/card";

export default function PopUpProduct() {
  return (
    <div className="popupproduct">
      <Card
        title="Lebanese property"
        type="Land"
        price="200000"
        bedNumber="4"
        space="125"
        description="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "
      />
      <button type="button" className="popupproduct-button">
        Contact Us
      </button>
    </div>
  );
}
