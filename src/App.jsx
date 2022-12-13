import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Calendar from './components/Calendar';
import Todo from './components/Todo';

function App() {
  const [todoOpen, setTodoOpen] = useState(false);

  return (
    <div>
      <Header />
      {todoOpen === true ? <Todo setTodoOpen={setTodoOpen} /> : null}
      <div className="container">
        <Calendar setTodoOpen={setTodoOpen} />
      </div>
    </div>
  );
}

export default App;
