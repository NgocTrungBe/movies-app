import React from "react";

interface Props {
  value: string;
  onClick: () => void;
  onChange: (query: string) => void;
}

const Search: React.FC<Props> = ({ value, onClick, onChange }) => {
  return (
    <div className="search">
      <input
        type="text"
        id="searchInput"
        className="search-input"
        placeholder="Search movies"
        value={value}
        onChange={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onChange(e.target.value);
        }}
      />

      <button className="search-button" onClick={onClick}>
        Search
      </button>
    </div>
  );
};

export default Search;
