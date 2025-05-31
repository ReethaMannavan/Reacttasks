import  { useEffect } from 'react';

function DataFetch() {
  useEffect(() => {
    console.log('Fetching Data...');
    
   
    setTimeout(() => {
      console.log('Data fetched successfully!');
    }, 2000); 
  }, []); 

  return <div>Loading data..</div>;
}

export default DataFetch;