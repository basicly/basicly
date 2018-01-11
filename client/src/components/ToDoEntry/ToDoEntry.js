import React from 'react';
import './ToDoEntry.css';

const toDoEntry = (props) => {
  let statusColor = null;

  if (props.toDo.isCompleted) {
    statusColor = 'completed';
  } else {
    statusColor = 'inProgress';
  }

  return (
    <div className="toDoEntry">
      <span className={statusColor}>&#10004;</span>
      <span>{props.toDo.description}</span>
      <span className="dateContainer">Sep 8</span>
    </div>
  );
};

export default toDoEntry;
