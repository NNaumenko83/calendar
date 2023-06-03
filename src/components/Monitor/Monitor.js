import React from "react";

export const Monitor = ({ currentDay }) => {
  return (
    <div>
      <div>{currentDay.format("MMMM D")}</div>
    </div>
  );
};
