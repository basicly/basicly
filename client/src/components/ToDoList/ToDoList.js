import React from 'react';
import './ToDoList.css';

// import the ToDoInProgressEntry component
import ToDoEntry from '../ToDoEntry/ToDoEntry';

const toDoList = (props) => {
  return (
    <div className="toDoList">
      <div className="category">{props.category}:</div>
      {props.toDos.map((toDo) => {
        if (props.category === 'Completed' && toDo.isCompleted === true) {
          return (
            <ToDoEntry
              key={toDo.id}
              toDo={toDo}
              toggleTodo={props.toggleTodo}
            />
          );
        }

        if (props.category === 'In Progress' && toDo.isCompleted === false) {
          return (
            <ToDoEntry
              key={toDo.id}
              toDo={toDo}
              toggleTodo={props.toggleTodo}
            />
          );
        }
      })}
    </div>
  );
};

export default toDoList;
