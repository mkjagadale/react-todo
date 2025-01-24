import './App.css';
import React from 'react';
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container">
      <h1 className='text-uppercase text-center my-2'>Todo App</h1>
      <div className='row'>
        <div className="col-8 col-md-6 mx-auto mt-2">
          <TodoList/>
        </div>
      </div>
    </div>
  );
}

export default App;
