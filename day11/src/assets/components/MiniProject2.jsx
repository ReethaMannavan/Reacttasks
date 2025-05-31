import { useState, useEffect } from 'react';

const SearchFilterMini=()=> {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setFilteredUsers(data); 
      })
      .catch(err => {
        console.error('Error fetching users:', err);
      });
  }, []);

 
  useEffect(() => {
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  return (
    <div>
      <h2>User Search Filter</h2>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{ padding: '8px', width: '250px', marginBottom: '10px' }}
      />
      <ul>
        {filteredUsers.length > 0 ? (
          filteredUsers.map(user => (
            <li key={user.id}>
              {user.name} 
            </li>
          ))
        ) : (
          <li>No matching users found.</li>
        )}
      </ul>
    </div>
  );
}

export default SearchFilterMini;