import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

function Card({ image, video, name, expiry_date, URL }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <div className="file_container">
        <Link to={URL}>{image && <img src={image} alt="file" />}</Link>
        <Link to={URL}>{video && <video src={video} controls />}</Link>
      </div>
      <h6 className="date">
        Advertisement Expiry on - {expiry_date?.toLocaleString()}
      </h6>
    </div>
  );
}

export default Card;
