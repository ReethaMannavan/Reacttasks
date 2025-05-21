import React, { useState } from 'react';

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false); 

  const toggle = () => {
    setIsOn(prevState => !prevState); 
  };

  return (
    <div>
      <h2>The switch is {isOn ? 'ON' : 'OFF'}</h2>
      <button onClick={toggle}>
        Toggle
      </button>
    </div>
  );
}

export default ToggleSwitch;