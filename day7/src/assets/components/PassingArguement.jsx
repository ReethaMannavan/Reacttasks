const ButtonClick = () => { 
  const handleClick = (name) => { 
    alert(`Hello, ${name}`); 
  }; 
 
  return <button onClick={() => handleClick("John")}>Click Me</button>; 
}; 
 
export default ButtonClick;