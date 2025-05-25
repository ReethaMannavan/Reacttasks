import React from 'react';

const numbers = [12, 89, 45, 67, 23, 91, 38];

const NumbersOverFifty = () => {
  return (
    <React.Fragment>
<ul>
      {numbers
        .filter(num => num > 50)
        .map(num => (
          <li key={num}>{num}</li>
        ))}
    </ul>

    </React.Fragment>
    
  );
};

export default NumbersOverFifty;