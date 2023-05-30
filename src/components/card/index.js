import React from "react";
import "./card.css";
import { FaBed } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <Link to="/listproperties" className="card">
      <img src={props.image} alt="Property" className="card-image" />
      <div className="card-features">
        {/* <h3 className="card-features-type">{props.type}</h3> */}

        <h3 className="card-features-price">$ {props.price}</h3>
        <p className="card-features-number">
          {props.bedNumber} &nbsp; beds &nbsp;
          <FaBed className="card-features-p-icon" />
          &nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp; {props.space}&nbsp;
          square&nbsp; meters
        </p>

        <div className="card-description">
          <p>{props.description}</p>
        </div>
      </div>
    </Link>
  );
}
