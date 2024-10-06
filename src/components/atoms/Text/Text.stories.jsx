import { text } from "@storybook/addon-knobs";
import { Text } from "./Text";

export default {
  title: "atoms/Text",
  component: Text,
};

export const standard = () => <Text>{text("Price", "2.50")}</Text>;
