import React, { useState } from 'react';

function TodoApp() {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('Work');
  const [todos, setTodos] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: task,
        category,
        completed: false,
      },
    ]);
    setTask('');
    setCategory('Work'); 
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h1>My To-Do List</h1>
      <form onSubmit={addTask} className="todo-form">
        <input
          type="text"
          placeholder="Add a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="todo-input"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="category-select"
        >
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Shopping">Shopping</option>
        </select>

        <button type="submit" className="add-btn">
          Add
        </button>
      </form>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
          >
            <div onClick={() => toggleComplete(todo.id)} className="todo-text">
              {todo.text}
              <span className={`category-tag ${todo.category.toLowerCase()}`}>
                {todo.category}
              </span>
            </div>
            <button onClick={() => deleteTask(todo.id)} className="delete-btn">
              &times;
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && <p className="empty-msg">No tasks yet! Add one above.</p>}
    </div>
  );
}

export default TodoApp;