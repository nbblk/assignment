import styled from "styled-components";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

export type CardProps = {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: string[];
  material: string[];
  status: string;
};

const CardStyle = styled.div`
    padding: 12px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    width: 356px;
    height: 356px;
`;

const DividerStyle = styled.div`
    width: 95%;
    height: 1px;
    background-color: #e5e5e5;
`;

const Card = (props: CardProps) => {
  return (
    <CardStyle>
      <Header
        title={props.title}
        client={props.client}
        due={props.due}
        status={props.status}
      />
      <DividerStyle />
      <Content
        count={props.count}
        amount={props.amount}
        method={props.method}
        material={props.material}
      />
      <Footer />
    </CardStyle>
  );
};

export default Card;
