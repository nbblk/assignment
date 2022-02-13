import styled from "styled-components";
import BusinessIcon from "@mui/icons-material/Business";

const MenuStyle = styled.ul`
    padding: 20px;
    list-style-type: none;
    color: #323D45;

    li {
        margin: 20px;
        display: flex;
        align-items: center;
    }

    a {
        text-decoration: none;
        color: #323D45;
        font-weight: 800;
    }

    span {
        margin-right: 5px;
    }
`;
const Menu = () => {
    return <MenuStyle>
        <li><span><BusinessIcon /></span><a href="#">파트너정밀가공</a></li>
        <li><a href="#">로그아웃</a></li>
    </MenuStyle>;
};

export default Menu;