const fruits = ["Apple", "Banana", "Cherry"]; 
 
const FruitListNonUnique = () => { 
  return ( 
    <ul> 
      {fruits.map((fruit) => ( 
        <li>{fruit}</li> 
             ))} 
    </ul> 
  ); 
}; 

export default FruitListNonUnique;