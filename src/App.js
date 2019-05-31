import React from 'react';
import Todos from './components/Todos';
import './App.css';

function App() {

  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      }, {
        id: 2,
        title: "Buy milk and bread",
        completed: false
      }, {
        id: 3,
        title: "Fill the gas",
        completed: false
      }, {
        id: 4,
        title: "Get a new car",
        completed: false
      }, {
        id: 5,
        title: "Go to gym",
        completed: false
      }
    ]
  }

  return (
    <div className="App">
      <h2>
        <code>Hello world!!!</code>
        <Todos />
      </h2>
    </div>
  );
}

export default App;
