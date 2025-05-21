function FruitList() {
  const fruits = [
    { name: 'Apple', color: 'red' },
    { name: 'Grapes', color: 'purple' },
    { name: 'Orange', color: 'orange' },
    { name: 'Kiwi', color: 'darkgreen' }
  ];

  return (
    <ul>
      {fruits.map((fruit) => (
        <li
          key={fruit.name}
          style={{
            color: fruit.color,
            fontWeight: 'bold',
            fontSize: '1.2rem',
            listStyleType: 'square'
          }}
        >
          {fruit.name}
        </li>
      ))}
    </ul>
  );
}

export default FruitList;