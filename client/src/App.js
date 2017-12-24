import React, { Component } from 'react';
import './App.css';

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
        <header className="App-header">
          <h1 className="App-title">Welcome to Basicly</h1>
        </header>
        <p className="App-intro">
          ^_^
        </p>
      </div>
    );
  }
}

export default App;
