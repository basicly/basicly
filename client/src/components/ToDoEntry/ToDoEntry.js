import React from 'react';
import './ToDoEntry.css';
import moment from 'moment';

const toDoEntry = (props) => {
  let statusColor = null;

  if (props.toDo.isCompleted) {
    statusColor = 'completed';
  } else {
    statusColor = 'inProgress';
  }

  return (
    <div className="toDoEntry">
      <span className={statusColor} onClick={() => props.toggleTodo(props.toDo.id, props.toDo.isCompleted)}>&#10004;</span>
      <span>{props.toDo.description}</span>
      <span className="dateContainer">{props.toDo.dueDate}</span>
    </div>
  );
};

export default toDoEntry;
