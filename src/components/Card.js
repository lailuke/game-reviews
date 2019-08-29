import React from "react";
import "../styles/card.css";

const Card = ({ id, name, category, image, link, description, rating }) => (
  <div className="card border-primary" id={id} style={{ width: "18rem" }}>
    <div>
      <a href={link} target="blank">
        <img className="card-img-top" src={image} alt="Card img cap" />
      </a>
    </div>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-category">{category}</p>
      <p className="card-description">{description}</p>
    </div>
    <br />
    <img
      className="card-img-overlay d-flex align-items-end flex-column mt-auto ml-auto"
      src={rating}
      alt="Card img overlay"
    />
  </div>
);

export default Card;
