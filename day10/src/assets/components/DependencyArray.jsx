import {useState,useEffect} from 'react';

const DependencyArray=()=>{
const [counter,setCounter] = useState(0);

useEffect(()=>{
    console.log(`counter ${counter}`);


    
},[counter]);

return(
    <>
    <p>Counter : {counter}</p>
    <button onClick={()=>setCounter(counter+1)}>Increment</button>
    </>
)


}

export default DependencyArray;