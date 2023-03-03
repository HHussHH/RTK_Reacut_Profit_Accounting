import styled from "styled-components";
import { CardFooter } from "./CardFooter";

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
`;

export const CardItem = () => {
  return (
    <CardItemUI>
      <CardItemTitile>Spending - Last 7 days</CardItemTitile>
      <CardItemStatistics>
        <CardItemSystem>
          <CardItemColumn style={{ height: "55px" }} />
          <p>mon</p>
        </CardItemSystem>
        <CardItemSystem>
          <CardItemColumn style={{ height: "45px" }} />
          <p>tue</p>
        </CardItemSystem>
        <CardItemSystem>
          <CardItemColumn
            style={{ height: "145px", backgroundColor: "hsl(186, 34%, 60%)" }}
          />
          <p>wed</p>
        </CardItemSystem>
        <CardItemSystem>
          <CardItemColumn style={{ height: "105px" }} />
          <p>thu</p>
        </CardItemSystem>
        <CardItemSystem>
          <CardItemColumn style={{ height: "85px" }} />
          <p>fri</p>
        </CardItemSystem>
        <CardItemSystem>
          <CardItemColumn style={{ height: "95px" }} />
          <p>sat</p>
        </CardItemSystem>
        <CardItemSystem>
          <CardItemColumn style={{ height: "45px" }} />
          <p>sun</p>
        </CardItemSystem>
      </CardItemStatistics>
      <CardFooter />
    </CardItemUI>
  );
};
