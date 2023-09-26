import React, { useState } from "react";
// import { useState } from "react";
import restaurant from "../Assets/Images/restaurant.png";

function BookingForm() {
  const [form, setForm] = useState({
    indoor: "",
    outdoor: "",
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
  // const [indoor, setIndoor] = useState("");
  // const [outdoor, setOutdoor] = useState("");
  // const [comment, setComment] = useState("");
  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");
  // const [phone, setPhone] = useState("");
  // const [email, setEmail] = useState("");
  // const [date, setDate] = useState("");
  // const [diners, setDiners] = useState("4");
  // const [occasion, setOccasion] = useState("Anniversary");
  // const [time, setTime] = useState([
  //   {
  //     option1: "17:00",
  //     option2: "18:00",
  //     option3: "19:00",
  //     option4: "20:00",
  //     option5: "21:00",
  //     option6: "22:00",
  //   },
  // ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      indoor: "",
      outdoor: "",
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
    // setFname("");
    // setLname("");
    // setPhone("");
    // setEmail("");
    // setDate("");
    // setDiners("4");
    // setOccasion("Anniversary");
    // setTime("12:00");
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
                name="seating-choice"
                value={form.indoor}
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
                name="seating-choice"
                value={form.outdoor}
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
                name=""
                id="date"
                min="2023-09-25"
                max="2024-12-31"
                className="input-box"
                value={form.date}
                onChange={(e) =>
                  setForm({
                    ...form,
                    date: e.target.value,
                  })
                }
              />
            </div>
            <div className="time col">
              <label htmlFor="time">TIME</label>
              <select
                id="time"
                className="input-box"
                // value={time}
                // onChange={(e) => setTime(e.target.value)}
              >
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
              </select>
            </div>
          </div>

          <div className="row -three">
            <div className="occasion col">
              <label htmlFor="occasion">OCCASION</label>
              <select
                name=""
                id="occasion"
                className="input-box"
                value={form.occasion}
                onChange={(e) =>
                  setForm({
                    ...form,
                    occasion: e.target.value,
                  })
                }
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
                onChange={(e) =>
                  setForm({
                    ...form,
                    diners: e.target.value,
                  })
                }
              />
            </div>
            <div className="comment col">
              <label htmlFor="comments">ADDITIONAL COMMENTS</label>
              <textarea
                name="comments"
                id="comments"
                cols="50"
                value={form.comment}
                onChange={(e) =>
                  setForm({
                    ...form,
                    comment: e.target.value,
                  })
                }
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
                onChange={(e) =>
                  setForm({
                    ...form,
                    fname: e.target.value,
                  })
                }
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
                onChange={(e) =>
                  setForm({
                    ...form,
                    lname: e.target.value,
                  })
                }
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
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
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
                value={form.phone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value,
                  })
                }
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
