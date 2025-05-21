function ItemListClick() {
  const items = ['Apple', 'Banana', 'Cherry'];

  const handleClick = (item) => {
    alert(`You clicked on ${item}`);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} onClick={() => handleClick(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ItemListClick;