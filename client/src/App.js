import React, { Component } from 'react';
import './App.css';
import ToDoContainer from './Components/ToDoContainer/ToDoContainer';

class App extends Component {
  state = {
    // this is all static test data
    toDosInProgress: [
      {
        id: 1,
        name: 'get in shape'
      },
      {
        id: 2,
        name: 'shower'
      },
      {
        id: 3,
        name: 'finish basicly'
      }
    ],
    toDosCompleted: [
      {
        id: 4,
        name: 'get in shape'
      },
      {
        id: 5,
        name: 'shower'
      },
      {
        id: 6,
        name: 'finish basicly'
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

  // render the component
  render() {
    return (
      <div className="App">
        <h1>Welcome to Basicly</h1>
        <ToDoContainer
          toDosInProgress={this.state.toDosInProgress}
          toDosCompleted={this.state.toDosCompleted}
        />
      </div>
    );
  }
}

export default App;
