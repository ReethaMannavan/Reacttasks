function EventObjectButton() {
  const handleClick = (event) => {
    console.log('Event object:', event);
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}

export default EventObjectButton;