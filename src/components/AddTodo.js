import React, { useState } from 'react';
import { useTodoContext } from '../TodoContext';

const AddTodo = () => {
  const { addTodo } = useTodoContext();
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };

  const buttonStyle = {
    fontFamily: 'Georgia, serif',
    fontSize: '1rem',
    marginLeft: '0.5rem',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" style={buttonStyle}>ADD</button>
      </form>
    </div>
  );
};

export default AddTodo;
