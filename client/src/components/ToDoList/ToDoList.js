import React from 'react';
import './ToDoList.css';

// import the ToDoInProgressEntry component
import ToDoEntry from '../ToDoEntry/ToDoEntry';

const toDoList = (props) => {
  // the default value when no to do's are in the list
  let toDoEntries = (
    <span>Nothing here!</span>
  );

  // when to do's are found, dynamically populate each entry in the list
  if (props.toDos.length > 0) {
    toDoEntries = (
      props.toDos.map((toDo) => (
        <ToDoEntry
          key={toDo.id}
          toDo={toDo}
          toggleTodo={props.toggleTodo}
          deleteToDo={props.deleteToDo}
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
