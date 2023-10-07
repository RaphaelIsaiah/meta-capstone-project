import React, { useState } from "react";
import restaurant from "../Assets/Images/restaurant.png";

function BookingForm({ state, dispatch, submitForm }) {
  const occasions = ["Birthday", "Anniversary", "Wedding", "Other"];
  const [form, setForm] = useState({
    indoor: true,
    outdoor: false,
    fname: "",
    lname: "",
    phone: "",
    email: "",
    date: new Date().toISOString().split("T")[0],
    diners: "4",
    occasion: occasions[1],
    time: "17:00",
    comment: "",
  });

  //Function to disable the submit button if fields have not been filled.
  const isFormValid = () =>
    form.fname && form.lname && form.phone && form.email !== "";
  // Update the BookingForm component to dispatch the state change when the date form field is changed.
  const handleDateChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    dispatch({ type: "update_times", payload: value });
  };

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(form);
    setForm({
      ...form,
      indoor: true,
      outdoor: false,
      fname: "",
      lname: "",
      phone: "",
      email: "",
      date: new Date().toISOString().split("T")[0],
      diners: "4",
      occasion: "Anniversary",
      time: "17:00",
      comment: "",
    });
    console.log("Form Submitted!");
  };
  return (
    <section className="form-section">
      <div className="B-img-closure">
        <img
          src={restaurant}
          alt="Little Lemon Restaurant Photo"
          className="B-img"
        />
      </div>

      <form className="form-container" onSubmit={handleSubmit}>
        <fieldset className="field-one">
          <div className="radio">
            <div className="seating">
              <input
                type="radio"
                id="indoor"
                name="seating"
                checked={form.indoor}
                onChange={(e) =>
                  setForm({
                    ...form,
                    indoor: e.target.checked,
                  })
                }
                required
                // I think I have solved the state and resetting problem of the radio buttons.
                // But is there a way to check if this is correct?
              />
              <label htmlFor="indoor" className="seat-choice">
                Indoor Seating
              </label>
            </div>
            <div className="seating">
              <input
                type="radio"
                id="outdoor"
                name="seating"
                checked={form.outdoor}
                onChange={(e) =>
                  setForm({
                    ...form,
                    outdoor: e.target.checked,
                  })
                }
                required
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
                name="date"
                id="date"
                min={form.date}
                className="input-box"
                value={form.date}
                onChange={handleDateChange}
                required
              />
            </div>
            <div className="time col">
              <label htmlFor="time">TIME</label>
              <select
                id="time"
                className="input-box"
                name="time"
                value={form.time}
                onChange={handleChange}
                required
              >
                {state.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="row -three">
            <div className="occasion col">
              <label htmlFor="occasion">OCCASION</label>
              <select
                className="input-box"
                id="booking-occasion"
                name="occasion"
                value={form.occasion}
                onChange={handleChange}
                required
              >
                {occasions.map((occasion) => (
                  <option data-testid="booking-occasion-option" key={occasion}>
                    {occasion}
                  </option>
                ))}
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
                value={form.diners}
                name="diners"
                onChange={handleChange}
                required
              />
            </div>
            <div className="comment col">
              <label htmlFor="comments">ADDITIONAL COMMENTS</label>
              <textarea
                name="comment"
                id="comments"
                cols="50"
                value={form.comment}
                onChange={handleChange}
                rows="5"
                placeholder=". . ."
              ></textarea>
            </div>
          </div>
        </fieldset>

        {/* ----Confirmation Details---- */}

        <h3 className="confirmation-heading">CONFIRMATION DETAILS</h3>

        <fieldset className="field-two">
          <div className="row">
            <div className="col">
              <label htmlFor="fname">FIRST NAME</label>
              <input
                type="text"
                name="fname"
                id="fname"
                className="input-box"
                value={form.fname}
                onChange={handleChange}
                placeholder="John"
                required
                pattern="[a-z]{2-15}"
                title="Please input a name"
              />
            </div>

            <div className="col">
              <label htmlFor="lname">LAST NAME</label>
              <input
                type="text"
                name="lname"
                id="lname"
                className="input-box"
                value={form.lname}
                onChange={handleChange}
                placeholder="Doe"
                required
                pattern="[a-z]{3-15}"
                title="Please input a name"
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
                value={form.email}
                onChange={handleChange}
                placeholder="johndoe@exmail.com"
                required
              />
            </div>

            <div className="col">
              <label htmlFor="phone-number">PHONE NUMBER</label>
              <input
                type="tel"
                name="phone"
                id="phone-number"
                className="input-box"
                value={form.phone}
                onChange={handleChange}
                placeholder="08012345678"
                required
                pattern="[0-9]{4}[0-9]{3}[0-9]{4}"
                title="Phone number should be eleven digits"
                maxLength={11}
              />
            </div>
          </div>
        </fieldset>

        <button
          type="submit"
          className="form-btn"
          disabled={!isFormValid()}
          onSubmit={handleSubmit}
        >
          CONFIRM RESERVATION
        </button>
      </form>
    </section>
  );
}

export default BookingForm;
