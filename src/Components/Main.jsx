import hero from "../Assets/Images/heroImage.png";
import chef1 from "../Assets/Images/Chefs 1.png";
import chef2 from "../Assets/Images/Chefs 2.png";
import greekSalad from "../Assets/Images/Greek Salad.png";
import lemonDessert from "../Assets/Images/Lemon Dessert.png";
import bruschetta from "../Assets/Images/bruchetta 1.png";
import bike from "../Assets/Images/delivery bike.png";
import pp1 from "../Assets/Images/pp 1.png";
import pp2 from "../Assets/Images/pp 2.png";
import pp3 from "../Assets/Images/pp 3.png";
import pp4 from "../Assets/Images/pp 4.png";

export default function Main() {
  return (
    <main className="Main-container">
      <section className="Main-hero">
        {/* This section is partly done... Proper alignment and mobile responsiveness are pending. */}
        <div className="Hero-bcgd">
          <img
            src={hero}
            alt="Chef with food"
            className="Hero-img"
            width={328}
            height={360}
          />
          {/* I'm having a problem styling this image to the design and also making it responsive */}
          <p className="Hero-ll">Little Lemon</p>
          <p className="Hero-ch">Chicago</p>
          <p className="Hero-des">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="LL-btn">
            <a href="#">Reserve a Table</a>
          </button>
        </div>
      </section>
      {/* This Hero section needs to be reviewed and styled properly for a more responsive look. */}

      <section className="Specials-container">
        <article className="Main-specials">
          <div className="Spec-n-btn">
            <h3 className="Highlights-txt">This weeks specials!</h3>
            <button className="LL-btn online-menu">
              <a href="#">Online Menu</a>
            </button>
          </div>{" "}
          {/*This is done and responsive... I am noting the method used in styling this div.*/}
          <section className="Meal-display">
            <div className="Meal-card">
              <img src={greekSalad} alt="Greek Salad" className="Meal-img" />
              <div className="meal-n-price Greek">
                <p className="food-name">Greek Salad</p>
                <p className="food-price">$12.99</p>
              </div>
              <span className="Card-text">
                <p>
                  The famous greek salad of crispy lettuce, peppers, olives and
                  our Chicago style feta cheese, garnished with crunchy garlic
                  and rosemary croutons.
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
                <p className="food-name">Bruschetta</p>
                <p className="food-price">$5.99</p>
              </div>
              <span className="Card-text">
                <p>
                  Our bruschetta is made from grilled bread that has been
                  smeared with garlic and seasoned with salt and olive oil.
                </p>
              </span>
              <a href="#" className="Order-link">
                {" "}
                Order a delivery{" "}
                <img src={bike} alt="Delivery bike" className="bike" />
              </a>
            </div>

            <div className="Meal-card">
              <img
                src={lemonDessert}
                alt="Lemon Dessert"
                className="Meal-img"
              />
              <div className="meal-n-price">
                <p className="food-name">Lemon Dessert</p>
                <p className="food-price">$5.00</p>
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
      {/* This section is done and responsive */}

      <section className="Main-testimonials">
        <h3>Testimonials from Customers</h3>
        {/* Pending work */}
        <article>
          <div>
            <span>
              ⭐⭐⭐⭐⭐
              <img src={pp1} alt="user" />
              {/* Color for these texts - #6E6F6E
             First p tag is #333333*/}
              <p>Sara Lopez</p>
              <p>Sara72</p>
              <p>
                “Seriously cannot stop thinking about the Turkish Mac n'
                Cheese!!”
              </p>
            </span>
          </div>

          <div>
            <span>
              ⭐⭐⭐⭐⭐
              <img src={pp2} alt="user" />
              {/* Color for these texts - #6E6F6E
             First p tag is #333333*/}
              <p>John Do</p>
              <p>Johnny_Utah</p>
              <p>
                “We had such a great time celebrating my grandmothers birthday!”
              </p>
            </span>
          </div>

          <div>
            <span>
              ⭐⭐⭐⭐⭐
              <img src={pp3} alt="user" />
              {/* Color for these texts - #6E6F6E
             First p tag is #333333*/}
              <p>Grace Ally</p>
              <p>Grace_Ally</p>
              <p>“Best Feta Salad in town. Flawless everytime!”</p>
            </span>
          </div>

          <div>
            <span>
              ⭐⭐⭐⭐⭐
              <img src={pp4} alt="user" />
              {/* Color for these texts - #6E6F6E
             First p tag is #333333*/}
              <p>Peter Mike</p>
              <p>Pete-33</p>
              <p>“Such a chilled out atmosphere - love it!”</p>
            </span>
          </div>
        </article>
      </section>

      <section className="Main-about">
        <p>About Little Lemon</p>
        <p>Chicago</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, unde
          placeat pariatur quae doloremque iste accusamus odio ipsam harum nihil
          delectus blanditiis dignissimos repellat nam esse ratione voluptates
          distinctio! Odit. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Magnam, minima aliquam est eum sequi molestiae sit.
        </p>
        <img src={chef1} alt="Little Lemon Owners" />
        <img src={chef2} alt="Little Lemon Owners" />
      </section>
    </main>
  );
}
