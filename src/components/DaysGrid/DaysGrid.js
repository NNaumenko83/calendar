import React from "react";
import { DaysWrapper, СellOfDay } from "./DaysGrid.styled";
import moment from "moment";

export const DaysGrid = () => {
  const daysArray = [...Array(7)].map((_, i) =>
    moment()
      .day(i + 1)
      .format("ddd")
      .toUpperCase()
  );
  console.log("daysArray:", daysArray);

  return (
    <DaysWrapper>
      {daysArray.map((day, i) => (
        <СellOfDay key={day} isWeekend={i === 5 || i === 6}>
          {day}
        </СellOfDay>
      ))}
    </DaysWrapper>
  );
};
