import styled from "styled-components";

type ContentProps = {
  count: number;
  amount: number;
  method: string[];
  material: string[];
};

const ContentStyle = styled.table`
  padding: 5px 0;
  border-collapse: separate;
  border-spacing: 0 1rem;
  font-size: 0.9em;

  td {
    padding-right: 40px;
  }

  td:nth-child(2n) {
    font-weight: 600;
  }
`;
const Content = (props: ContentProps) => {
  return (
    <ContentStyle>
      <tbody>
        <tr>
          <td>도면개수</td>
          <td>{!props.count ? 0 : props.count}개</td>
        </tr>
        <tr>
          <td>총 수량</td>
          <td>{!props.amount ? 0 : props.amount}개</td>
        </tr>
        <tr>
          <td>가공방식</td>
          <td>{props.method.join(", ")}</td>
        </tr>
        <tr>
          <td>재료</td>
          <td>{props.material.join(", ")}</td>
        </tr>
      </tbody>
    </ContentStyle>
  );
};

export default Content;
