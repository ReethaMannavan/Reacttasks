const ClickButton = () => { 
  const handleClick = () => { 
    console.log ("Button Clicked!"); 
   
  }; 
 
  return <button onClick={handleClick}>Click Me</button>; 
}; 
 
export default ClickButton; 