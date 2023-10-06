import React from "react";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";

function ConfirmedBooking() {
  return (
    <div className="homepage">
      <Header />
      <Nav />
      <main className="Main-container">
        <p>Booking Confirmed!!!</p>
        <p>See you soon</p>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default ConfirmedBooking;
