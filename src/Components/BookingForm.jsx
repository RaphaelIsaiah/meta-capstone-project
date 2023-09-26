import React, { useState } from "react";
// import { useState } from "react";
import restaurant from "../Assets/Images/restaurant.png";

function BookingForm() {
  const [comment, setComment] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("12:00");
  const [diners, setDiners] = useState("4");
  const [occasion, setOccasion] = useState("Anniversary");

  // handleSubmit()
  return (
    <section className="form-section">
      <div className="B-img-closure">
        <img
          src={restaurant}
          alt="Little Lemon Restaurant Photo"
          className="B-img"
        />
      </div>

      <form
        className="form-container"
        // onSubmit={handleSubmit}
      >
        <fieldset className="field-one">
          <div className="radio">
            <div className="seating">
              <input
                type="radio"
                id="indoor"
                name="seating-choice"
                value="Indoor Seating"
              />
              <label htmlFor="indoor" className="seat-choice">
                Indoor Seating
              </label>
            </div>
            <div className="seating">
              <input
                type="radio"
                id="outdoor"
                name="seating-choice"
                value="Outdoor Seating"
              />
              <label htmlFor="outdoor" className="seat-choice">
                Outdoor Seating
              </label>
            </div>
          </div>

          <div className="row -two">
            <div className="date col">
              <label htmlFor="date">RESERVATION DATE</label>
              <input
                type="date"
                name=""
                id="date"
                min="2023-09-25"
                max="2024-12-31"
                className="input-box"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="time col">
              <label htmlFor="time">TIME</label>
              <input
                type="time"
                name=""
                id="time"
                min="10:00"
                max="21:00"
                className="input-box"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>

          <div className="row -three">
            <div className="occasion col">
              <label htmlFor="occasion">OCCASION</label>
              <select
                name=""
                id="occasion"
                className="input-box"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Wedding">Wedding</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="diners col">
              <label htmlFor="diners">NUMBER OF DINERS</label>
              <input
                type="number"
                min="1"
                max="10"
                id="diners"
                className="input-box"
                value={diners}
                onChange={(e) => setDiners(e.target.value)}
              />
            </div>
            <div className="comment col">
              <label htmlFor="comments">ADDITIONAL COMMENTS</label>
              <textarea
                name="comments"
                id="comments"
                cols="50"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows="5"
                placeholder=". . ."
              ></textarea>
            </div>
          </div>
        </fieldset>
        <h3 className="confirmation-heading">CONFIRMATION DETAILS</h3>
        {/* Confirmation Details */}
        <fieldset className="field-two">
          <div className="row">
            <div className="col">
              <label htmlFor="fname">FIRST NAME</label>
              <input
                type="text"
                name="fname"
                id="fname"
                className="input-box"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                placeholder="John"
              />
            </div>

            <div className="col">
              <label htmlFor="lname">LAST NAME</label>
              <input
                type="text"
                name="lname"
                id="lname"
                className="input-box"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="email">EMAIL</label>
              <input
                type="email"
                name="email"
                id="email"
                className="input-box"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="johndoe@exmail.com"
              />
            </div>

            <div className="col">
              <label htmlFor="phone-number">PHONE NUMBER</label>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                className="input-box"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="08012345678"
              />
            </div>
          </div>
        </fieldset>

        <button
          type="submit"
          className="LL-btn form-btn"
          value="Confirm Reservation"
        >
          <a href="" className="a-tag">
            CONFIRM RESERVATION
          </a>
        </button>
        {/* should this be a submit input tag or a  button?
  What am I doing wrong??*/}
      </form>
    </section>
  );
}

export default BookingForm;
