import React, { useState } from 'react';

function ToggleList() {
  const [isVisible, setIsVisible] = useState(false);
  const items = ['Apple', 'Banana', 'Cherry'];

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide List' : 'Show List'}
      </button>
      {isVisible && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ToggleList;