const ClickButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Click Me
    </button>
  );
};


const Click = () => {
  
  const handleClick = () => {
    console.log("Button Clicked");
  };

  return (
    <div>
      <ClickButton onClick={handleClick} />
    </div>
  );
};

export default Click;