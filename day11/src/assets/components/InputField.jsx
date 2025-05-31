import { useState,useEffect } from "react";

const InputField =()=>{

    const[input,setInput]=useState('');

    useEffect(()=>{

console.log(`Input given : ${input}`);

    },[input])

    return(
        <>
       <label>Input is: {input}</label>
       <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}></input>

        </>
    )

}

export default InputField;