import { Switch } from "@mui/material";
import { ChangeEvent } from "react";

const ToggleSwitch = (props: {
  value: string;
  toggle: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <span>
      <Switch
        onChange={(event: ChangeEvent<HTMLInputElement>) => props.toggle(event)}
      />
      {props.value}
    </span>
  );
};

export default ToggleSwitch;
