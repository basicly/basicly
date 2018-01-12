import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
  return (
    <div className="searchBar">
      <form>
        <input type="text" placeholder="Search..." name="search" />
      </form>
    </div>
  );
};

export default SearchBar;
