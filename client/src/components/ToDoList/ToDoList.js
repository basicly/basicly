import React from 'react';
import './ToDoList.css';

// import the ToDoInProgressEntry component
import ToDoEntry from '../ToDoEntry/ToDoEntry';

const toDoList = (props) => {
  let toDoEntries = (
    <span>Nothing here!</span>
  );

  if (props.toDos.length > 0) {
    toDoEntries = (
      props.toDos.map((toDo) => (
        <ToDoEntry
          key={toDo.id}
          toDo={toDo}
          toggleTodo={props.toggleTodo}
        />
      ))
    );
  }

  return (
    <div className="toDoList">
      <div className="category">{props.category}:</div>
      {toDoEntries}
    </div>
  );
};

export default toDoList;
