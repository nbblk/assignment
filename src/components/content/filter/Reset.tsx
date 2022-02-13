import styled from "styled-components";
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const ResetStyle = styled.button`
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  text-align: left;
  color: #1976d2;
`;

const Reset = (props: { value: string, click: () => void}) => {
    return <ResetStyle onClick={props.click}><RestartAltIcon />{props.value}</ResetStyle>
};

export default Reset;