const Profile = ({ name, age, city }) => {
    const styling = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    width: "300px",
    margin: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    backgroundColor:'lightpink'
  };
  return (
    <div style={styling}>
      <h2>Profile Info</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>City:</strong> {city}</p>
    </div>
  );
};

Profile.defaultProps = {
  name: 'Unknown',
  age: 'N/A',
  city: 'Not specified'
};


const ProfileCard = () => {
  return (
    <div>
      <Profile name="Reetha" age={32} city="Doha" />
    </div>
  );
};

export default ProfileCard;