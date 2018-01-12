import React, { Component } from 'react';
import './Layout.css';

// import the ToDoContainer component
import ToDoContainer from '../ToDoContainer/ToDoContainer';

// import NavBar component
import NavBar from '../NavBar/NavBar';

class layout extends Component {
  state = {
    searchText: ''
  }

  render() {
    return (
      <div className="navbar">{console.log('layout', this.props)}
        <NavBar />
        <div className="layout">
          <p className="header">basicly</p>
          <ToDoContainer />
        </div>
      </div>
    );
  }
}

export default layout;
