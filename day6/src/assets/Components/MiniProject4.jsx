import React, { useState } from 'react';

function LightToggle() {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    setIsOn(prev => !prev);
  };

  const styles = {
    height: '100vh',           // Full viewport height
    margin: 0,                 // Remove default margin if any
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isOn ? '#ffffff' : '#222222',  // Light or dark bg
    color: isOn ? '#000000' : '#ffffff',            // Text contrast
    transition: 'background-color 0.5s ease',
    flexDirection: 'column',
    fontSize: '1.5rem',
    userSelect: 'none',
  };

  return (
    <div style={styles}>
      <button onClick={toggleLight} style={{ padding: '10px 20px', fontSize: '1rem' }}>
        {isOn ? 'Light ON' : 'Light OFF'}
      </button>
    </div>
  );
}

export default LightToggle;