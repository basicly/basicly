import React from 'react';
import './Layout.css';

// import the ToDoContainer component
import ToDoContainer from '../ToDoContainer/ToDoContainer';

// import NavBar component
import NavBar from '../NavBar/NavBar';

const layout = (props) => (

  <div className="navbar">{console.log('layout', props)}
    <NavBar />
    <div className="layout">
      <p className="header">basicly</p>
      <ToDoContainer />
    </div>
  </div>
);

export default layout;
