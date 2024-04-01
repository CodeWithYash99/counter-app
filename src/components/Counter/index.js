import React, { useState } from "react";

import "./index.css";

const Counter = () => {
  const [value, setValue] = useState(0);
  const [userInput, setUserInput] = useState("");

  function handleInput(e) {
    setUserInput(e.target.value);
  }

  function handleDecrease() {
    if (userInput !== "") {
      setValue((prev) => prev - parseInt(userInput));
    } else {
      setValue((prev) => prev - 1);
    }
  }

  function handleReset() {
    setValue(0);
  }

  function handleIncrease() {
    if (userInput !== "") {
      setValue((prev) => prev + parseInt(userInput));
    } else {
      setValue((prev) => prev + 1);
    }
  }

  return (
    <div className="counter-container">
      <h1 className="title">COUNTER APP</h1>

      <input
        className="user-input"
        type="text"
        placeholder="Type any number here..."
        name="userInput"
        value={userInput}
        onChange={handleInput}
      />

      <h1 className="value">{value}</h1>

      <div className="buttons-container">
        <button className="btn decrease-btn" onClick={handleDecrease}>
          Decrease
        </button>
        <button className="btn reset-btn" onClick={handleReset}>
          Reset
        </button>
        <button className="btn increase-btn" onClick={handleIncrease}>
          Increase
        </button>
      </div>
    </div>
  );
};

export default Counter;
