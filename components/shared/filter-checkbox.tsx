import React from "react";
import { Checkbox } from "../ui";

interface Props {
  text: string;
  value: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
}

export const FilterCheckbox: React.FC<Props> = ({
  text,
  value,
  endAdornment,
  onCheckedChange,
  checked,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        value={value}
        onCheckedChange={onCheckedChange}
        checked={checked}
        className="rounded-[8px] w-6 h-6 cursor-pointer"
        id={`checkbox-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${String(value)}`}
        className="flex-1 leading-none cursor-pointer"
      >
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
