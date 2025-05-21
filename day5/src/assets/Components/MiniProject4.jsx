


function EvenNumberList() {
  const numbers = [1, 2, 3, 4, 5, 6];

  const evenStyle = {
    backgroundColor: 'green',
    color: 'white',
    padding: '10px',
    margin: '5px',
    borderRadius: '4px',
    width: '80px',
    textAlign: 'center',
  };

  return (
    <div>
      <h2>Even Numbers:</h2>
      {numbers
        .filter(num => num % 2 === 0)
        .map((num, index) => (
          <div key={index} style={evenStyle}>
            {num}
          </div>
        ))}
    </div>
  );
}

export default EvenNumberList;