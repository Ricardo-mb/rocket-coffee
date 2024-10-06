import { text } from "@storybook/addon-knobs";
import { Card } from "./Card";

export default { title: "atoms/Card", component: Card };

export const standard = () => (
  <Card>
    {text("Name", "Standard Coffee")}
    <br />
    <img
      src={text("imageUrl", "https://unsplash.it/600/400?image=501")}
      alt={text("Name", "Standard Coffee")}
      style={{ width: "100%", height: "auto" }}
    />
  </Card>
);
