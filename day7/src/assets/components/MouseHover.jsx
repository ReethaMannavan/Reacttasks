function MouseOverButton() {
  const handleMouseOver = () => {
    console.log('Mouse Over');
  };

  return (
    <button onMouseOver={handleMouseOver}>
      Hover Over Me
    </button>
  );
}

export default MouseOverButton;