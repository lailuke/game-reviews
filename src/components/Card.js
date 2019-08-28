import React from "react";
import "../styles/card.css";

const Card = ({ id, name, category, image, link, description }) => (
  <div className="card border-primary" id={id} style={{ width: "18rem" }}>
    <a href={link} target="blank">
      <img className="card-img-top" src={image} alt="Card imag cap" />
    </a>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-category">{category}</p>
      <p className="card-description">{description}</p>
    </div>
  </div>
);

export default Card;
