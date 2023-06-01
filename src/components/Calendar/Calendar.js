import React, { useState } from "react";

const Calendar = () => {
  // Get the current date
  const currentDate = new Date();

  // Create an array of events (sample data)
  const events = [
    { date: new Date(2023, 5, 2), title: "Event 1" },
    { date: new Date(2023, 5, 4), title: "Event 2" },
    { date: new Date(2023, 5, 5), title: "Event 3" },
    // Add more events as needed
  ];

  // Generate the calendar
  const generateCalendar = () => {
    // Get the first day of the current month
    const firstDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );

    // Get the last day of the current month
    const lastDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );

    // Calculate the number of days in the current month
    const numDays = lastDay.getDate();

    // Calculate the number of days to display from the previous month
    const startOffset = (firstDay.getDay() + 6) % 7;

    // Calculate the number of days to display from the next month
    const endOffset = 6 - ((lastDay.getDay() + 6) % 7);

    // Calculate the total number of cells
    const totalCells = numDays + startOffset + endOffset;

    // Keep track of the current date
    let currentDateIndex = 1;

    // Generate the calendar cells
    const cells = [];
    for (let row = 0; row < Math.ceil(totalCells / 7); row++) {
      for (let col = 0; col < 7; col++) {
        const date = currentDateIndex - startOffset;

        // Check if the date is within the current month
        const isCurrentMonth = date > 0 && date <= numDays;

        // Highlight the current date
        const isCurrentDate =
          currentDate.getFullYear() === currentDate.getFullYear() &&
          currentDate.getMonth() === currentDate.getMonth() &&
          currentDateIndex === currentDate.getDate();

        // Check if there are any events on the current date
        const event = events.find(
          (e) =>
            e.date.getFullYear() === currentDate.getFullYear() &&
            e.date.getMonth() === currentDate.getMonth() &&
            e.date.getDate() === currentDateIndex
        );

        cells.push(
          <td
            key={`${row}-${col}`}
            className={isCurrentDate ? "current-date" : ""}
          >
            {isCurrentMonth && (
              <>
                <div>{date}</div>
                {event && <div className="event">{event.title}</div>}
              </>
            )}
          </td>
        );

        currentDateIndex++;
      }
    }

    return cells;
  };

  return (
    <div>
      <h1>Calendar</h1>
      <table>
        <thead>
          <tr>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
          </tr>
        </thead>
        <tbody>
          {generateCalendar().map((cell, index) =>
            index % 7 === 0 ? (
              <tr
                key={index}
                onClick={() => {
                  console.log("Hello");
                }}
              >
                {cell}
              </tr>
            ) : (
              cell
            )
          )}
        </tbody>{" "}
      </table>
    </div>
  );
};

export default Calendar;
