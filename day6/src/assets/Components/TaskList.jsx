import React, { useState } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([
    'Buy groceries',
    'Jogging',
    'Read a book'
  ]); // Initial array of tasks

  return (
    <div>
      <h2>Tasks:</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li> // Display each task
        ))}
      </ul>
    </div>
  );
}

export default TaskList;