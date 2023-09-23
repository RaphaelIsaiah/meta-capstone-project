import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  // const navToggle = document.querySelector("faBars");
  // const links = document.querySelector(".N-links");

  // navToggle.addEventListener("click", function () {
  //   links.classList.toggle("show-links");
  // });
  // I think I need to use a React Hook here i.e useState and useEffect... I will check more on how I can implement that correctly also with proper syntax.

  return (
    <nav className="Nav">
      {/* <FontAwesomeIcon icon={faBars} /> */}
      <ul className="N-links">
        <li>
          <Link to="/" className="a-tag N-a">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="a-tag N-a">
            About
          </Link>
        </li>
        <li>
          <Link to="/menu" className="a-tag N-a">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/reservations" className="a-tag N-a">
            Reservations
          </Link>
        </li>
        <li>
          <Link to="/order-online" className="a-tag N-a">
            Order Online
          </Link>
        </li>
        <li>
          <Link to="/login" className="a-tag N-a">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
