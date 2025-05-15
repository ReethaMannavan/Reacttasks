import React from 'react';


const Greeting = () => {
  return <h2>Hello from the Nested Greeting Component!</h2>;
};


const ParentFunc = () => {
  return (
    <div>
      <h1>Welcome to the Nested Functional Component</h1>
      <Greeting />
    </div>
  );
};

export default ParentFunc;