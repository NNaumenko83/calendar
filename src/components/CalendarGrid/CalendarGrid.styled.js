import styled from "styled-components";

export const CalendarGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

export const CellWrapper = styled.div`
  min-width: 140px;
  min-height: 80px;
  border: 1px solid rgba(220, 227, 229, 0.8);
`;

export const RowInCeil = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
`;

export const DayWrapper = styled.div`
  height: 33px;
  width: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
