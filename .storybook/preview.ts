import "../src/styles/global.css"
import "./preview.css"

import { withThemeByDataAttribute } from "@storybook/addon-themes"
import type { Preview } from "@storybook/react"
import { themes } from "@storybook/theming"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
      attributeName: "data-color-scheme",
    }),
  ],
}

export default preview
