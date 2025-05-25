import React from 'react';

const tasks = [
  { id: 1, title: 'Write report', completed: false},
  { id: 2, title: 'Attend meeting', completed: true },
  { id: 3, title: 'Fix bugs', completed: true },
  { id: 4, title: 'Update docs', completed: false }
];

const CompletedTaskList = () => {
  return (
    <React.Fragment>
         <ul>
      {tasks
        .filter(task => task.completed)
        .map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
    </ul>
    </React.Fragment>
   
  );
};

export default CompletedTaskList;