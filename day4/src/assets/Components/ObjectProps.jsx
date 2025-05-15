const UserInfo = (props) => {
  const { name, email, phone } = props.user;

  return (
    <div>
      <h2>User Info:</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};

const ObjectProps = () => {
  const user = {
    name: 'Alice Johnson',
    email: 'alice@example.com',
    phone: '123-456-7890'
  };

  return (
    <div>
      <UserInfo user={user} />
    </div>
  );
};

export default ObjectProps;