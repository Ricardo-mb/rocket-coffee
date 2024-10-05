/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-actions",
    "@storybook/addon-knobs",
  ],
  // core: {
  //   builder: "@storybook/builder-vite",
  // },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
