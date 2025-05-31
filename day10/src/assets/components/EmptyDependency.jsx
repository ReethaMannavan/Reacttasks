import { useEffect } from "react";

function EmptyDependency(){

useEffect(()=>{
    console.log("Component Mounted");
    
},[])

return <h3>example of Empty Dependency Array </h3>


}

export default EmptyDependency;