import React, { useState } from 'react';

function TodoItem({ todo }) {
  const [isCompleted, setIsCompleted] = useState(todo.completed);

  const toggleCompletion = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div 
      onClick={toggleCompletion} 
      style={{ 
        textDecoration: isCompleted ? 'line-through' : 'none',
        cursor: 'pointer',
        padding: '10px',
        border: '1px solid #ccc',
        margin: '5px 0'
      }}
    >
      <h3>{todo.task}</h3>
      <p>Status: {isCompleted ? "✅ Completed" : "❌ Not Completed"}</p>
    </div>
  );
}

export default TodoItem;
