const Fruits = ["Apple", "Kiwi", "Strawberry"];

const FruitsList =()=>{
    return(
        <>
        <ul>
            {Fruits.map((fruit,index)=>(
                <li key ={index}>
                    {fruit}
                </li>
            ))}
        </ul>
        
        </>
    )
}

export default FruitsList;