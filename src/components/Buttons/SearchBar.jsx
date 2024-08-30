import React from 'react';
import './SearchBar.css'; // Ensure you have this CSS in your project

const SearchBar = () => {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        name="text"
        placeholder="Search . . ."
        className="input"
      />
    </div>
  );
};

export default SearchBar;
