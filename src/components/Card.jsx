import React from "react";
import Tour from "./Tour";

const Card = ({ tour, removeTour }) => {
  return (
    <div>
      {tour.map((tours) => {
        return (
          <>
            <Tour key={tours.id} tours={tours} removeTour={removeTour} />
          </>
        );
      })}
    </div>
  );
};

export default Card;
