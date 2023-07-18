// Card.js
import React from "react";
import "./ScardStyles.css";

const Card = ({ emoji, heading, detail, color }) => {
  return (
    <div className="scard-container">
      <div className="card" style={{ borderColor: color }}>
        <img src={emoji} alt="" />
        <br />
        <span>{heading}</span>
        <span style={{ fontFamily: 'Quicksand, sans-serif' }}>{detail}</span>
        <br />
        <button className="c-button">LEARN MORE</button>
      </div>
    </div>
  );
};

export default Card;
