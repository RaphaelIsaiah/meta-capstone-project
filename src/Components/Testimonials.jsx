import React from "react";
import pp1 from "../Assets/Images/pp 1.png";
import pp2 from "../Assets/Images/pp 2.png";
import pp3 from "../Assets/Images/pp 3.png";
import pp4 from "../Assets/Images/pp 4.png";

function Testimonials() {
  return (
    <section className="Main-testimonials">
      <h3>Testimonials</h3>
      {/* Pending work */}
      <article className="Review-display">
        <div className="review-card">
          <div className="review-closure">
            {" "}
            <span className="stars">⭐⭐⭐⭐⭐</span>
            <div className="profile">
              <img src={pp1} alt="user" />
              <div>
                <p className="name">Sara Lopez</p>
                <p className="username">Sara72</p>
              </div>
            </div>
            <p className="review-text">
              “Seriously cannot stop thinking about the Turkish Mac n' Cheese!!”
            </p>
          </div>
        </div>

        <div className="review-card">
          <div className="review-closure">
            <span className="stars">⭐⭐⭐⭐⭐</span>
            <div className="profile">
              <img src={pp2} alt="user" />
              <div>
                <p className="name">John Do</p>
                <p className="username">Johnny_Utah</p>
              </div>
            </div>
            <p className="review-text">
              “We had such a great time celebrating my grandmothers birthday!”
            </p>
          </div>
        </div>

        <div className="review-card">
          <div className="review-closure">
            <span className="stars">⭐⭐⭐⭐⭐</span>
            <div className="profile">
              <img src={pp3} alt="user" />
              <div>
                <p className="name">Grace Ally</p>
                <p className="username">Grace_Ally</p>
              </div>
            </div>
            <p className="review-text">
              “Best Feta Salad in town. Flawless everytime!”
            </p>
          </div>
        </div>

        <div className="review-card">
          <div className="review-closure">
            <span className="stars">⭐⭐⭐⭐⭐</span>
            <div className="profile">
              <img src={pp4} alt="user" />
              <div>
                <p className="name">Peter Mike</p>
                <p className="username">Pete-33</p>
              </div>
            </div>
            <p className="review-text">
              “Such a chilled out atmosphere - love it!”
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
//  {/* Testimonial Section is done and responsive with very minimal media queries. */}

export default Testimonials;
