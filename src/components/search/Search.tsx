import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import "./Search.css";

interface SearchProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

const Search: React.FC<SearchProps> = ({ setSearch }) => {

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  return (
    <div className="search-container">
      <input
        type="text"
        onChange={handleSearch}
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
