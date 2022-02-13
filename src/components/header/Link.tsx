import styled from "styled-components";

const LinkStyle = styled.a`
  text-decoration: none;
  color: white;
  margin: 0 5px;
  font-size: 0.8rem;
`;

const Link = (props: { value: string, href: string }) => {
  return <LinkStyle href="#">{props.value}</LinkStyle>;
};

export default Link;
