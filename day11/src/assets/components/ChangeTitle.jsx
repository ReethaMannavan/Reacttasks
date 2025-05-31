import { useState,useEffect } from "react";

const ChangeTitle=()=>{

    const[count,setCount]=useState(0);
useEffect(()=>{

    document.title=`Title changed:${count} times`;

},[count])

return(
  <>
  <h2>Count: {count}</h2>
<button onClick={()=>setCount(count+1)}>Increase</button>
  
  </>
)

}

export default ChangeTitle;