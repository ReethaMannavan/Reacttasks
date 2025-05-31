
import { useEffect } from "react";

const ComponentMount =()=>
{
    useEffect(()=>{
        console.log("Runs only once when  starting of the component render - component mounts");

     return()=>{
        console.log("Remove it or clean up when the component unmounts");
        
     }
        
    },[]);
    return <h3>Check Console Output</h3>
}

export default ComponentMount;

