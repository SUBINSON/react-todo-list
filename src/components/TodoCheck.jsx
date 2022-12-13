import React from 'react';

export default function TodoCheck({ todo, todos, setTodos }) {
  const { id, text, checked } = todo;

  const handleClick = (event) => {
    setTodos(
      todos.map((todo) =>
        String(todo.id) === event.target.id
          ? { ...todo, checked: !todo.checked }
          : todo
      )
    );
  };

  const handleDelete = (event) => {
    setTodos(todos.filter((todo) => String(todo.id) !== event.target.id));
  };

  return (
    <li className="todo-list">
      <button id={id} className="check-button" onClick={handleClick}>
        {checked ? '🎄' : '🌲'}
      </button>
      <span>{text}</span>
      <button id={id} className="todo-button" onClick={handleDelete}>
        -
      </button>
    </li>
  );
}
