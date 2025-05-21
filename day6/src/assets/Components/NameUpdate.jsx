import  { useState } from 'react';

function NameUpdater() {
  const [name, setName] = useState('Guest'); 

  const handleClick = () => {
    setName('Daryl'); 
  };

  return (
    <div>
      <h2>Welcome, {name}!</h2>
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
}

export default NameUpdater;