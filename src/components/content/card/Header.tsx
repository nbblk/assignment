import styled from "styled-components";
import Badge from "./Badge";

type HeaderProps = {
  title: string;
  client: string;
  due: string;
  status: string;
};

const HeaderStyle = styled.header`
  div {
    margin: 0;
    padding: 0;
  }
  
  h1 {
    font-size: large;
  }

  h2 {
    margin: 0;
    font-size: medium;
  }

  h4 {
    margin: 20px auto;
    font-size: small;
    color: #939FA5;
  }
`;

const TitleStyle = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = (props: HeaderProps) => {
  return (
    <HeaderStyle>
      <TitleStyle>
        <h1>{props.title}</h1>
        <Badge value={props.status} />
      </TitleStyle>
      <h2>{props.client}</h2>
      <h4>{props.due}까지 납기</h4>
    </HeaderStyle>
  );
};

export default Header;
