import { cn } from "@/lib/utils";
import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />

      {/* Top CheckBoxes */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Can be assembled" value="1" />
        <FilterCheckbox text="New arrivals" value="2" />
      </div>

      {/* Price Slider */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type="number" min={100} max={1000} placeholder="1000" />
        </div>

        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />

        <CheckboxFiltersGroup
          title="Ingredients"
          className="mt-10"
          limit={6}
          defaultItems={[
            {
              text: "Tomato",
              value: "1",
            },
            {
              text: "Onion",
              value: "2",
            },
            {
              text: "Pepper",
              value: "3",
            },
            {
              text: "Mushroom",
              value: "4",
            },
            {
              text: "Tomato",
              value: "5",
            },
            {
              text: "Onion",
              value: "6",
            },
          ]}
          items={[
            {
              text: "Tomato",
              value: "1",
            },
            {
              text: "Onion",
              value: "2",
            },
            {
              text: "Pepper",
              value: "3",
            },
            {
              text: "Mushroom",
              value: "4",
            },
            {
              text: "Tomato",
              value: "5",
            },
            {
              text: "Onion",
              value: "6",
            },
            {
              text: "Tomato",
              value: "1",
            },
            {
              text: "Onion",
              value: "2",
            },
            {
              text: "Pepper",
              value: "3",
            },
            {
              text: "Mushroom",
              value: "4",
            },
            {
              text: "Tomato",
              value: "5",
            },
            {
              text: "Onion",
              value: "6",
            },
            {
              text: "Tomato",
              value: "1",
            },
            {
              text: "Onion",
              value: "2",
            },
            {
              text: "Pepper",
              value: "3",
            },
            {
              text: "Mushroom",
              value: "4",
            },
            {
              text: "Tomato",
              value: "5",
            },
            {
              text: "Onion",
              value: "6",
            },
          ]}
        />
      </div>
    </div>
  );
};
