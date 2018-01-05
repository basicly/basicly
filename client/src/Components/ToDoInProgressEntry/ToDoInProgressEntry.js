import React from 'react';
import './ToDoInProgressEntry.css';

const toDoInProgressEntry = (props) => {
  return (
    <div className="ToDoInProgress">
      <label>
        <input
          type="checkbox"
        />
        {props.toDoInProgress.name}
        <div className="DateContainer">1/1/2018</div>
      </label>
    </div>
  );
};

export default toDoInProgressEntry;
