import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import Reservation from "./Pages/ReservationPage";

function App() {
  return (
    // I had used React.Fragment here with the className and it was not responding to the styling

  // I need to order the components properly into pages and page components properly.
    <div className="App-container">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reservations" element={<Reservation />} />
      </Routes>
    </div>
  );
}

export default App;
