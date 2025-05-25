import React, { Fragment } from 'react';

const categories = [
  {
    id: 1,
    name: 'Fruits',
    items: [
      { id: 'a', name: 'Apple' },
      { id: 'b', name: 'Banana' },
    ],
  },
  {
    id: 2,
    name: 'Vegetables',
    items: [
      { id: 'c', name: 'Carrot' },
      { id: 'd', name: 'Daikon' },
    ],
  },
];

const NestedList = () => {
  return (
    <React.Fragment>
      {categories.map(category => (
        <div key={category.id}>
          <h3>{category.name}</h3>
          <ul>
            {category.items.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </React.Fragment>
  );
};

export default NestedList;