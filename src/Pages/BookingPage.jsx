import React, { useState } from "react";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import BookingForm from "../Components/BookingForm";
import Testimonials from "../Components/Testimonials";

function BookingPage() {
  const [availableTimes, setAvailableTimes] = useState([
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  const handlesSubmit = (e) => {
    e.preventDefault();
    setAvailableTimes([
      ...availableTimes,
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ]);
  };
  return (
    <div className="homepage">
      <Header />
      <Nav />
      <main className="Main-container">
        <BookingForm time={availableTimes} setTimes={handlesSubmit} />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default BookingPage;
