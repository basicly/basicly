import React from 'react';
import './ToDoList.css';

// import the ToDoInProgressEntry component
import ToDoEntry from '../ToDoEntry/ToDoEntry';

const toDoList = (props) => {
  return (
    <div className="toDoList">
      <div className="category">{props.category}:</div>
      {props.toDos.map((toDo) => {
        return (
          <ToDoEntry
            key={toDo.id}
            toDo={toDo}
          />
        );
      })}
    </div>
  );
};

export default toDoList;
