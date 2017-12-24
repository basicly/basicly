import React from 'react';
import './ToDoContainer.css';

// import the ToDoInProgressList component
import ToDoInProgressList from '../ToDoInProgressList/ToDoInProgressList';

const toDoContainer = (props) => {
  return (
    <div className="ToDoContainer">
      <ToDoInProgressList
        toDoInProgressList={props.toDoInProgressList}
      />
    </div>
  );
};

export default toDoContainer;
