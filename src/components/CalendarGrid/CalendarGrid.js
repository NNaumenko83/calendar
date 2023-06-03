import React, { useEffect, useState } from "react";
import {
  CalendarGridWrapper,
  CellWrapper,
  RowInCeil,
  DayWrapper,
  CurrentDay,
  ShowDayWrapper,
  TaskList,
  TaskItem,
} from "./CalendarGrid.styled";

export const CalendarGrid = ({ startDay, currentDay }) => {
  const [tasks, setTasks] = useState([]);

  const totalDays = 42;
  const maxLengthOfTaskTitle = 10;

  const cutString = (str) => {
    if (str.length > maxLengthOfTaskTitle) {
      return str.substring(0, maxLengthOfTaskTitle) + "...";
    }
    return str;
  };

  const day = startDay.clone().subtract(1, "day");
  const daysArray = [...Array(totalDays)].map(() => day.add(1, "day").clone());

  const isCurrentDay = (day) => currentDay.isSame(day, "day");
  const isSelectedMonth = (day) => currentDay.isSame(day, "month");

  useEffect(() => {
    fetch("https://githack-goosetrack.onrender.com/api/tasks")
      .then((res) => res.json())
      .then((res) => setTasks(res.data));
  }, []);

  let dayTasksFiltered = [];

  const filterTask = (calendarDay) => {
    dayTasksFiltered = [
      ...tasks.filter((task) => task.date === calendarDay.format("YYYY-MM-DD")),
    ];
    return dayTasksFiltered;
  };

  //   {
  // "_id": "647a36e401a3371dd3c043d8",
  // "title": "My task  medium done 09:39-10:01",
  // "date": "2023-06-04",
  // "start": "09:39",
  // "end": "10:01",
  // "priority": "medium",
  // "category": "done",
  // "createdAt": "2023-06-02T18:37:25.130Z",
  // "updatedAt": "2023-06-02T18:37:25.130Z"
  // }

  return (
    <CalendarGridWrapper>
      {daysArray.map((dayItem) => (
        <CellWrapper
          key={dayItem.format("DDMMYYYY")}
          isSelectedMonth={isSelectedMonth(dayItem)}
        >
          <RowInCeil justifyContent={"flex-end"}>
            <ShowDayWrapper>
              <DayWrapper>
                {!isCurrentDay(dayItem) ? (
                  <div>{dayItem.format("D")}</div>
                ) : (
                  <CurrentDay>{dayItem.format("D")}</CurrentDay>
                )}
              </DayWrapper>
            </ShowDayWrapper>
          </RowInCeil>
          {filterTask(dayItem).length > 0 && (
            <TaskList>
              {dayTasksFiltered.map((task) => (
                <TaskItem key={task._id} priority={task.priority}>
                  {cutString(task.title)}
                </TaskItem>
              ))}
            </TaskList>
          )}
        </CellWrapper>
      ))}
    </CalendarGridWrapper>
  );
};
