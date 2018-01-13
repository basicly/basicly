import React from 'react';
import './NavBar.css';

// import the SearchBar component
import SearchBar from '../SearchBar/SearchBar';

// import the NavBarUser component
import NavBarUser from '../NavBarUser/NavBarUser';

const NavBar = (props) => {
  return (
    <div className="navBar">
      <div className="basiclyHeader">
        <div className="emptyLeftContainer">&nbsp;</div>
        <div className="centerContainer">
          <div className="basiclyTitle">
            basicly
          </div>
          <div className="basiclySubtitle">
            A basic task app for teams.
          </div>
        </div>
        <NavBarUser />
      </div>
      <SearchBar
        searchText={props.searchText}
        searchTextChangeHandler={props.searchTextChangeHandler}
      />
    </div>
  );
};

export default NavBar;
