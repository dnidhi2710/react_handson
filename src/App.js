import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import Addtodo from './components/Addtodo';
import uuid from 'uuid';
import About from './components/pages/About';
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
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Addtodo addTodo={this.addTodo} />
                <h4>
                  <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                </h4>
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />

          </div>
        </div>
      </Router>
    )
  }
}

export default App;
