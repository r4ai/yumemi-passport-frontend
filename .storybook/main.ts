import type { StorybookConfig } from "@storybook/react-vite"

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-themes",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-coverage",
      options: {
        istanbul: {
          include: [
            "src/**/@(components|-components)/**/*",
            "src/routes/__root.tsx",
            "src/routes/**/*.@(route,route.lazy).tsx",
          ],
        },
      },
    },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    check: true,
    reactDocgen: "react-docgen-typescript",
  },
}
export default config
