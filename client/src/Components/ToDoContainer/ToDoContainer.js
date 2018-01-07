import React, { Component } from 'react';
import './ToDoContainer.css';

// import the ToDoInProgressList component
import ToDoInProgressList from '../ToDoInProgressList/ToDoInProgressList';

// import the ToDoCompletedList component
import ToDoCompletedList from '../ToDoCompletedList/ToDoCompletedList';

class ToDoContainer extends Component {
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
        name: 'blah blah blah'
      },
      {
        id: 5,
        name: 'done it'
      },
      {
        id: 6,
        name: 'finished already'
      }
    ]
  }

  render() {
    return (
      <div className="ToDoContainer">
        <ToDoInProgressList
          toDosInProgress={this.state.toDosInProgress}
        />
        <ToDoCompletedList
          toDosCompleted={this.state.toDosCompleted}
        />
      </div>
    );
  }
}

export default ToDoContainer;
