import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";

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
