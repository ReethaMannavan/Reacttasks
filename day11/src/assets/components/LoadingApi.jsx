import { useState, useEffect } from "react";

const DelayedApi = () => {

     const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Waiting to fetch user data...');

    const timer = setTimeout(() => {
      console.log('Fetching user data now...');
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
          setUsers(data);
          setLoading(false);
          console.log('User data fetched:', data);
        })
        .catch(error => {
          setLoading(false);
          console.error('Error fetching users:', error);
        });
    }, 5000); 

   
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h2>Delayed User Fetch</h2>
      {loading ? (
        <p>Loading users after some delay...</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DelayedApi;