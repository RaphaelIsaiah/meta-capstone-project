import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Images/Logo.svg";

export default function Header() {
  return (
    <header>
      <Link className="H-img-closure" to="/">
        <img src={Logo} alt="Little Lemon Logo" />
      </Link>
      {/* How can I make this logo responsive... I think I may have found a solution for this problem*/}
    </header>
  );
}
// width={200} height={50}
