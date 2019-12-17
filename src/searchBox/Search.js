import React from "react";
import axios from "axios";
import Books from "/Users/nathanbrailsford/Desktop/practice2/api-practice/src/books/Books.js";
import "./search.css";

// "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyCg-q5HiBjXZEcLrebOwgsbj09dnR860dY"

// `https://www.googleapis.com/books/v1/volumes?q=${this.state.term}`

class Search extends React.Component {
  state = { term: "", apiResponse: [] };

  onSearchSubmit = async event => {
    const response = await axios.get("https://api.openbrewerydb.org/breweries");
    this.setState({ apiResponse: response.data });
    console.log(this.state.apiResponse);
  };

  render() {
    return (
      <div>
        <div className="searchbar">
          <form onSubmit={this.onSearchSubmit}>
            <input
              value={this.state.term}
              type="text"
              name="search"
              placeholder="search..."
              onChange={e => this.setState({ term: e.target.value })}
            ></input>
            <button>Search</button>
          </form>
        </div>
        <Books title={this.state.apiResponse} />
      </div>
    );
  }
}

export default Search;
