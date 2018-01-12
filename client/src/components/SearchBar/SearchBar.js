import React from 'react';
import './SearchBar.css';

// import the search icon
import searchIcon from './images/search-icon.png';

const SearchBar = (props) => {
  return (
    <div className="searchBar">
      <form>
        <input
          className="input"
          type="text" 
          placeholder="Search your lists..." 
          name="search" 
          value={props.searchText} 
          onChange={(event) => props.searchTextChangeHandler(event)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
