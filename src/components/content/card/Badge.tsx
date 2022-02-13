import styled from "styled-components";

const BadgeStyle = styled.div`
  width: 50px;
  height: 24px;
  padding: 2px;
  border: 1px solid #f2994a;
  border-radius: 50px;
  font-size: small;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffa000;
`;

const Badge = (props: { value: string }) => {
  return props.value === "상담중" ? (
    <BadgeStyle>{props.value}</BadgeStyle>
  ) : null;
};

export default Badge;
