import React from "react";

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.State = [];
  }
  componentDidMount() {
    const url =
      "GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyCg-q5HiBjXZEcLrebOwgsbj09dnR860dY";

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState(data));
  }

  render() {
    return (
      <div>
        <p>asdfadsf</p>
      </div>
    );
  }
}

export default Books;
