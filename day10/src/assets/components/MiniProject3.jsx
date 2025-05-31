import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log('Timer started...');
    const intervalId = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log('Timer stopped');
    };
  }, []);

  return <h2>Timer: {seconds} seconds</h2>;
}

const ShowHideTimer=()=> {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      <button onClick={() => setShowTimer(prev => !prev)}>
        {showTimer ? 'Hide' : 'Show'} Timer
      </button>
      <hr />
      {showTimer && <Timer />}
    </div>
  );
}

export default ShowHideTimer;