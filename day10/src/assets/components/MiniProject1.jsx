import { useEffect, useState } from "react"; 
const TitleUpdateMini = () => { 
  const [count, setCount] = useState(0); 
 
  useEffect(() => { 
    document.title = `Clicked ${count} times`; 
  }, [count]); 
 
  return ( 
    <div> 
      <h2>Button Clicked {count} times</h2> 
      <button onClick={() => setCount(count + 1)}>Click Me</button> 
    </div> 
  ); 
}; 
 
export default TitleUpdateMini;