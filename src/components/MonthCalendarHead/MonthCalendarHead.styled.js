import styled from "styled-components";

export const DaysWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 15px;
  padding: 14px 30px;

  background: #ffffff;
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
`;

export const СellOfDay = styled.div`
  text-align: center;
  color: ${(props) => (props.isWeekend ? "#3E85F3" : "#343434")};
`;
