import React from "react";

const Tour = ({ tours, removeTour }) => {
  return (
    <div>
      <img src={tours.image} alt="image"></img>
      <div>{tours.id}</div>
      <div>{tours.name}</div>
      <div>{tours.info}</div>
      <div>{tours.price}</div>
      <button onClick={() => removeTour(tours.id)}>Not interested</button>
    </div>
  );
};

export default Tour;
