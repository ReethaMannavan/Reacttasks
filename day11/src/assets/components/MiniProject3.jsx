import { useState, useEffect } from "react";

const ToggleApi = () => {
  const [users, setUsers] = useState([]);
  const [showData, setShowdata] = useState(false);
  const [datafetched, setDatafetched] = useState(false);
  useEffect(() => {
    if (showData && !datafetched) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
          setUsers(data);
          setDatafetched(true);
        })
        .catch((err) => console.error("Error fetching data:", err));
    }
  }, [showData, datafetched]);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setShowdata((prev) => !prev)}>
        {showData ? "Hide Users" : "Show Users"}
      </button>

      {showData && (
        <ul style={{ marginTop: 20 }}>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ToggleApi;
