import React from "react";
import "./cardmain.css";
import Bed from "../../uploads/sleeping.png";
import Bath from "../../uploads/bath.png";
import Capacity from "../../uploads/capacity.png";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

export default function CardMain(props) {
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
      <img src={props.image} className="cardmain-image" alt="" />
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
          <span onClick={() => handleClick("call")}>
            <CallIcon />
          </span>
          &nbsp;&nbsp;
          <span onClick={() => handleClick("email")}>
            <EmailIcon />
          </span>
          &nbsp;&nbsp;
          <span onClick={() => handleClick("whatsapp")}>
            <WhatsAppIcon />
          </span>
          <span className="cardmain-contact-price">$ {props.price}</span>
        </div>
      </div>
    </div>
  );
}
