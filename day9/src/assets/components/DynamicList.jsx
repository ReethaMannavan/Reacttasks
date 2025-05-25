const users = ['Daryl', 'Rick', 'Negan', 'Carol'];

const UserList = () => {
  return (
    <ul>
      {users.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
};

export default UserList;