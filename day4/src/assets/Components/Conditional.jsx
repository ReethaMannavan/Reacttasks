const Welcome = ({ name }) => {
  return (
    <h1>Welcome, {name ? name : 'Guest'}</h1>
  );
};

const Conditional = () => {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome />
    </div>
  );
};

export default Conditional;