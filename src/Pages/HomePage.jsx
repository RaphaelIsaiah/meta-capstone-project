import React from "react";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Main from "../Components/Main";
import Footer from "../Components/Footer";

function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default Homepage;
