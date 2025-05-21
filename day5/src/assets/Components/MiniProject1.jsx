function StudentList() {
  const students = [
    { id: 1, name: 'Alice', marks: 45 },
    { id: 2, name: 'Bob', marks: 55 },
    { id: 3, name: 'Charlie', marks: 65 },
    { id: 4, name: 'David', marks: 50 },
    { id: 5, name: 'Eve', marks: 70 },
  ];

  return (
    <div>
      <h2>Student Marks</h2>
      <ul>
        {students.map(student => (
          <li
            key={student.id}
            style={{
              color: student.marks > 50 ? 'green' : 'red',
              fontWeight: student.marks > 50 ? 'bold' : 'normal',
            }}
          >
            {student.name}: {student.marks}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;