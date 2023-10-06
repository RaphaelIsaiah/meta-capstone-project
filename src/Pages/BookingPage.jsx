import React, { useState, useReducer } from "react";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import BookingForm from "../Components/BookingForm";
import Testimonials from "../Components/Testimonials";
import { fetchAPI, submitAPI } from "../api";
// import userEvent from "@testing-library/user-event";

function BookingPage() {
  function reducer(state, action) {
    let newState;
    switch (action.type) {
      case "update_times":
        const newDate = new Date(action.payload);
        newState = updateTimes(newDate);
        break;
      // return updateTimes(action.payload);
      default:
        throw new Error();
      // return state;
    }
    return newState;
  }
  const date = new Date();
  // const [date, setDate] = useState(new Date());
  // initializeTimes function creates the initial state for the availableTimes.
  const initializeTimes = (date) => {
    return fetchAPI(date);
    // return ["17:00", "17:30", "18:00", "19:00", "20:00", "21:00"];
  };

  //  updateTimes will handle the state change. This function will change the availableTimes based on the selected date. For now, the function returns the same available times regardless of the date.
  const updateTimes = (date) => {
    const dateObject = new Date(date);
    return fetchAPI(dateObject);
    // return ["17:00", "17:30", "18:00", "19:00", "20:00", "21:00"];
  };

  function submitForm(formData){
    const submitted = submitAPI(formData)
  }

  // using the useReducer function and provide the two previous functions as parameters.
  // Here the initializeTimes is represented and the updateTimes is represented by the reducer function.

  const [state, dispatch] = useReducer(reducer, initializeTimes(date));

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
