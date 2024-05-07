import "../src/styles/global.css"
import "./preview.css"

import { withThemeByDataAttribute } from "@storybook/addon-themes"
import type { Preview } from "@storybook/react"
import { themes } from "@storybook/theming"
import React from "react"

import { ColorSchemeProvider } from "../src/features/color-scheme"

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
    (Story) => (
      <ColorSchemeProvider>
        <Story />
      </ColorSchemeProvider>
    ),
  ],
}

export default preview
