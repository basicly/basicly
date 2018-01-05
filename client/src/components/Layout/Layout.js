import React from 'react';
import './Layout.css';

// import the ToDoContainer component
import ToDoContainer from '../ToDoContainer/ToDoContainer';

const layout = (props) => (
  <div className="Layout">
    <p className="Header">basicly</p>
    <ToDoContainer />
  </div>
);

export default layout;
