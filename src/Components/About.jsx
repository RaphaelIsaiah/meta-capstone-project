import React from "react";
import chef1 from "../Assets/Images/Chefs 1.png";
import chef2 from "../Assets/Images/Chefs 2.png";

function About() {
  return (
    <section className="Main-about">
      {/* test may delete this... */}
      <div className="About-closure">
        <div className="About-text">
          <p className="A-ll">Little Lemon</p>
          <p className="A-ch">Chicago</p>
          <p className="A-txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            unde placeat pariatur quae doloremque iste accusamus odio ipsam
            harum nihil delectus blanditiis dignissimos repellat nam esse
            ratione voluptates distinctio! Odit. Lorem ipsum dolor sit amet
          </p>
        </div>
        <div className="About-images">
          <img src={chef1} alt="Little Lemon Owners" className="chef1" />
          <img src={chef2} alt="Little Lemon Owners" className="chef2" />
        </div>
      </div>
      {/* Implemented and responsive... though I am still thinking of a better way to manage the images
    I think I have found a way around the images... I am still open to better ways to improve the design.*/}
    </section>
  );
}

export default About;
