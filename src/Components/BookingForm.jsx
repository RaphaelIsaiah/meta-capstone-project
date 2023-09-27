import React, { useState } from "react";
// import { useState } from "react";
import restaurant from "../Assets/Images/restaurant.png";

function BookingForm() {
  const [form, setForm] = useState({
    // seating: "",
    indoor: { checked: false },
    outdoor: { checked: false },
    fname: "",
    lname: "",
    phone: "",
    email: "",
    date: new Date(),
    diners: "4",
    occasion: "Anniversary",
    time: "",
    comment: "",
  });

  // const [availableTimes, setAvailableTimes] = useState({
  //   option1: "18:00",
  //   option2: "19:00",
  //   option3: "20:00",
  //   option4: "21:00",
  //   option5: "22:00",
  // });
  const [availableTimes, setAvailableTimes] = useState([
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ])

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      // seating: "",
      indoor: { checked: false },
      outdoor: { checked: false },
      fname: "",
      lname: "",
      phone: "",
      email: "",
      date: "",
      diners: "4",
      occasion: "Anniversary",
      time: "",
      comment: "",
    });
    // How do I reset this form.
    // How can I set the date to read current date.
    // The radio buttons are not resetting...
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
                value={form.indoor}
                // onChange={handleChange}
                onChange={(e) =>
                  setForm({
                    ...form,
                    indoor: e.target.value,
                  })
                }
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
                value={form.outdoor}
                // onChange={handleChange}
                onChange={(e) =>
                  setForm({
                    ...form,
                    outdoor: e.target.value,
                  })
                }
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
                min="2023-09-25"
                // How do I set a proper min and max?
                max="2024-12-31"
                className="input-box"
                value={form.date}
                onChange={handleChange}
                // onChange={(e) =>
                //   setForm({
                //     ...form,
                //     date: e.target.value,
                //   })
                // }
                // onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="time col">
              <label htmlFor="time">TIME</label>
              <select
                id="time"
                className="input-box"
                // value={time}
                // value={availableTimes[3]}
                // onChange={(e) =>
                //   setAvailableTimes({
                //     ...availableTimes,
                //     3: e.target.value,
                //   })
                // }
                // onChange={(e) => setTime(e.target.value)}
              >
                {availableTimes.map((opt) => (
                  <option
                    value={opt}
                    onChange={(e) =>
                      setAvailableTimes({
                        ...availableTimes,
                        opt: e.target.value,
                      })
                    }
                  >
                    {opt}
                  </option>
                ))}
                {/* I think that map() should be used here. I'll check more on it. */}
                {/* <option
                  value={availableTimess[0]}
                  onChange={(e) =>
                    setAvailableTimess({
                      ...availableTimess,
                      option1: e.target.value,
                    })
                  }
                >
                  {availableTimess[0]}
                </option>
                <option
                  value={availableTimes.option2}
                  onchange={(e) =>
                    setAvailableTimes({
                      ...availableTimes,
                      option2: e.target.value,
                    })
                  }
                >
                  {availableTimes.option2}
                </option>
                <option
                  value={availableTimes.option3}
                  onChange={(e) =>
                    setAvailableTimes({
                      ...availableTimes,
                      option3: e.target.value,
                    })
                  }
                >
                  {availableTimes.option3}
                </option>
                <option
                  value={availableTimes.option4}
                  onChange={(e) =>
                    setAvailableTimes({
                      ...availableTimes,
                      option4: e.target.value,
                    })
                  }
                >
                  {availableTimes.option4}
                </option>
                <option
                  value={availableTimes.option5}
                  onChange={(e) =>
                    setAvailableTimes({
                      ...availableTimes,
                      option5: e.target.value,
                    })
                  }
                >
                  {availableTimes.option5}
                </option> */}
                {/* <option></option> */}
              </select>
            </div>
          </div>

          <div className="row -three">
            <div className="occasion col">
              <label htmlFor="occasion">OCCASION</label>
              <select
                name="occasion"
                id="occasion"
                className="input-box"
                value={form.occasion}
                onChange={handleChange}
                // onChange={(e) =>
                //   setForm({
                //     ...form,
                //     occasion: e.target.value,
                //   })
                // }
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
                value={form.diners}
                name="diners"
                onChange={handleChange}
                // onChange={(e) =>
                //   setForm({
                //     ...form,
                //     diners: e.target.value,
                //   })
                // }
              />
            </div>
            <div className="comment col">
              <label htmlFor="comments">ADDITIONAL COMMENTS</label>
              <textarea
                name="comment"
                id="comments"
                cols="50"
                value={form.comment}
                // onChange={(e) =>
                //   setForm({
                //     ...form,
                //     comment: e.target.value,
                //   })
                // }
                onChange={handleChange}
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
                value={form.fname}
                // onChange={(e) =>
                //   setForm({
                //     ...form,
                //     fname: e.target.value,
                //   })
                // }
                onChange={handleChange}
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
                value={form.lname}
                onChange={handleChange}
                // onChange={(e) =>
                //   setForm({
                //     ...form,
                //     lname: e.target.value,
                //   })
                // }
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
                value={form.email}
                onChange={handleChange}
                // onChange={(e) =>
                //   setForm({
                //     ...form,
                //     email: e.target.value,
                //   })
                // }
                placeholder="johndoe@exmail.com"
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
                // onChange={(e) =>
                //   setForm({
                //     ...form,
                //     phone: e.target.value,
                //   })
                // }
                placeholder="08012345678"
              />
            </div>
          </div>
        </fieldset>

        <button type="submit" className="form-btn">
          CONFIRM RESERVATION
        </button>
      </form>
    </section>
  );
}

export default BookingForm;
