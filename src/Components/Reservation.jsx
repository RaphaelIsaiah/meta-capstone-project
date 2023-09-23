import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Testimonials from "./Testimonials";

function Reservation() {
  return (
    <div className="homepage">
      <Header />
      <Nav />
      <main>
        <div className="LL-btn"> I AM</div>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default Reservation;
