import React from "react";
import {
  CalendarGridWrapper,
  CellWrapper,
  RowInCeil,
  DayWrapper,
  CurrentDay,
} from "./CalendarGrid.styled";

export const CalendarGrid = ({ startDay, currentDay }) => {
  const totalDays = 42;
  const day = startDay.clone().subtract(1, "day");
  const daysArray = [...Array(totalDays)].map(() => day.add(1, "day").clone());

  // Перевіряємо чи поточний день
  const isCurrentDay = (day) => currentDay.isSame(day, "day");
  const isSelectedMonth = (day) => currentDay.isSame(day, "month");

  return (
    <CalendarGridWrapper>
      {daysArray.map((dayItem) => (
        <CellWrapper
          key={dayItem.format("DDMMYYYY")}
          isSelectedMonth={isSelectedMonth(dayItem)}
        >
          <RowInCeil justifyContent={"flex-end"}>
            <DayWrapper>
              {!isCurrentDay(dayItem) ? (
                <div>{dayItem.format("D")}</div>
              ) : (
                <CurrentDay>{dayItem.format("D")}</CurrentDay>
              )}
            </DayWrapper>
          </RowInCeil>
        </CellWrapper>
      ))}
    </CalendarGridWrapper>
  );
};
