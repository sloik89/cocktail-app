import React from "react";
import { Link } from "react-router-dom";
const Cocktail = ({ id, name, image, info, glass }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} className="cocktail-img" />
      </div>
      <div className="cocktail-info">
        <h3>{name}</h3>
        <p>{glass}</p>
        <p>{info}</p>
        <Link className="btn-details" to={`cocktail/${id}`}>
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
