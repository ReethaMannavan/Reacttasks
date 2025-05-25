import React from 'react';

const fruits = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' }
];

const FruitListMini = () => {
  return (
    <React.Fragment>
         <ul>
      {fruits.map(fruit => (
        <li key={fruit.id}>
        {fruit.name}</li>
      ))}
    </ul>
    </React.Fragment>
   
  );
};

export default FruitListMini;