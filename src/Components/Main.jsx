import hero from "../Assets/Images/Hero.jpg";

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
        <h3>Specials</h3>
        {/* Pending work */}
      </section>

      <section>
        <h3>Testimonials from Customers</h3>
        {/* Pending work */}
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
      </section>
    </main>
  );
}
