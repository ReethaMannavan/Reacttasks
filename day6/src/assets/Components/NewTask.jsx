import React, { useState } from 'react';

function NewTask() {
  const [tasks, setTasks] = useState([
    'Buy groceries',
    'Walking',
    'Read a book'
  ]);

  const addTask = () => {
    // Add a new task to the list
    setTasks(prevTasks => [...prevTasks, 'Jogging']);
  };

  return (
    <div>
      <h2>Tasks:</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default NewTask;