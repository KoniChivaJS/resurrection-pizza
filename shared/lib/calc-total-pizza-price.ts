import { Ingredient, ProductItem } from "@prisma/client";
import { PizzaSize, PizzaType } from "../constants/pizza";

/**
 * Function for calculate total pizza price
 * @param items - all pizzas
 * @param type - pizza type
 * @param size - pizza size
 * @param ingredients - all ingredients
 * @param selectedIngredients - selected ingredients by user
 * @returns number of total pizza price
 */
export const calcTotalPizzaPrice = (
  items: ProductItem[],
  type: PizzaType,
  size: PizzaSize,
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const pizzaPrice =
    items.find((item) => item.pizzaType === type && item.size === size)
      ?.price || 0;
  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, item) => acc + item.price, 0);

  return pizzaPrice + totalIngredientsPrice;
};
