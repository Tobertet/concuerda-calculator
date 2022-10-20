import { Checkbox, FormControlLabel } from "@mui/material";
import { FC } from "react";
import { theme } from "../theme";
import { EventFormData, Group } from "../types";
import { Selector } from "./Selector";

type Props = {
  label: string;
  options: Group[];
  data: EventFormData;
  onChange: (data: EventFormData) => void;
};

export const EventForm: FC<Props> = ({ label, options, data, onChange }) => {
  return (
    <>
      <Selector
        label={label}
        onChange={(group) => {
          if (!group) {
            onChange({
              group,
              withCandles: false,
              withFlowers: false,
              withGrandPiano: false,
            });
          } else if (!group.canUseGrandPiano) {
            onChange({
              ...data,
              group,
              withGrandPiano: false,
              withFlowers: false,
            });
          } else {
            onChange({ ...data, group });
          }
        }}
        options={options}
        value={data?.group}
      />
      <FormControlLabel
        control={
          <Checkbox
            disabled={!data.group}
            style={{ color: theme.palette.primary.main }}
            checked={data.withCandles}
            onChange={(e) => {
              onChange({ ...data, withCandles: e.target.checked });
            }}
          />
        }
        label="Con velas"
        style={{ color: "white", padding: "0 10%", paddingTop: "12px" }}
      />
      <FormControlLabel
        control={
          <Checkbox
            disabled={!data.group?.canUseGrandPiano}
            style={{ color: theme.palette.primary.main }}
            checked={data.withGrandPiano}
            onChange={(e) => {
              if (!e.target.checked) {
                onChange({
                  ...data,
                  withGrandPiano: e.target.checked,
                  withFlowers: false,
                });
              } else {
                onChange({ ...data, withGrandPiano: e.target.checked });
              }
            }}
          />
        }
        label="Con piano de cola"
        style={{ color: "white", padding: "0 10%" }}
      />
      <FormControlLabel
        control={
          <Checkbox
            disabled={!data.group?.canUseGrandPiano || !data.withGrandPiano}
            style={{
              color: theme.palette.primary.main,
            }}
            checked={data.withFlowers}
            onChange={(e) => {
              onChange({ ...data, withFlowers: e.target.checked });
            }}
          />
        }
        label="Con flores en el piano de cola"
        style={{ color: "white", padding: "0 10%" }}
      />
    </>
  );
};
