import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Checklist from "./Checklist";
import { CheckOption, Filter } from "../../../../container/Main";

const DropdownStyle = styled.div`
  width: 100px;
  height: 22px;
  position: relative;
  display: flex;
  margin-right: 0.5rem;
  padding: 0.3rem 0.5rem;
  border: 2px solid #939fa5;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #939fa5;
  background-color: ${(props: { checkedCount: number }) =>
    props.checkedCount > 0 ? "#1565C0" : "transparent"};
  font-size: small;
`;

type DropdownProps = {
  type: string;
  click: (type: Filter) => void;
  check: (type: Filter, checked: CheckOption) => void;
  isActive: boolean;
  checked: CheckOption[];
  checkedCount: number;
};

const Dropdown = (props: DropdownProps) => {
  const type = props.type === "가공방식" ? "methods" : "materials";

  return (
    <DropdownStyle
      onClick={() => props.click(type)}
      checkedCount={props.checkedCount}
    >
        {props.type} {props.checkedCount === 0 ? "" : `(${props.checkedCount})`}
      <ArrowDropDownIcon />
      {props.isActive ? (
        <Checklist
          type={props.type}
          check={props.check}
          checked={props.checked}
        />
      ) : null}
    </DropdownStyle>
  );
};

export default Dropdown;
