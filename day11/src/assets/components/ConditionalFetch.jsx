import { useState } from 'react';

function ConditionalFetch() {
  const [users, setUsers] = useState([]);
  const [hasfetched, setHasfetched] = useState(false);

  const handleFetch = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setHasfetched(true);
        console.log('Data fetched:', data);
      })
      .catch(err => {
        console.error('Fetch error:', err);
      });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Conditional API Fetch</h2>
      <button onClick={handleFetch}>Fetch Users</button>

      {hasfetched && (
        <ul style={{ marginTop: '20px' }}>
          {users.map(user => (
            <li key={user.id}>
            {user.name} — ({user.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ConditionalFetch;