import styled from "styled-components";
import Button from "@mui/material/Button";

const FooterStyle = styled.footer`
  span {
    margin: 0 5px;
  }
`;
const Footer = () => {
  return (
    <FooterStyle>
      <span><Button variant="contained" color="primary">요청 내역 보기</Button></span>
      <span><Button variant="outlined" color="primary">채팅하기</Button></span>
    </FooterStyle>
  );
};

export default Footer;
