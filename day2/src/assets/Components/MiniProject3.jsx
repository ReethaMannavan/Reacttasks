const Calculator = () => {
  const num1 = 5;
  const num2 = 10;
  const sum = num1 + num2;

  return (
    <div>
      <h2>Calculator</h2>
      <p>Number One: {num1}</p>
      <p>Number Two: {num2}</p>
      <p>Sum: {sum}</p>
    </div>
  );
};

export default Calculator;