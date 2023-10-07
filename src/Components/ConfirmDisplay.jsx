import React from "react";
import { Link } from "react-router-dom";
import circle from "../Assets/Images/circle-check.png";

function ConfirmDisplay() {
  return (
    <div className="overlay">
      <div className="circle-container">
        <img src={circle} alt="Success" />
      </div>
      <h1>Reservation Confirmed!</h1>
      <div className="btn-hold middle">
        <Link to="/">
          <button className="LL-btn back">
            <a href="#" className="a-tag">
              Back to Homepage
            </a>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ConfirmDisplay;
