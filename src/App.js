import React from 'react';

import './App.css';
import { Todo } from './Todo';

function App() {
  const { useState } = React;
  const [todos, setTodos] = useState([
    { name: 'react', id: 1 },
    { name: 'angular', id: 2 }
  ]);
  const [input, setInput] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [saveInput, setSaveInput] = useState('');

  const handleAdd = e => {
    e.preventDefault();
    setTodos([...todos, { id: Math.random(), name: input }]);
    setInput('');
  };

  //currying function
  const handleEdit = todo => () => {
    setIsEdit(true);
    setSaveInput(todo.name);
    setTodos(todos.filter(t => t.id !== todo.id));
  };

  const handSave = e => {
    e.preventDefault();
    setTodos([{ name: saveInput, id: Math.random() }, ...todos]);
    setSaveInput('');
    setIsEdit(false);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <form>
          Todo :{' '}
          <input value={input} onChange={e => setInput(e.target.value)}></input>
          <button onClick={e => handleAdd(e)}>add</button>
        </form>
        {isEdit && (
          <form>
            <input
              value={saveInput}
              onChange={e => setSaveInput(e.target.value)}
            ></input>
            <button onClick={handSave}>save</button>
          </form>
        )}
        {todos.map(todo => (
          <Todo key={todo.id} onEdit={handleEdit} todo={todo} />
        ))}
      </header>
    </div>
  );
}

export default App;
