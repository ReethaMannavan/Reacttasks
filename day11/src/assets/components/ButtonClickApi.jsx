import  { useState, useEffect } from 'react';

const ButtonFetchApi=()=> {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetchTrigger, setFetchTrigger] = useState(0);

  
  useEffect(() => {
    if (fetchTrigger === 0) return; 

    setLoading(true);
    setError(null);

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [fetchTrigger]);

  return (
    <div>
      <h2>Fetch Users with useEffect on Button Click</h2>
      <button onClick={() => setFetchTrigger(prev => prev + 1)} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Users'}
      </button>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ButtonFetchApi;