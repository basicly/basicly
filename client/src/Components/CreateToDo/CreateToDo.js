import React from 'react';
import './CreateToDo.css';

// import the user icon
// import userIcon from './images/user-icon.png';

const createToDo = (props) => {
  return (
    <div className="createToDo">
      <button className="button">Add To Do</button>
      {/* <span className="userIconContainer"><img className="userIcon" src={userIcon} alt="User Icon"/></span> */}
      <span className="due">Due</span>
    </div>
  );
};

export default createToDo;
