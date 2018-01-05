import React from 'react';
import './ToDoCompletedList.css';

// import the ToDoInProgressEntry component
import ToDoCompletedEntry from '../ToDoCompletedEntry/ToDoCompletedEntry';

const toDoCompletedList = (props) => {
  return (
    <div className="ToDoCompletedList">
      <form>
        {props.toDosCompleted.map((toDoCompleted) => {
          return (
            <ToDoCompletedEntry
              key={toDoCompleted.id}
              toDoCompleted={toDoCompleted}
            />
          );
        })}
      </form>
    </div>
  );
};

export default toDoCompletedList;
