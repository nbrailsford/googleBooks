import React from "react";
import "./search.css";

class Search extends React.Component {
  render() {
    return (
      <div className="searchbar">
        <form action="#">
          <input type="text" name="search" placeholder="search..."></input>
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
