import React from "react";
import {
  CalendarGridWrapper,
  CellWrapper,
  RowInCeil,
  DayWrapper,
} from "./CalendarGrid.styled";

export const CalendarGrid = ({ startDay }) => {
  const totalDays = 42;
  const day = startDay.clone().subtract(1, "day");
  const daysArray = [...Array(totalDays)].map(() => day.add(1, "day").clone());
  console.log("daysArray:", daysArray);

  return (
    <CalendarGridWrapper>
      {daysArray.map((dayItem) => (
        <CellWrapper key={dayItem.format("DDMMYYYY")}>
          <RowInCeil justifyContent={"flex-end"}>
            <DayWrapper>{dayItem.format("D")}</DayWrapper>
          </RowInCeil>
        </CellWrapper>
      ))}
    </CalendarGridWrapper>
  );
};
