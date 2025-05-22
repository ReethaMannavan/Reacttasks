import React, { useState } from 'react';

function DisableButtonOnClick() {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(true);
  };

  return (
    <button onClick={handleClick} disabled={isDisabled}>
      {isDisabled ? 'Disabled' : 'Click Me'}
    </button>
  );
}

export default DisableButtonOnClick;