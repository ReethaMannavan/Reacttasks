function HobbyList({ hobbies }) {
  return (
    <div className="hobby-list-container">
      <h3>My Hobbies</h3>
      <ul className="hobby-list">
        {hobbies.map((hobby, index) => (
          <li key={index} className="hobby-item">
            {hobby}
          </li>
        ))}
      </ul>
    </div>
  );
}




function HobbyArray() {
  const hobbies = ['Reading', 'Gaming', 'Hiking', 'Cooking'];

  return (
    <div>
      <HobbyList hobbies={hobbies} />
    </div>
  );
}

export default HobbyArray;