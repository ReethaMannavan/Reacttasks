function ClickButtonfn() {
  const handleClick = () => {
    alert('Button was clicked!');
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}

export default ClickButtonfn;