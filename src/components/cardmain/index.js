import React, { useState } from "react";
import "./cardmain.css";
import Bed from "../../uploads/sleeping.png";
import Bath from "../../uploads/bath.png";
import Capacity from "../../uploads/capacity.png";

export default function CardMain(props) {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = (action) => {
    if (action === "call") {
      window.open("tel:" + props.phoneNumber);
    } else if (action === "email") {
      window.open("mailto:" + props.email);
    } else if (action === "whatsapp") {
      window.open("https://wa.me/" + props.whatsappNumber, "_blank");
    }
  };

  return (
    <div className="cardmain">
      <img
        src={`https://almorad-app-api.onrender.com/${props.image}`}
        className="cardmain-image"
        alt=""
      />
      <div className="cardmain-information">
        <div className="cardmain-title">{props.title}</div>
        <div className="cardmain-place">{props.place}</div>
        <div className="cardmain-feature">
          <img src={Bed} alt="BedIcon" className="cardmain-feature-bedicon" />
          &nbsp;{props.numberBedRoom} Bedroom<span>&nbsp;&nbsp;</span> |
          <span>&nbsp;&nbsp;</span>
          <img
            src={Bath}
            alt="BathIcon"
            className="cardmain-feature-bathicon"
          />
          &nbsp; {props.numberBathRooms} Bathrooms
          <span>&nbsp;&nbsp;</span>|<span>&nbsp;&nbsp;</span>
          <img
            src={Capacity}
            alt="CapacityIcon"
            className="cardmain-feature-capacityicon"
          />
          &nbsp; {props.capacity} &#13217;
        </div>

        <div className="cardmain-contact">
          <span onClick={() => handleClick("call")}>&#128222;</span>&nbsp;&nbsp;
          <span onClick={() => handleClick("email")}>&#9993;</span>&nbsp;&nbsp;
          <span onClick={() => handleClick("whatsapp")}>&#128241;</span>
          <span className="cardmain-contact-price">$ {props.price}</span>
        </div>
        {showPopup && (
          <div className="cardmain-popup">Add your popup content here</div>
        )}
      </div>
    </div>
  );
}
