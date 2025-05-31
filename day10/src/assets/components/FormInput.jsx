import { useState, useEffect } from 'react';

const FormInput =() =>{
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log('Input value changed:', inputValue);
  }, [inputValue]); 

  return (
    <div>
      <label>Type something... </label>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
    </div>
  );
}

export default FormInput;