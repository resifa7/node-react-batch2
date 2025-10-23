import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import ThingsToDo from "./components/ThingsToDo";
import sanbercode from "./assets/logo.png";
import TimerCountdown from "./components/TimerCountdown";

function App() {
  let thingsToDo = [
    "Belajar GIT & CLI",
    "Belajar HTML & CSS",
    "Belajar Javascript",
    "Belajar ReactJS Dasar",
    "Belajar ReactJS Advance",
  ];

  return (
    <>
      <form className="card">
        <TimerCountdown />
        <img src={sanbercode} alt="" />
        <div className="card-body">
          <h1>THINGS TO DO</h1>
          <p>During bootcamp in sanbercode</p>
        </div>

        {thingsToDo.map((item) => (
          <ThingsToDo name={item} />
        ))}

        <div className="button-send">
          <button type="submit">SEND</button>
        </div>
      </form>
    </>
  );
}

export default App;
