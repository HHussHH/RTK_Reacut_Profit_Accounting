import styled from "styled-components";
import { CardFooter } from "./CardFooter";
import { useSelector } from "react-redux";
const CardItemUI = styled.div`
  width: 100%;
  height: 506px;
  background-color: #fffcf7;
  border-radius: 10px;
  padding: 32px 37px;
`;

const CardItemTitile = styled.div`
  color: var(--colors-darkBrown);
  font-weight: var(--fw-bold);
  font-size: 26px;
  margin-bottom: 70px;
`;

const CardItemStatistics = styled.div`
  width: 100%;
  height: 210px;

  padding-bottom: 20px;
  border-bottom: 2px solid #d9d9d9;
  align-items: flex-end;
  display: flex;
`;

const CardItemSystem = styled.h4`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 15px;
  & > p {
    color: var(--colors-mediumBrown);
    font-weight: var(--fw-normal);
  }
`;

const CardItemColumn = styled.div`
  width: 52px;
  max-height: 150px;
  background-color: var(--colors-red);

  border-radius: 5px;
  margin-bottom: 15px;

  cursor: pointer;

  &:hover {
    background-color: #ff9b87;
  }
`;

export const CardItem = () => {
  const days = useSelector((state) => state.daysReducer);

  console.log(days);
  return (
    <CardItemUI>
      <CardItemTitile>Spending - Last {days.length} days</CardItemTitile>
      <CardItemStatistics>
        {days.map((day) => {
          return (
            <CardItemSystem key={day.day}>
              <CardItemColumn style={{ height: `${day.amount * 2}px` }} />
              <p>{day.day}</p>
            </CardItemSystem>
          );
        })}
      </CardItemStatistics>
      <CardFooter />
    </CardItemUI>
  );
};
