import React from 'react';

const Fruits = ['Apple', 'Banana', 'Cherry'];

const ListWithFragment = () => {
  return (
    <ul>
      {Fruits.map((fruit, index) => (
        <React.Fragment key={index}>
          <li>{fruit}</li>
        </React.Fragment>
      ))}
    </ul>
  );
};

export default ListWithFragment;