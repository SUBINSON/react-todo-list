import React from 'react';
import TodoCheck from './TodoCheck';

export default function TodoList({ todos, setTodos }) {
  return (
    <div className="todo-list-container">
      <ul className="todos-list">
        {todos.map((todo) => (
          <TodoCheck
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
}
