function EvenNumberList() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // Filter even numbers
  const evenNumbers = numbers.filter(num => num % 2 === 0);

  return (
    <div>
      <h2>Even Numbers:</h2>
      <ul>
        {evenNumbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default EvenNumberList;