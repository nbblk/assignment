import styled from "styled-components";

const TitleStyle = styled.p`
    font-weight: 500;
    font-size: 1rem;
`;

const Subtitle = (props: { value: string }) => {
    return <TitleStyle>{props.value}</TitleStyle>;
};

export default Subtitle;