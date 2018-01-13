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

  // updates the state when the search text changes
  searchTextChangeHandler = (event) => {
    const updatedText = event.target.value;

    this.setState({
      searchText: updatedText
    });
  }

  render() {
    return (
      <div className="layout">
        <NavBar
          searchText={this.state.searchText}
          searchTextChangeHandler={this.searchTextChangeHandler}
        />
        <ToDoContainer
          searchText={this.state.searchText}
        />
      </div>
    );
  }
}

export default layout;
