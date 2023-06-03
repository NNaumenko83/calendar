import React from "react";

export const Monitor = ({ today, prevHandler, nextHandler }) => {
  return (
    <div>
      <div>{today.format("MMMM D")}</div>
      <button onClick={prevHandler}>Prev</button>
      <button onClick={nextHandler}>Next</button>
    </div>
  );
};
