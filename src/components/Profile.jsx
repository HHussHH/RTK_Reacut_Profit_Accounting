import styled from "styled-components";

const ProfileUI = styled.div`
  width: 100%;
  height: 126px;
  border-radius: 20px;
  background-color: var(--colors-red);

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 25px;
`;

const ProfileBalanceTitle = styled.h3`
  font-weight: var(--fw-normal);
  color: #ffffffcc;
  padding-left: 24px;
`;

const ProfileBalance = styled.h2`
  font-weight: var(--fw-bold);
  color: #fff;
  padding: 10px 0px 0px 24px;
`;

const ProfileLogo = styled.div`
  margin-right: 24px;
  width: 49px;
  height: 49px;
  border-radius: 25px;
  background-color: var(--colors-darkBrown);
  position: relative;
  &:after {
    position: absolute;
    top: 0px;
    right: 50%;
    display: block;
    content: "";
    width: 49px;
    height: 49px;
    border-radius: 25px;
    border: 2px solid #fff;
  }
`;
export const Profile = () => {
  return (
    <ProfileUI>
      <div>
        <ProfileBalanceTitle>My balance</ProfileBalanceTitle>
        <ProfileBalance>$921.48</ProfileBalance>
      </div>
      <ProfileLogo></ProfileLogo>
    </ProfileUI>
  );
};
