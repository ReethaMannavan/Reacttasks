import React, { useState } from 'react';

function RemoveTasksMini() {
  const [tasks, setTasks] = useState([
    'Buy groceries',
    'Walk the dog',
    'Read a book'
  ]);

  const addTask = () => {
    const newTask = `New Task ${tasks.length + 1}`;
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const removeLastTask = () => {
    setTasks(prevTasks => prevTasks.slice(0, -1)); // Remove last item
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
      <button onClick={removeLastTask} disabled={tasks.length === 0}>
        Remove Last Task
      </button>
    </div>
  );
}

export default RemoveTasksMini;