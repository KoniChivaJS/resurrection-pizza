export const categories = [
  { name: "Pizza" },
  { name: "Combo" },
  { name: "Snacks" },
  { name: "Cocktails" },
  { name: "Coffee" },
  { name: "Drinks" },
  { name: "Deserts" },
];

export const ingredients = [
  {
    name: "Garlic",
    price: 179,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png",
  },
  {
    name: "Slivochaya Mozzarella",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png",
  },
  {
    name: "Cheddar and Parmesan",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796",
  },
  {
    name: "Spicy Halapeno Pepper",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png",
  },
  {
    name: "Mild Cilantro",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349",
  },
  {
    name: "Champignons",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324",
  },
  {
    name: "Basil",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61",
  },
  {
    name: "Piquant Peppercorns",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3",
  },
  {
    name: "Hot Chilli",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027",
  },
  {
    name: "Marinara Sauce",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B",
  },
  {
    name: "Fresh Tomatoes",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67",
  },
  {
    name: "Red Onion",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C",
  },
  {
    name: "Sweet Ananas",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0",
  },
  {
    name: "Italian Herbs",
    price: 39,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png",
  },
  {
    name: "Mild Garlic",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B",
  },
  {
    name: "Crunchy Bread Crumbs",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349",
  },
  {
    name: "Meatballs",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: "Omelet with Mushrooms and Herbs",
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/049/116/745/non_2x/mushroom-omelet-with-salad-on-a-plate-free-png.png",
    categoryId: 2,
  },
  {
    name: "Omelet with Peppers",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYm_0L0CazjkSFMgTL-vDjfw-Ei-V0R8ia5w&s",
    categoryId: 2,
  },
  {
    name: "Latte Coffee",
    imageUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/023/742/327/small_2x/latte-coffee-isolated-illustration-ai-generative-free-png.png",
    categoryId: 2,
  },
  {
    name: "Chicken Wings with Garlic and Herbs",
    imageUrl:
      "https://png.pngtree.com/png-clipart/20250115/original/pngtree-herb-seasoned-grilled-chicken-wings-for-flavorful-bbq-dishes-png-image_20145998.png",
    categoryId: 3,
  },
  {
    name: "Fried Chicken with Mushrooms",
    imageUrl:
      "https://png.pngtree.com/png-clipart/20250228/original/pngtree-stir-fried-chicken-with-mushrooms-and-bell-peppers-png-image_20534502.png",
    categoryId: 3,
  },
  {
    name: "Potatoes with Mushrooms in Cream Sauce",
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/041/712/469/non_2x/ai-generated-savory-beef-stew-with-potatoes-and-mushrooms-in-a-creamy-sauce-on-transparent-background-stock-png.png",
    categoryId: 3,
  },
  {
    name: "Dosters",
    imageUrl:
      "https://png.pngtree.com/png-clipart/20250111/original/pngtree-healthy-tortilla-wraps-with-chicken-and-salad-png-image_19088871.png",
    categoryId: 3,
  },
  {
    name: "Spicy Doster",
    imageUrl:
      "https://png.pngtree.com/png-clipart/20250111/original/pngtree-healthy-tortilla-wraps-with-chicken-and-salad-png-image_19088871.png",
    categoryId: 3,
  },
  {
    name: "Banana Milkshake",
    imageUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/035/675/712/small/ai-generated-banana-smoothie-in-a-glass-free-png.png",
    categoryId: 4,
  },
  {
    name: "Caramel Apple Milkshake",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCr2xvWud4HXbWRljbP12RZNyM3coJsEErOw&s",
    categoryId: 4,
  },
  {
    name: "Milkshake with Oreos",
    imageUrl:
      "https://png.pngtree.com/png-clipart/20240902/original/pngtree-oreo-shake-image-png-image_15916561.png",
    categoryId: 4,
  },
  {
    name: "Classic Milkshake",
    imageUrl:
      "https://png.pngtree.com/png-clipart/20240505/original/pngtree-classic-milkshake-in-retro-diner-glass-isolated-on-white-background-png-image_15014401.png",
    categoryId: 4,
  },
  {
    name: "Irish Capuccino",
    imageUrl:
      "https://png.pngtree.com/png-clipart/20240703/original/pngtree-irish-coffee-with-whipped-cream-and-a-stirrer-png-image_15473333.png",
    categoryId: 5,
  },
  {
    name: "Caramel Capuccino",
    imageUrl:
      "https://png.pngtree.com/png-vector/20241225/ourmid/pngtree-rich-creamy-irish-coffee-clipart-illustration-png-image_14878898.png",
    categoryId: 5,
  },
  {
    name: "Coffee Latte",
    imageUrl:
      "https://png.pngtree.com/png-vector/20241225/ourmid/pngtree-rich-creamy-irish-coffee-clipart-illustration-png-image_14878898.png",
    categoryId: 5,
  },
  {
    name: "Americano Coffee",
    imageUrl:
      "https://png.pngtree.com/png-vector/20240821/ourmid/pngtree-top-americano-coffee-png-image_13268228.png",
    categoryId: 5,
  },
];
