import React, { useState, useEffect } from "react";
import video from "./assets/stars.mp4";

function App() {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const targetDate = new Date("2023-08-01T00:00:00Z");
      const now = new Date();
      const diff = Math.max(0, targetDate - now);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setRemainingTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-page">
      <video autoPlay loop muted className="stars">
        <source src={video} type="video/mp4" />
      </video>
      <div className="overlay">
        <h1 className="title">Toker Smokers coming soon</h1>
        <p className="countdown">
          <span className="thermometer-text">
    {remainingTime.days} days, {remainingTime.hours} hours, {remainingTime.minutes} minutes, and {remainingTime.seconds} seconds
  </span>
</p>
      </div>
      <footer className="footer">
        <p className="copyright">
          &copy; Toker Smokers LLC 2023
        </p>
      </footer>
    </div>
  );
}

export default App;
