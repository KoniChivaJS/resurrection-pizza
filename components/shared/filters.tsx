"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useQueryFilters, useFilters, useIngredients } from "@/hooks";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const filters = useFilters();
  const { ingredients, loading } = useIngredients();

  useQueryFilters(filters);

  const items = ingredients.map((ingredient) => ({
    value: String(ingredient.id),
    text: ingredient.name,
  }));

  const updatePrices = (prices: [number, number]) => {
    filters.setPrices("priceFrom", prices[0]);
    filters.setPrices("priceTo", prices[1]);
  };

  return (
    <div className={cn("", className)}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />

      {/* Top CheckBoxes */}

      <CheckboxFiltersGroup
        name="pizzaTypes"
        className="mb-5"
        title="Pizza Type"
        onClickCheckBox={filters.setPizzaTypes}
        selected={filters.pizzaTypes}
        items={[
          { text: "Thin", value: "1" },
          { text: "Traditional", value: "2" },
        ]}
      />

      <CheckboxFiltersGroup
        name="sizes"
        className="mb-5"
        title="Sizes"
        onClickCheckBox={filters.setSizes}
        selected={filters.sizes}
        items={[
          { text: "20 cm", value: "20" },
          { text: "30 cm", value: "30" },
          { text: "40 cm", value: "40" },
        ]}
      />

      {/* Price Slider */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(filters.priceRange.priceFrom)}
            onChange={(e) => filters.setPrices("priceFrom", +e.target.value)}
          />
          <Input
            type="number"
            min={100}
            max={1000}
            placeholder="1000"
            value={String(filters.priceRange.priceTo)}
            onChange={(e) => filters.setPrices("priceTo", +e.target.value)}
          />
        </div>

        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[
            filters.priceRange.priceFrom || 0,
            filters.priceRange.priceTo || 1000,
          ]}
          onValueChange={([priceFrom, priceTo]) =>
            updatePrices([priceFrom, priceTo])
          }
        />

        <CheckboxFiltersGroup
          title="Ingredients"
          name="ingredients"
          className="mt-10"
          limit={6}
          defaultItems={items.slice(0, 6)}
          items={items}
          loading={loading}
          onClickCheckBox={filters.setIngredients}
          selected={filters.selectedIngredients}
        />
      </div>
    </div>
  );
};
