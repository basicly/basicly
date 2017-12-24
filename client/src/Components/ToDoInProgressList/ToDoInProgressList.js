import React from 'react';
import './ToDoInProgressList.css';

// import the ToDoInProgressEntry component
import ToDoInProgressEntry from '../ToDoInProgressEntry/ToDoInProgressEntry';

const toDoInProgressList = (props) => {
  return (
    <div className="ToDoInProgressList">
      {props.toDoInProgressList.map((toDo) => {
        return (
          <ToDoInProgressEntry
            toDo={toDo}
          />
        );
      })}
    </div>
  );
};

export default toDoInProgressList;
