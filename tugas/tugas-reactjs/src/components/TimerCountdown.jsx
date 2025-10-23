import { useState, useEffect } from "react";

function TimerCountdown() {
  //count = nilai state saat ini
  // setCount = fungsi untuk memperbarui nilai state (be),
  // useState(value) = membuat state baru dengan value yang dimau

  const [count, setCount] = useState(10); // Menyimpan nilai hitung mundur
  const [time, setTime] = useState(new Date()); //Menyimpan waktu sekarang
  const [isFinished, setIsFinished] = useState(false); //Ketika true, komponen tidak dirender (hilang)

  // Timer untuk jam sekarang
  useEffect(() => {
    const clock = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(clock);
  }, []);

  // Timer untuk hitung mundur
  useEffect(() => {
    if (count <= 0) {
      setIsFinished(true);
      return;
    }
    const countdown = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(countdown);
  }, [count]);

  if (isFinished) {
    return null;
  }

  return (
    <div className="timer">
      <h1> Now At - {time.toLocaleTimeString()}</h1>
      <h3>Countdown : {count}</h3>
    </div>
  );
}

export default TimerCountdown;
