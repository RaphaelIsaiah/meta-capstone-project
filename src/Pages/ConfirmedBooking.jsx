import React from "react";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";
import ConfirmDisplay from "../Components/ConfirmDisplay";

function ConfirmedBooking() {
  return (
    <div className="homepage">
      <Header />
      <Nav />
      <main className="Main-container">
      <ConfirmDisplay />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}

export default ConfirmedBooking;
