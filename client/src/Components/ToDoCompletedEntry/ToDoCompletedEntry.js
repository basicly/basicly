import React from 'react';
import './ToDoCompletedEntry.css';

const toDoCompletedEntry = (props) => {
  return (
    <div className="ToDoCompleted">
      <label>
        <input
          type="checkbox"
          checked
        />
        {props.toDoCompleted.name}
        <div className="DateContainer">12/25/2017</div>
      </label>
    </div>
  );
};

export default toDoCompletedEntry;
