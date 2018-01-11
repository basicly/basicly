import React from 'react';
import './ToDoHeader.css';

// import the user icon
// import userIcon from './images/user-icon.png';

const toDoHeader = (props) => {
  return (
    <div className="toDoHeader">
      <button 
        className="button"
        onClick={props.createToDoClicked}>
        Add To Do
      </button>
      {/* <span className="userIconContainer"><img className="userIcon" src={userIcon} alt="User Icon"/></span> */}
      <span className="due">Due</span>
    </div>
  );
};

export default toDoHeader;
