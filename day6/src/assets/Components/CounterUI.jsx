import React, { useState } from 'react';

function CounterUI() {
  const [count] = useState(0); 

  return (
    <div>
      <h2>Counter: {count}</h2>
    </div>
  );
}

export default CounterUI;