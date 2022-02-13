import styled from "styled-components";

const LogoStyle = styled.div`
  height: 70px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #11111;
  font-size: 1.2em;

  @media (max-width: 360px) {
    height: 44px;
  }
`;

const SidebarLogoStyle = styled.div`
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #11111;
  font-size: 1.2em;

  @media (max-width: 360px) {
    height: 44px;
  }
  color: #1976d2;
`;

const Bold = styled.span`
  font-family: "Work Sans", sans-serif;
  font-weight: 700;
  font-size: 1.2em;
`;

const Logo = (props: { isSidebar: boolean }) => {
  return props.isSidebar ? (
    <SidebarLogoStyle>
      <Bold>CAPA</Bold>&nbsp;파트너스
    </SidebarLogoStyle>
  ) : (
    <LogoStyle>
      <Bold>CAPA</Bold>&nbsp;파트너스
    </LogoStyle>
  );
};

export default Logo;
