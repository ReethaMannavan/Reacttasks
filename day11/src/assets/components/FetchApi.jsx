import { useEffect } from "react";

const FetchApi = () => {
 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log("User data:", data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
  <>
<h3>Check Console to see User List</h3>
  </>
  
  );
};

export default FetchApi;
