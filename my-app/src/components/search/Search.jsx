import React from 'react';
import './Search.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  return (
    <div className="search-container">
      <FontAwesomeIcon icon={faSearch} className='search-icon' />
      <input 
        type="text" 
        placeholder="Find members" 
        className="search-input"
      />
    </div>
  );
};

export default Search;