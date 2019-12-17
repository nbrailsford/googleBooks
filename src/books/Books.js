import React from "react";

const Books = props => {
  const titles = props.title.map(title => {
    return (
      <div key={title.id}>
        <h3>{title.name}</h3>
        <p>{title.brewery_type}</p>
      </div>
    );
  });
  return <div>{titles}</div>;
};

export default Books;
