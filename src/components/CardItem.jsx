import styled from "styled-components";
import { CardFooter } from "./CardFooter";
import { useSelector, useDispatch } from "react-redux";
import { toggleDay } from "../fetures/days/days-slice";

const CardItemUI = styled.div`
  width: 100%;
  height: 506px;
  background-color: #fffcf7;
  border-radius: 10px;
  padding: 32px 37px;

  @media (max-width: 375px) {
    padding: 10px 7px;
    height: 456px;
  } ;
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

  @media (max-width: 375px) {
    margin-right: 17px;
  } ;
`;

const CardItemColumn = styled.div`
  width: 52px;
  max-height: 150px;
  background-color: var(--colors-red);
  margin-top: 2px;
  border-radius: 5px;
  margin-bottom: 15px;
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: #ff9b87;
  }

  @media (max-width: 375px) {
    width: 30px;
  } ;
`;

const CardAmountInfo = styled.div`
  color: #fff;
  font-size: 14px;
  padding: 2px 10px;
  border-radius: 4px;
  position: absolute;
  top: -30px;
  font-weight: var(--fw-normal);
  background-color: var(--colors-darkBrown);

  @media (max-width: 375px) {
    padding: 0px;
    font-size: 14px;
  } ;
`;

export const CardItem = () => {
  const dispatch = useDispatch();
  const days = useSelector((state) => state.daysReducer);

  return (
    <CardItemUI>
      <CardItemTitile>Spending - Last {days.length} days</CardItemTitile>
      <CardItemStatistics>
        {days.map((day) => {
          return (
            <CardItemSystem
              key={day.day}
              onClick={() => dispatch(toggleDay(day.day))}
            >
              <CardItemColumn
                style={{
                  height: `${day.amount * 2}px`,
                  backgroundColor: day.isActive ? "#76B5BC" : "#EC755D",
                }}
              >
                {day.isActive ? (
                  <CardAmountInfo>${day.amount}</CardAmountInfo>
                ) : null}
              </CardItemColumn>
              <p>{day.day}</p>
            </CardItemSystem>
          );
        })}
      </CardItemStatistics>
      <CardFooter />
    </CardItemUI>
  );
};
