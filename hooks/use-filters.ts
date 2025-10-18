import React from "react";
import { useSearchParams } from "next/navigation";
import { useSet } from "react-use";

interface PriceRange {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceRange {
  pizzaTypes: string;
  sizes: string;
  ingredients: string;
}

export interface Filters {
  sizes: Set<string>;
  pizzaTypes: Set<string>;
  selectedIngredients: Set<string>;
  priceRange: PriceRange;
}

interface ReturnProps extends Filters {
  setPrices: (name: keyof PriceRange, value: number) => void;
  setSizes: (value: string) => void;
  setPizzaTypes: (value: string) => void;
  setIngredients: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;

  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
    new Set<string>(searchParams.get("ingredients")?.split(","))
  );

  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(
      searchParams.get("sizes") ? searchParams.get("sizes")?.split(",") : []
    )
  );

  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>(
      searchParams.get("pizzaTypes")
        ? searchParams.get("pizzaTypes")?.split(",")
        : []
    )
  );

  const [priceRange, setPriceRange] = React.useState<PriceRange>({
    priceFrom: Number(searchParams.get("priceFrom")) || undefined,
    priceTo: Number(searchParams.get("priceTo")) || undefined,
  });

  const updatePrice = (name: keyof PriceRange, value: number) => {
    setPriceRange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    sizes,
    pizzaTypes,
    selectedIngredients,
    priceRange,
    setPrices: updatePrice,
    setIngredients: toggleIngredients,
    setPizzaTypes: togglePizzaTypes,
    setSizes: toggleSizes,
  };
};
