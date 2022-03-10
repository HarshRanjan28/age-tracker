import React, { useState } from "react";

const App = () => {
  const [age, setAge] = useState(0);

  const getAge = () => {
    const today = new Date();
    const birthday = new Date(document.getElementById("date-input").value);

    const birthDate = birthday.getDate();
    const birthMonth = birthday.getMonth();
    const birthYear = birthday.getFullYear();

    const currentDay = today.getDate();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    const yourAge = currentYear - birthYear;

    if (
      birthYear > currentYear ||
      (birthYear === currentYear && birthMonth > currentMonth) ||
      (birthDate > currentDay &&
        currentMonth === birthMonth &&
        currentYear === birthYear)
    ) {
      alert("Your are not born yet");
    } else if (birthMonth > currentMonth || birthDate > currentDay) {
      setAge(yourAge - 1);
    } else {
      setAge(yourAge);
    }
  };
  return (
    <>
      <div className="age-tracker">
        <h1>Age-Tracker</h1>
        <div className="age-details">
          <label htmlFor="name">Enter Your Birth Date</label>
          <input type="date" id="date-input" />

          <button className="btn" onClick={getAge}>
            Submit
          </button>
          <h2>Your Age is {age} Years</h2>
        </div>
      </div>
    </>
  );
};

export default App;
