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
  padding: 14px 8px;

  background-color: #ffff;
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
