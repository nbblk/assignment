import { Checkbox } from "@mui/material";
import { ChangeEvent } from "react";
import styled from "styled-components";
import { CheckOption, Filter } from "../../../../container/Main";

const ChecklistStyle = styled.ul`
  width: 100px;
  height: auto;
  position: absolute;
  top: 20px;
  left: 0px;
  padding: 0.5rem;
  border-radius: 5px;
  border: 2px solid #939fa5;
  font-size: small;
  list-style-type: none;
  background-color: #fff;
  z-index: 1;
`;

const Checklist = (props: {
  type: string;
  checked: CheckOption[],
  check: (type: Filter, checked: CheckOption) => void;
}) => {
  let items: string[] = [];
  switch (props.type) {
    case "가공방식":
      items = ["밀링", "선반"];
      break;
    case "재료":
      items = ["알루미늄", "탄소강", "구리", "합금강", "강철"];
      break;
    default:
      break;
  }

  const engType = props.type === "가공방식" ? "methods" : "materials";

  return (
    <ChecklistStyle>
      {items.map((item, index) => (
        <li key={index}>
          <Checkbox
            checked={props.checked[index].checked}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              props.check(engType, {
                id: index,
                type: event.target.value,
                checked: event.target.checked,
              })
            }
          />
          {item}
        </li>
      ))}
    </ChecklistStyle>
  );
};

export default Checklist;
