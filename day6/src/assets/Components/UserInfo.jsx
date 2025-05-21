import React, { useState } from 'react';

function UserInfo() {
  const [name, setName] = useState('Rick');   
  const [age, setAge] = useState(25);         

  return (
    <div>
      <h2>User Info</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default UserInfo;