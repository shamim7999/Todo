import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../css/SearchBar.css'; // You can customize the styles in this file

const SearchBar = ({ placeholder, handleSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    handleSearch(value);
  };

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="search"
        placeholder={placeholder ? placeholder : "Search...title or description"}
        value={searchText}
        onChange={handleChange}
      />
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
    </div>
  );
};

export default SearchBar;
