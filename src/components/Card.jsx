import styled from "styled-components";
import { Profile } from "./Profile";
import { CardItem } from "./CardItem";

const CardUI = styled.div`
  width: 536px;
  height: 657px;
`;
export const Card = () => {
  return (
    <CardUI>
      <Profile />
      <CardItem />
    </CardUI>
  );
};
