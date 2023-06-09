import styled from "styled-components";

export const DaysWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 14px;
  padding: 16px 0 16px 0;
  height: 50px;
  max-width: 100%;

  /* font-family: "Inter"; */
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.12;

  background: #ffffff;
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    height: 46px;
    margin-bottom: 14px;
  }

  @media screen and (min-width: 1440px) {
    height: 46px;
    margin-bottom: 15px;
  }
`;

export const СellOfDay = styled.div`
  text-align: center;
  color: ${(props) => (props.isWeekend ? "#3E85F3" : "#343434")};
`;
