import styled from "styled-components";
import BusinessIcon from "@mui/icons-material/Business";
import Link from "./Link";
import Divider from "./Divider";

const LinksStyle = styled.div`
  display: block;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 360px) {
    display: none;
  }
`;

const Links = () => {
  return (
    <LinksStyle>
      <span>
        <BusinessIcon />
      </span>
      <Link value="A 가공업체" href="#"/> 
      <Divider />
      <Link value="로그아웃" href="#"/>
    </LinksStyle>
  );
};

export default Links;
