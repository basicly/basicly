import React from 'react';
import './ToDoInProgressList.css';

// import the ToDoInProgressEntry component
import ToDoInProgressEntry from '../ToDoInProgressEntry/ToDoInProgressEntry';

const toDoInProgressList = (props) => {
  return (
    <div className="ToDoInProgressList">
      {props.toDosInProgress.map((toDoInProgress) => {
        return (
          <ToDoInProgressEntry
            key={toDoInProgress.id}
            toDoInProgress={toDoInProgress}
          />
        );
      })}
    </div>
  );
};

export default toDoInProgressList;
