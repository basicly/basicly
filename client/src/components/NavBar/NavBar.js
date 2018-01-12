import React from 'react';
import './NavBar.css';

// import the SearchBar component
import SearchBar from '../SearchBar/SearchBar';

const NavBar = (props) => {
  return (
    <div className="navBar">
      <SearchBar
      />
    </div>
  );
};

export default NavBar;
