import React, { useState } from 'react';

function ToggleParagraphMini() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Paragraph
      </button>

      {isVisible && <p>This is a toggleable paragraph.</p>}
    </div>
  );
}

export default ToggleParagraphMini;