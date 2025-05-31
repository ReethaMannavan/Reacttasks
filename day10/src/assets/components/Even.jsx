import { useState, useEffect } from 'react';

function EvenCounter() {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if ( counter !== 0 && counter % 2 === 0) {
      setMessage('Counter is even');
      console.log('Counter is even');
    } else {
      setMessage('');
    }
  }, [counter])

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default EvenCounter;