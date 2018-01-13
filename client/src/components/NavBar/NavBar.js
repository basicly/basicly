import React from 'react';
import './NavBar.css';

// import the SearchBar component
import SearchBar from '../SearchBar/SearchBar';

const NavBar = (props) => {
  return (
    <div className="navBar">
      <div className="basiclyHeader">
        <div className="basiclyTitle">
          basicly
        </div>
        <div className="basiclySubtitle">
          A basic notes app for basic teams.
        </div>
      </div>
      <SearchBar
        searchText={props.searchText}
        searchTextChangeHandler={props.searchTextChangeHandler}
      />
    </div>
  );
};

export default NavBar;
