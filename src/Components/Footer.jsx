import footerlogo from "../Assets/Images/footerlogo.png";

export default function Footer() {
  return (
    <footer className="App">
      <img src={footerlogo} alt="Footer Logo" width={164} height={329} />

      <section>
        <p>Doormat Navigation Links</p>
        <ul className="f-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Reservations</a>
          </li>
          <li>
            <a href="#">Order Online</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </section>

      <section>
        <p>Contact</p>
        <ul>
          <li>
            <a href="#">Address</a>
          </li>
          <li>
            <a href="#">Phone number</a>
          </li>
          <li>
            <a href="#">Email</a>
          </li>
        </ul>
      </section>

      <section>
        <p>Social Media Links</p>
        <ul>
          <li>
            <a href="#">Address</a>
          </li>
          <li>
            <a href="#">Phone number</a>
          </li>
          <li>
            <a href="#">Email</a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
