import React from 'react';
import './Layout.css';

// import the ToDoContainer component
import ToDoContainer from '../ToDoContainer/ToDoContainer';

const layout = (props) => (
  <div className="layout">
    <p className="header">basicly</p>
    <ToDoContainer />
  </div>
);

export default layout;
