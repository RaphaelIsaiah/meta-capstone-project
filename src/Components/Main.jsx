import hero from "../Assets/Images/heroImage.png";
import chef1 from "../Assets/Images/Chefs 1.png";
import chef2 from "../Assets/Images/Chefs 2.png";
import greekSalad from "../Assets/Images/Greek Salad.png";
import lemonDessert from "../Assets/Images/Lemon Dessert.png";
import bruschetta from "../Assets/Images/bruchetta 1.png";
import bike from "../Assets/Images/delivery bike.png";
import pp1 from '../Assets/Images/pp 1.png'
import pp2 from '../Assets/Images/pp 2.png'
import pp3 from '../Assets/Images/pp 3.png'
import pp4 from '../Assets/Images/pp 4.png'

export default function Main() {
  return (
    <main className="App">
      <section>
        <p>Little Lemon</p>
        <p>Chicago</p>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a mordern twist.
        </p>
        <button>Reserve a Table</button>
        <img src={hero} alt="Chef with food" width={328} height={360} />
      </section>

      <section>
        <h3>This weeks specials!</h3>
        <button>Online Menu</button>
        <article>
          <div>
            <img src={greekSalad} alt="Greek Salad" />
            <span>
              <p>Greek Salad</p>
              <p>$12.99</p>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
              <button>
                Order a delivery <img src={bike} alt="Delivery bike" />
              </button>
            </span>
          </div>

          <div>
            <img src={bruschetta} alt="Bruschetta" />
            <span>
              <p>Bruschetta</p>
              <p>$5.99</p>
              <p>
                Our bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
              </p>
              <button>
                Order a delivery <img src={bike} alt="Delivery bike" />
              </button>
            </span>
          </div>

          <div>
            <img src={lemonDessert} alt="Lemon Dessert" />
            <span>
              <p>Lemon Dessert</p>
              <p>$5.00</p>
              <p>
                This comes straight from grandma's recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
              <button>
                Order a delivery <img src={bike} alt="Delivery bike" />
              </button>
            </span>
          </div>
        </article>
      </section>

      <section>
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
              <p>“Seriously cannot stop thinking about the Turkish Mac n' Cheese!!”</p>
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
              <p>“We had such a great time celebrating my grandmothers birthday!”</p>
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

      <section>
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
