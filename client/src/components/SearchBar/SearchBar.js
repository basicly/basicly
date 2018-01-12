import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
  return (
    <div className="searchBar">
      <form>
        <input 
          type="text" 
          placeholder="Search..." 
          name="search" 
          value={props.searchText} 
          onChange={(event) => props.searchTextChangeHandler(event)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
