import React from "react";
import greekSalad from "../Assets/Images/Greek Salad.png";
import lemonDessert from "../Assets/Images/Lemon Dessert.png";
import bruschetta from "../Assets/Images/bruchetta 1.png";
import bike from "../Assets/Images/delivery bike.png";

function Specials() {
  return (
    <section className="Specials-container">
      <article className="Main-specials">
        <div className="Spec-n-btn">
          <h3 className="Highlights-txt">This weeks specials!</h3>
          <button className="LL-btn online-menu">
            <a href="#" className="a-tag">
              Online Menu
            </a>
          </button>
        </div>{" "}
        {/*This is done and responsive... I am noting the method used in styling this div.*/}
        <section className="Meal-display">
          <div className="Meal-card">
            <img src={greekSalad} alt="Greek Salad" className="Meal-img" />
            <div className="meal-n-price Greek">
              <h3 className="food-name">Greek Salad</h3>
              <h5 className="food-price">$12.99</h5>
            </div>
            <span className="Card-text">
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
            </span>
            <a href="#" className="Order-link restore">
              {" "}
              Order a delivery{" "}
              <img src={bike} alt="Delivery bike" className="bike" />
            </a>
          </div>

          <div className="Meal-card">
            <img src={bruschetta} alt="Bruschetta" className="Meal-img" />
            <div className="meal-n-price">
              <h3 className="food-name">Bruschetta</h3>
              <h5 className="food-price">$5.99</h5>
            </div>
            <span className="Card-text">
              <p>
                Our bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
              </p>
            </span>
            <a href="#" className="Order-link">
              {" "}
              Order a delivery{" "}
              <img src={bike} alt="Delivery bike" className="bike" />
            </a>
          </div>

          <div className="Meal-card">
            <img src={lemonDessert} alt="Lemon Dessert" className="Meal-img" />
            <div className="meal-n-price">
              <h3 className="food-name">Lemon Dessert</h3>
              <h5 className="food-price">$5.00</h5>
            </div>
            <span className="Card-text">
              <p>
                This comes straight from grandma's recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
            </span>
            <a href="#" className="Order-link">
              {" "}
              Order a delivery{" "}
              <img src={bike} alt="Delivery bike" className="bike" />
            </a>
          </div>
        </section>
      </article>
    </section>
    //   {/* This section is done and responsive */}
  );
}

export default Specials;
