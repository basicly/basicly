import React from 'react';
import './ToDoContainer.css';

// import the ToDoInProgressList component
import ToDoInProgressList from '../ToDoInProgressList/ToDoInProgressList';

// import the ToDoCompletedList component
import ToDoCompletedList from '../ToDoCompletedList/ToDoCompletedList';

const toDoContainer = (props) => {
  return (
    <div className="ToDoContainer">
      <ToDoInProgressList
        toDosInProgress={props.toDosInProgress}
      />
      <ToDoCompletedList
        toDosCompleted={props.toDosCompleted}
      />
    </div>
  );
};

export default toDoContainer;
