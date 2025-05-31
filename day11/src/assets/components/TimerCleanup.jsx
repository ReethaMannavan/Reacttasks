import  { useState,useEffect } from 'react';

const Timer=()=> {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <h2>Timer: {count} seconds</h2>;
}

const TimerApp=()=> {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setShowTimer(prev => !prev)}>
        {showTimer ? 'Stop Timer' : 'Start Timer'}
      </button>

      {showTimer && <Timer />}
    </div>
  );
}

export default TimerApp;
