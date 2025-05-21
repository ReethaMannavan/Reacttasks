function TaskList() {
  const tasks = [
    { id: 1, title: 'Write report', completed: true },
    { id: 2, title: 'Attend meeting', completed: false },
    { id: 3, title: 'Review code', completed: true },
    { id: 4, title: 'Plan sprint', completed: false }
  ];

  return (
    <ul style={{ padding: 0 }}>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{
            backgroundColor: task.completed ? '#e0ffe0' : '#fff',
            textDecoration: task.completed ? 'line-through' : 'none',
            color: task.completed ? 'green' : 'black',
            padding: '10px',
            marginBottom: '5px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            listStyleType: 'none'
          }}
        >
          {task.title}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;