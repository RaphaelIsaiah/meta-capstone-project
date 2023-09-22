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
                <a href="#" className="a-tag">Home</a>
              </li>
              <li>
                <a href="#" className="a-tag">About</a>
              </li>
              <li>
                <a href="#" className="a-tag">Menu</a>
              </li>
              <li>
                <a href="#" className="a-tag">Reservations</a>
              </li>
              <li>
                <a href="#" className="a-tag">Order Online</a>
              </li>
              <li>
                <a href="#" className="a-tag">Login</a>
              </li>
            </ul>
          </div>

          <div className="fnav">
            <p>Contact</p>
            <ul className="f-links">
              <li>
                <a href="#" className="a-tag">Address</a>
              </li>
              <li>
                <a href="#" className="a-tag">Phone number</a>
              </li>
              <li>
                <a href="#" className="a-tag">Email</a>
              </li>
            </ul>
          </div>

          <div className="fnav">
            <p>Social Media Links</p>
            <ul className="f-links">
              <li>
                <a href="#" className="a-tag">Address</a>
              </li>
              <li>
                <a href="#" className="a-tag">Phone number</a>
              </li>
              <li>
                <a href="#" className="a-tag">Email</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </footer>
    // Done and responsive.
  );
}
