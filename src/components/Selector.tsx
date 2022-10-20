import { FC } from "react";
import { Group } from "../types";
import { noGroupLabel } from "../variables";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

type Props = {
  label: string;
  options: Group[];
  value: Group | undefined;
  onChange: (value: Group | undefined) => void;
};

export const Selector: FC<Props> = ({ label, options, value, onChange }) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(
      event.target.value === noGroupLabel
        ? undefined
        : options.find((item) => item.name === event.target.value)
    );
  };

  return (
    <div style={{ padding: "0 10%" }}>
      <h4
        style={{
          color: "#fbf5e1",
          textAlign: "center",
          marginTop: 0,
          fontSize: "20px",
          fontFamily: "Abhaya Libre",
        }}
      >
        {label}
      </h4>
      <Select
        value={value?.name || noGroupLabel}
        onChange={handleChange}
        style={{ background: "white", width: "100%" }}
      >
        <MenuItem value={noGroupLabel}>{noGroupLabel}</MenuItem>
        {options.map((group) => (
          <MenuItem value={group.name} key={group.name}>
            {group.name}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};
