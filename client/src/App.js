import React, { Component } from 'react';
import './App.css';
import ToDoContainer from './Components/ToDoContainer/ToDoContainer';

class App extends Component {
  state = {
    // this is all static test data
    toDoList: [
      {
        id: 1,
        name: 'get in shape',
        isCompleted: false
      },
      {
        id: 2,
        name: 'shower',
        isCompleted: true
      },
      {
        id: 3,
        name: 'finish basicly',
        isCompleted: false
      }
    ]
  }

  componentDidMount = () => {
    // this is an example get request that calls our server
    fetch('/api')
      .then((results) => results.json())
      .then((data) => {
        console.log(data);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to Basicly</h1>
        <ToDoContainer
          toDoInProgressList={this.state.toDoList.filter(toDo => !toDo.isCompleted)}
          toDoCompletedList={this.state.toDoList.filter(toDo => toDo.isCompleted)}
        />
      </div>
    );
  }
}

export default App;
