import React from "react";
import { Link } from "react-router-dom";
import hero from "../Assets/Images/heroImage.png";

function Hero() {
  return (
    <section className="Main-hero">
      <div className="Hero-closure">
        <div className="H-txt-btn">
          <h1 className="Hero-ll">Little Lemon</h1>
          <h2 className="Hero-ch">Chicago</h2>
          <p className="Hero-des">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <div className="btn-hold">
            <Link to="/reservations">
            <button className="LL-btn table">
              <a href="#" className="a-tag">
                Reserve a Table
              </a>
            </button>
            </Link>
          </div>
        </div>
        <div className="Hero-img">
          <img
            src={hero}
            alt="Chef with food"
            className="chef-n-food"
            width={328}
            height={360}
          />
        </div>
        {/* I'm having a problem styling this image to the design and also making it responsive */}
      </div>
    </section>
    //   {/* ----This Hero section needs to be reviewed and styled properly for a more responsive look.---- */}
  );
}

export default Hero;
