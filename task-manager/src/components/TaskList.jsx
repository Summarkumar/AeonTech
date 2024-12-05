import React from 'react';

const TaskList = ({ tasks, onDeleteTask, onToggleCompletion }) => {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className="task-item">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleCompletion(index)}
            className="task-checkbox"
          />
          <span
            className={`task-text ${task.completed ? 'completed' : ''}`}
          >
            {task.text}
          </span>
          <button
            className="edit-btn"
            onClick={() => {
              const newText = prompt("Edit task:", task.text);
              if (newText && newText.trim() !== "") {
                const updatedTasks = [...tasks];
                updatedTasks[index].text = newText;
                onToggleCompletion(index); // Update task completion if needed
              }
            }}
          >
            Edit
          </button>
          <button
            className="delete-btn"
            onClick={() => onDeleteTask(index)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
