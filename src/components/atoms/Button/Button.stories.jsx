import { text } from "@storybook/addon-knobs";
import { Button } from "./Button";
import { action } from "@storybook/addon-actions";

export default { title: "atoms/Button", component: Button };

export const standard = () => (
  <Button onAddToCart={action("Add to cart clicked")}>
    {text("Button Text", "Add to Cart")}
  </Button>
);
