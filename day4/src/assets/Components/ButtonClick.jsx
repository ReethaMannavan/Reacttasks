const Button = ({ onClick }) => { 
  return <button onClick={onClick}>Click Me</button>; 
}; 



const ButtonClick = () => { 
  const showAlert = () => { 
    alert("Button clicked!"); 
  }; 
  return <Button onClick={showAlert} />; 
}; 
export default ButtonClick;