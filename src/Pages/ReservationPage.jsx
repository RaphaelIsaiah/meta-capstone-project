import React from "react";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import BookingForm from "../Components/BookingForm";
import Testimonials from "../Components/Testimonials";

function Reservation() {
  return (
    <div className="homepage">
      <Header />
      <Nav />
      <main className="Main-container">
        <BookingForm />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default Reservation;
