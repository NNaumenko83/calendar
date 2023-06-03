import styled from "styled-components";

export const CalendarGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 1px;

  border: 1px solid rgba(220, 227, 229, 0.8);
  overflow: hidden;
  background: rgba(220, 227, 229, 0.8);
  border-radius: 8px;
`;

export const CellWrapper = styled.div`
  width: 140px;
  height: 80px;
  padding: 5px 8px;
  overflow: hidden;

  background-color: #ffff;

  color: ${(props) =>
    props.isSelectedMonth ? "#343434" : "rgba(52, 52, 52, 0.2)"};
`;

export const RowInCeil = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
`;

export const DayWrapper = styled.div`
  height: 27px;
  width: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CurrentDay = styled.div`
  width: 27px;
  height: 26px;

  display: flex;

  /* font-family: "Inter"; */
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.12;
  /* identical to box height, or 112% */

  text-transform: uppercase;

  color: #ffffff;

  align-items: center;
  justify-content: center;
  padding: 4px 8px;

  background: #3e85f3;
  border-radius: 8px;
`;

export const ShowDayWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
  padding: 0;
  margin: 0;

  /* font-family: "Inter"; */
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;

  list-style: none;
`;

export const TaskItem = styled.li`
  padding: 2px 12px;

  border-radius: 8px;

  background-color: ${(props) => {
    switch (props.priority) {
      case "low":
        return "#72C2F8";
      case "medium":
        return "#F3B249";
      case "high":
        return "#EA3D65";

      default:
        return "#72C2F8";
    }
  }};
`;
