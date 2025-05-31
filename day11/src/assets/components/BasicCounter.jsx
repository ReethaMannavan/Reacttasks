import { useState,useEffect } from "react";

const BasicCounter=()=>{

    const[count,setCount]=useState(0);


useEffect(()=>{

console.log(`count has been updated to:${count}`);

},[count])

return(
    <>
    <h2>Count is: {count}</h2>
<button onClick={()=>setCount(count+1)}>Increase Count</button>    

    
    </>
)

}

export default BasicCounter;

