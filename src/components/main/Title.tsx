import styled from "styled-components";

const TitleStyle = styled.h1`
    font-weight: 800;
    font-size: 1.3rem;
`;

const Title = (props: { value: string }) => {
    return <TitleStyle>{props.value}</TitleStyle>;
};

export default Title;