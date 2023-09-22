import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  // const navToggle = document.querySelector("faBars");
  // const links = document.querySelector(".N-links");

  // navToggle.addEventListener("click", function () {
  //   links.classList.toggle("show-links");
  // });
  // I think I need to use a React Hook here i.e useState and useEffect... I will check more on how I can implement that correctly.

  return (
    <nav className="Nav">
      {/* <FontAwesomeIcon icon={faBars} /> */}
      <ul className="N-links">
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
    </nav>
  );
}
