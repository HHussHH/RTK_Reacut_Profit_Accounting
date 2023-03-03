import styled from "styled-components";
import { useSelector } from "react-redux";
const CardFooterUi = styled.footer`
  margin-top: 37px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 70px;
`;
const CardFooterText = styled.h3`
  font-weight: var(--fw-normal);
  font-size: var(--fs);
  color: var(--colors-mediumBrown);

  text-align: end;
  & > b {
    color: var(--colors-darkBrown);
  }
`;
const CardFooterPrice = styled.h2`
  font-weight: var(--fw-bold);
`;
export const CardFooter = () => {
  var total = 0;
  const FullAmount = useSelector((state) => state.daysReducer);
  FullAmount.map((amount) => {
    return (total += amount.amount);
  });

  return (
    <CardFooterUi>
      <div>
        <CardFooterText>Total his month</CardFooterText>
        <CardFooterPrice>${total}</CardFooterPrice>
      </div>
      <div>
        <CardFooterText>
          <b>+2.4%</b>
        </CardFooterText>
        <CardFooterText>from last month</CardFooterText>
      </div>
    </CardFooterUi>
  );
};
