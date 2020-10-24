import React from 'react';

export const Todo = ({ todo, onEdit }) => {
  return (
    <>
      <p>{todo.name}</p>
      <button onClick={onEdit(todo)}>edit</button>
      <button>x</button>
    </>
  );
};
