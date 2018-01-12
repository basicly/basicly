import React from 'react';
import './NavBar.css';

// import the SearchBar component
import SearchBar from '../SearchBar/SearchBar';

const NavBar = (props) => {
  return (
    <div className="navBar">
      <SearchBar
        searchText={props.searchText}
        searchTextChangeHandler={props.searchTextChangeHandler}
      />
    </div>
  );
};

export default NavBar;
