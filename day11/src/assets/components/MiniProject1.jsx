import  { useState, useEffect } from 'react';

const AutoCounter=()=> {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

   
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Auto Counter: {count}</h2>
    </div>
  );
}

export default AutoCounter;