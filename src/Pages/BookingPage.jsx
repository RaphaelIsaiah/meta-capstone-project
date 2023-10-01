import React, { useState, useReducer } from "react";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import BookingForm from "../Components/BookingForm";
import Testimonials from "../Components/Testimonials";
import userEvent from "@testing-library/user-event";

const reducer = (state, action) => {
  if (action.type === "") return {};
  return state;
};

function BookingPage() {
  const initialState = ["18:00", "19:00", "20:00", "21:00", "22:00"];

  const [state, dispatch] = useReducer(reducer, initialState);

  // const [availableTimes, setAvailableTimes] = useState([
  //   "18:00",
  //   "19:00",
  //   "20:00",
  //   "21:00",
  //   "22:00",
  // ]);
  // const handlesSubmit = (e) => {
  //   e.preventDefault();
  //   setAvailableTimes([
  //     ...availableTimes,
  //     "18:00",
  //     "19:00",
  //     "20:00",
  //     "21:00",
  //     "22:00",
  //   ]);
  // };
  return (
    <div className="homepage">
      <Header />
      <Nav />
      <main className="Main-container">
        <BookingForm state={state} dispatch={dispatch} />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default BookingPage;
