import React from 'react';
import Date from './Date';

export default function Calendar({ setTodoOpen }) {
  return (
    <div>
      <div className="calendar-box">
        <Date setTodoOpen={setTodoOpen} />
      </div>
    </div>
  );
}
