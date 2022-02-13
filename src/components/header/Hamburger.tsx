import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

const HamburgerStyle = styled.span`
  display: none;
  height: 20px;
  margin-right: 10px;
  cursor: pointer;

  @media (max-width: 360px) {
    display: block;
  }
`;

const Hamburger = (props: { isActive: boolean; click: () => void }) => {
  return (
    <HamburgerStyle>
      <MenuIcon onClick={props.click} />
    </HamburgerStyle>
  );
};

export default Hamburger;
