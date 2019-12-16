import React from "react";
import "./filter.css";

class Filter extends React.Component {
  render() {
    return (
      <div className="filterOptions">
        <p>Print Type: </p>
        <select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <p>Book Type: </p>
        <select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    );
  }
}

export default Filter;
