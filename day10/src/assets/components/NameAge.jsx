import { useState, useEffect } from "react";

const UserNameAge = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    console.log(`name changed to ${name}`);
  }, [name]);

  useEffect(() => {
    console.log(`Age changed to ${age}`);
  }, [age]);

  return (
    <>
      <div className="name-age">
        <div className="name">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br></br>
        <div className="age">
          <label>Age:</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </div>
      </div>
    </>
  );
};

export default UserNameAge;
