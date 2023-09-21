import footerlogo from "../Assets/Images/footerlogo.png";

export default function Footer() {
  return (
    <footer className="Footer-container">
      <div className="Footer-closure">
        <div className="footer-logo">
          <img src={footerlogo} alt="Footer Logo" width={164} height={329} />
        </div>
        <section className="fnav-container">
          <div className="fnav">
            <p>Doormat Navigation</p>
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
          </div>

          <div className="fnav">
            <p>Contact</p>
            <ul className="f-links">
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
          </div>

          <div className="fnav">
            <p>Social Media Links</p>
            <ul className="f-links">
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
          </div>
        </section>
      </div>
    </footer>
    // Done and responsive.
  );
}
