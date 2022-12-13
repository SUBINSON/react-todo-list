import React from 'react';

export default function Date({ setTodoOpen }) {
  return (
    <div className="calendar">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <button
        className="date day daychecked"
        onClick={() => {
          setTodoOpen(true);
        }}
      >
        1
      </button>
      <button
        className="date day"
        onClick={() => {
          setTodoOpen(true);
        }}
      >
        2
      </button>
      <button
        className="date sat"
        onClick={() => {
          setTodoOpen(true);
        }}
      >
        3
      </button>
      <button
        className="date sun"
        onClick={() => {
          setTodoOpen(true);
        }}
      >
        4
      </button>
      <button
        className="date day"
        onClick={() => {
          setTodoOpen(true);
        }}
      >
        5
      </button>
      <button
        className="date day daychecked"
        onClick={() => {
          setTodoOpen(true);
        }}
      >
        6
      </button>
      <button
        className="date day"
        onClick={() => {
          setTodoOpen(true);
        }}
      >
        7
      </button>
      <button
        className="date day"
        onClick={() => {
          setTodoOpen(true);
        }}
      >
        8
      </button>
      <button
        className="date day"
        onClick={() => {
          setTodoOpen(true);
        }}
      >
        9
      </button>
      <button
        className="date sat satchecked"
        onClick={() => {
          setTodoOpen(true);
        }}
      >
        10
      </button>
      <button
        className="date sun sunchecked"
        onClick={() => {
          setTodoOpen(true);
        }}
      >
        11
      </button>
      <button
        className="date day"
        onClick={() => {
          setTodoOpen(true);
        }}
      >
        12
      </button>
      <button
        className="date day dday"
        onClick={() => {
          setTodoOpen(true);
        }}
      >
        13
      </button>
      <button
        className="date day "
        onClick={() => {
          setTodoOpen(true);
        }}
      >
        14
      </button>
      <button
        className="date day"
        onClick={() => {
          setTodoOpen(true);
        }}
      >
        15
      </button>
      <button
        className="date day"
        onClick={() => {
          setTodoOpen(true);
        }}
      >
        16
      </button>
      <button
        className="date sat"
        onClick={() => {
          setTodoOpen(true);
        }}
      >
        17
      </button>
      <button
        className="date sun"
        onClick={() => {
          setTodoOpen(true);
        }}
      >
        18
      </button>
      <button
        className="date day"
        onClick={() => {
          setTodoOpen(true);
        }}
      >
        19
      </button>
      <button
        className="date day"
        onClick={() => {
          setTodoOpen(true);
        }}
      >
        20
      </button>
      <button
        className="date day"
        onClick={() => {
          setTodoOpen(true);
        }}
      >
        21
      </button>
      <button
        className="date day"
        onClick={() => {
          setTodoOpen(true);
        }}
      >
        22
      </button>
      <button
        className="date day"
        onClick={() => {
          setTodoOpen(true);
        }}
      >
        23
      </button>
      <button
        className="date sat"
        onClick={() => {
          setTodoOpen(true);
        }}
      >
        24
      </button>
      <button
        className="date sun"
        onClick={() => {
          setTodoOpen(true);
        }}
      >
        25
      </button>
    </div>
  );
}
