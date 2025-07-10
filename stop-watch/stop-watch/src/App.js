import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running]);

  const reset = () => {
    setTime(0);
    setRunning(false);
  };

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <h2>{time}s</h2>

      <div>
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
  
}

export default App;
