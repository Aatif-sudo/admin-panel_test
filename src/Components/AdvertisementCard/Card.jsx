import React from "react";
import "./Card.scss";
import { Link, Redirect } from "react-router-dom";

function Card({ image, video, name, expiry_date, URL }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <div className="file_container">
        <a href={URL} target="_blank">
          {image && <img src={image} alt="file" />}
        </a>
        <a href={URL} target="_blank">
          {video && <video src={video} controls />}
        </a>
      </div>
      <h6 className="date">
        Advertisement Expiry on - {expiry_date?.toLocaleString()}
      </h6>
    </div>
  );
}

export default Card;
