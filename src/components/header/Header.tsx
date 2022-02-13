import styled from "styled-components";
import Hamburger from "./Hamburger";
import Links from "./Links";
import Logo from "./Logo";

const HeaderStyle = styled.header`
  height: 70px;
  padding: 0 20px 0 20px;
  background-color: #1565c0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  @media (max-width: 360px) {
    height: 44px;
    justify-content: flex-start;
  }
`;

const Header = (props: { clickHamburger: () => void }) => {
  return (
    <HeaderStyle>
      <Hamburger click={() => props.clickHamburger()} isActive />
      <Logo isSidebar={false} />
      <Links />
    </HeaderStyle>
  );
};

export default Header;
