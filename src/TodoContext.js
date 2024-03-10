import React, { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const addTodo = (task) => {
    const newTodo = { id: Date.now(), task, completed: false };
    setTodos([...todos, newTodo]);
  };

  const editTodo = (id, newTask) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, task: newTask } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const markAsCompleted = (id) => {
    const completedTodo = todos.find(todo => todo.id === id);
    setCompletedTodos([...completedTodos, completedTodo]);
    deleteTodo(id);
  };

  return (
    <TodoContext.Provider value={{ todos, completedTodos, addTodo, editTodo, deleteTodo, markAsCompleted }}>
      {children}
    </TodoContext.Provider>
  );
};
