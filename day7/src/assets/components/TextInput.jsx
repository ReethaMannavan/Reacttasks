import { useState } from "react"; 
 
const TextInput = () => { 
  const [text, setText] = useState(""); 
 
  return ( 
    <div> 
      <input 
        type="text" 
        value={text} 
          onChange={(e) => setText(e.target.value)} 
      /> 
      <p>You typed: {text}</p> 
    </div> 
  ); 
}; 
 
export default TextInput; 