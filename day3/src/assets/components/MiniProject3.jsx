import React from 'react';

const HelloWorld = () => {
  const shouldDisplay = true; // Set to false to hide the message

  return (
    <div>
      {shouldDisplay ? <h1>Hello, World!</h1> : null}
    </div>
  );
};

export default HelloWorld;