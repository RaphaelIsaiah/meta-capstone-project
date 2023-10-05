const [inputs, setInputs] = useState({});

const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  setInputs((values) => ({ ...values, [name]: value }));
};

const handleSubmit = (event) => {
  event.preventDefault();
  alert(inputs.name, inputs.value);
  // setInputs('')
};

return (
  <form onSubmit={handleSubmit}>
    <label>
      Enter your name:
      <input
        type="text"
        name="username"
        value={inputs.username || ""}
        onChange={handleChange}
      />
    </label>
    <label>
      Enter your age:
      <input
        type="number"
        name="age"
        value={inputs.age || ""}
        onChange={handleChange}
      />
    </label>
    <input type="submit" />
  </form>
);

{
  /* <input
                type="time"
                name=""
                id="time"
                min="10:00"
                max="21:00"
                className="input-box"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              /> */
}

<form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
  <label htmlFor="res-date">Choose date</label>
  <input type="date" id="res-date" />
  <label htmlFor="res-time">Choose time</label>
  <select id="res-time ">
    <option>17:00</option>
    <option>18:00</option>
    <option>19:00</option>
    <option>20:00</option>
    <option>21:00</option>
    <option>22:00</option>
  </select>
  <label htmlFor="guests">Number of guests</label>
  <input type="number" placeholder="1" min="1" max="10" id="guests" />
  <label htmlFor="occasion">Occasion</label>
  <select id="occasion">
    <option>Birthday</option>
    <option>Anniversary</option>
  </select>
  <input type="submit" value="Make Your reservation" />
</form>;

{
  /* <option
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
                </option> */
}

// const [availableTimes, setAvailableTimes] = useState([
//   "18:00",
//   "19:00",
//   "20:00",
//   "21:00",
//   "22:00",
// ]);

// const [availableTimes, setAvailableTimes] = useState({
//   option1: "18:00",
//   option2: "19:00",
//   option3: "20:00",
//   option4: "21:00",
//   option5: "22:00",
// });
// const [availableTimes, setAvailableTimes] = useState([
//   "18:00",
//   "19:00",
//   "20:00",
//   "21:00",
//   "22:00",
// ])

{
  /* <select
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
              </select> */
}

// const times = ["17:00", "17:30", "18:00", "19:00", "20:00", "21:00"];
// const updateTimes = (state, action) => {
//   // if (action.type === "times") return { times };
//   // return state;
//   switch (action.type) {
//     case "times":
//       return { ...state, times };
//     default:
//       throw new Error();
//   }
// };
