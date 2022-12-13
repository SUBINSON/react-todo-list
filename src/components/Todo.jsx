import './Todo.css';
import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

export default function Todo({ setTodoOpen }) {
  const [todos, setTodos] = useState([
    { id: 1, text: '일어나기', checked: false },
    { id: 2, text: '잠자기', checked: true },
  ]);

  const handleInput = (text) => {
    const todo = {
      id: Math.random(),
      text,
      checked: false,
    };
    setTodos([...todos, todo]);
  };

  return (
    <div className="todo-container">
      <div className="todo-inform">
        <span className="today">2022 December</span>
        <button
          className="todo-button"
          onClick={() => {
            setTodoOpen(false);
          }}
        >
          ×
        </button>
      </div>
      <TodoInput handleInput={handleInput} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
