import { useEffect,useState } from "react";

const FetchApiList = () => {
 
const[users,setUsers]=useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
  <>
<h3>User List</h3>
<ul>
  {users.map((user)=>(
    <li key={user.id}  style={{ padding: '10px', marginBottom: '10px' }} ><p></p><strong>ID:</strong>{user.id} - <strong>Name:</strong> {user.name} - <strong>Mail-id:</strong> {user.email}</li>
  ))

  }
</ul>
  </>
  
  );
};

export default FetchApiList;
