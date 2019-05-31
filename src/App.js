import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import Addtodo from './components/Addtodo';
import uuid from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Take out the trash",
        completed: false
      }, {
        id: uuid.v4(),
        title: "Buy milk and bread",
        completed: false
      }, {
        id: uuid.v4(),
        title: "Fill the gas",
        completed: true
      }, {
        id: uuid.v4(),
        title: "Get a new car",
        completed: false
      }, {
        id: uuid.v4(),
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

  //add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Addtodo addTodo={this.addTodo} />
          <h2>
            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
          </h2>
        </div>
      </div>
    )
  }
}

export default App;
