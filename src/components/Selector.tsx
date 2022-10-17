import { FC } from "react";
import { Group } from "../types";
import { noGroupLabel } from "../variables";

type Props = {
  label: string;
  options: Group[];
  value: Group | undefined;
  onChange: (value: Group | undefined) => void;
  priceField: "ceremonyPrice" | "cocktailPrice" | "feastPrice";
};

export const Selector: FC<Props> = ({
  label,
  options,
  value,
  onChange,
  priceField,
}) => (
  <label>
    {label}
    <select
      value={value?.name}
      onChange={(e) =>
        onChange(
          e.target.value === noGroupLabel
            ? undefined
            : options.find((item) => item.name === e.target.value)
        )
      }
    >
      <option>{noGroupLabel}</option>
      {options
        .filter((item) => item[priceField] > 0)
        .map((group) => (
          <option value={group.name} key={group.name}>
            {`${group.name} ${group[priceField]}€`}
          </option>
        ))}
    </select>
  </label>
);
