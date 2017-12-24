import React, { Component } from 'react';
import './App.css';
import ToDoContainer from './Components/ToDoContainer/ToDoContainer';

class App extends Component {
  state = {

  }

  componentDidMount = () => {
    // this is an example get request that calls our server
    fetch('/api')
      .then(results => results.json())
      .then((data) => {
        console.log(data);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to Basicly</h1>
        <ToDoContainer
        />
      </div>
    );
  }
}

export default App;
