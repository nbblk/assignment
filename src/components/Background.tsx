import styled from "styled-components";

const BackgroundStyle = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Background = (props: { click: () => void }) => {
  return <BackgroundStyle onClick={props.click} />;
};

export default Background;
