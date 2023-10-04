import React, { useState, useReducer } from "react";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import BookingForm from "../Components/BookingForm";
import Testimonials from "../Components/Testimonials";
// import userEvent from "@testing-library/user-event";

const times = ["18:00", "19:00", "20:00", "21:00", "22:00"];
const reducer = (state, action) => {
  // if (action.type === "times") return { times };
  // return state;
  switch (action.type) {
    case "times":
      return { ...state, times };
    default:
      throw new Error();
  }
};

function BookingPage() {
  const initialState = times;

  const [state, dispatch] = useReducer(reducer, initialState);

  const updateTimes = (e) => {
    dispatch({ type: "times" });
  };

  const initializeTimes = (e) => {
    initialState = times;
  };

  // const [availableTimes, setAvailableTimes] = useState([
  //   "18:00",
  //   "19:00",
  //   "20:00",
  //   "21:00",
  //   "22:00",
  // ]);

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
