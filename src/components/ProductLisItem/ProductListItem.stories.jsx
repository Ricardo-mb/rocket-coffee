import { ProductListItem } from "./ProductListItem.jsx";
import { action } from "@storybook/addon-actions";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "ProductListItem", // The title under which the story will appear in Storybook
  component: ProductListItem, // The actual component you're rendering in the story
  decorators: [withKnobs],
};

export const standard = () => (
  <ProductListItem
    name={text("Name", "Standard Coffee")}
    price={text("price", "2.50")}
    onAddToCart={action("Add to cart clicked")}
    imageUrl={text("imageUrl", "https://unsplash.it/600/400?image=501")}
  />
);

export const soldOut = () => (
  <ProductListItem
    name={text("Name", "Standard Coffee")}
    price={text("price", "2.50")}
    onAddToCart={action("Add to cart clicked")}
    imageUrl={text("imageUrl", "https://unsplash.it/g/600/400?image=501")}
    isSoldOut
  />
);
