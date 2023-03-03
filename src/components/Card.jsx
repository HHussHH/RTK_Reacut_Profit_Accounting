import styled from "styled-components";
import { Profile } from "./Profile";
import { CardItem } from "./CardItem";

const CardUI = styled.div`
  width: 536px;
  height: 657px;

  @media (max-width: 375px) {
    width: 340px;
    height: auto;
  } ;
`;
export const Card = () => {
  return (
    <CardUI>
      <Profile />
      <CardItem />
    </CardUI>
  );
};
