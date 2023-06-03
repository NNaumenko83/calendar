import React from "react";
import { DaysWrapper, СellOfDay } from "./DaysGrid.styled";

export const DaysGrid = () => {
  const daysArray = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

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
