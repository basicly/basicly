import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
  return (
    <div className="searchBar">
      <form>
        <input
          className="input"
          type="text" 
          placeholder="Search" 
          value={props.searchText} 
          onChange={(event) => props.searchTextChangeHandler(event)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
