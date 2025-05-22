import React, { useState } from 'react';

function PreventDefaultWithInput() {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page reload
    setSubmittedValue(inputValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Type something"
        />
        <button type="submit">Submit</button>
      </form>
      {submittedValue && <p>You submitted: {submittedValue}</p>}
    </div>
  );
}

export default PreventDefaultWithInput;