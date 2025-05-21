function UserList() {
  const users = [
    { id: 1, name: 'Alice', age: 28 },
    { id: 2, name: 'Bob', age: 34 },
    { id: 3, name: 'Charlie', age: 22 },
    { id: 4, name: 'Diana', age: 30 }
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} is {user.age} years old.
        </li>
      ))}
    </ul>
  );
}

export default UserList;