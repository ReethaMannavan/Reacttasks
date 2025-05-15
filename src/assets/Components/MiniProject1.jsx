function Profile({ name, age, bio }) {
  return (
    <div className="profile-container">
      <h2 className="profile-name">{name}</h2>
      <p className="profile-age">Age: {age}</p>
      <p className="profile-bio">{bio}</p>
    </div>
  );
}

function PersonalBio() {
  return (
    <div>
      <Profile 
        name="Reetha"
        age={32}
        bio="A passionate Full Stack developer who loves coffee and hiking."
      />
    </div>
  );
}

export default PersonalBio;
