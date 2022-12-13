import React, { useState } from 'react';

export default function TodoInput({ handleInput }) {
  const [value, setValue] = useState('');

  const handleChange = (evnet) => {
    setValue(evnet.target.value);
  };
  const handleSubmit = (event) => {
    handleInput(value);
    setValue('');
    event.preventDefault();
  };

  return (
    <form className="todo-input-container" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        placeholder="write todo list"
        onChange={handleChange}
      />
      <button className="todo-button" type="submit">
        +
      </button>
    </form>
  );
}
