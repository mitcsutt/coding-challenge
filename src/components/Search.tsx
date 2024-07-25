import React, { Dispatch, SetStateAction } from "react";
import "./Search.css";

interface SearchProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

const Search: React.FC<SearchProps> = ({ search, setSearch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        value={search || ""}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
