import styled from "styled-components";
import Logo from "../header/Logo";
import Divideline from "./Divideline";
import Menu from "./Menu";

const SidebarStyle = styled.aside`
    height: 100%;
    position: fixed;
    left: 0px;
    width: 270px;
    background-color: #FFFFFF;
    z-index: 2;
`;

const Sidebar = (props: { isActive: boolean }) => {
    return <SidebarStyle>
        <Logo isSidebar={props.isActive} />
        <Divideline />
        <Menu />
    </SidebarStyle>
};

export default Sidebar;