import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
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
        completed: true
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

  // Toggle todo list
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }
  //delete todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  render() {
    return (
      <div className="App">
        <h2>
          <code>Todo List</code>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </h2>
      </div>
    )
  }
}

export default App;
