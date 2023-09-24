import React from "react";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Testimonials from "../Components/Testimonials";

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
