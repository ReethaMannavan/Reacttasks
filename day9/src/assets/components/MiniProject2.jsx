import React from 'react';

const users = [
  { id: 101, name: 'Nisha', age:32 },
  { id: 102, name: 'Geetha', age: 30 },
  { id: 103, name: 'Karthiga', age: 28 }
];

const UserTableMini = () => {
  return (
    <table className="user-table">
      <thead>
        <tr>
          <th className="header-cell">Name</th>
          <th className="header-cell">Age</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <React.Fragment key={user.id}>
            <tr className="table-row">
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default UserTableMini;