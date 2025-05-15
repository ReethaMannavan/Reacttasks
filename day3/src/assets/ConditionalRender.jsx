import React from 'react';

const ConditionalRender = () => {
  const showMessage = true;

  return (
    <div>
      {showMessage ? <h1>React is Cool!</h1>:null}
    </div>
  );
};

export default ConditionalRender;