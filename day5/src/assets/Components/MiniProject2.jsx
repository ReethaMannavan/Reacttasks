import React, { useState } from 'react';

function TodoApp() {
 
  const initialTasks = [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a To-Do App', completed: false },
    { id: 3, text: 'Master JavaScript', completed: false },
  ];

 
  const [tasks, setTasks] = useState(initialTasks);

  
  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>My To-Do List</h2>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              color: task.completed ? 'green' : 'black',
            }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
