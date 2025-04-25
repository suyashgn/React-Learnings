import React, { useEffect, useState } from 'react';
import './Timer.css';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer-container">
      <h2>Timer</h2>
      <p>Seconds passed: {seconds}</p>
    </div>
  );
}

export default Timer;
