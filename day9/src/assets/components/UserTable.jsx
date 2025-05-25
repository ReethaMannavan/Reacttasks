import React from 'react';

const users = [
  { id: 1, name: 'Nisha', email: 'nisha.reetha30@gmail.com' },
  { id: 2, name: 'Geetha', email: 'geethugeetha@gmail.com' },
  { id: 3, name: 'Karthiga', email: 'karthi1998@gmail.com' }
];

const UserTable = () => {
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <React.Fragment key={user.id}>
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;