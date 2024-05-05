import { defineConfig, defineGlobalStyles } from "@pandacss/dev"

export default defineConfig({
  preflight: true,
  jsxFramework: "react",
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          foreground: {
            DEFAULT: {
              value: {
                base: "{colors.zinc.950}",
                _dark: "{colors.zinc.50}",
              },
            },
            muted: {
              value: {
                base: "{colors.zinc.600}",
                _dark: "{colors.zinc.400}",
              },
            },
            accent: {
              value: {
                base: "{colors.zinc.100}",
                _dark: "{colors.zinc.800}",
              },
            },
          },
          background: {
            DEFAULT: {
              value: {
                base: "{colors.white}",
                _dark: "{colors.zinc.950}",
              },
            },
            muted: {
              value: {
                base: "{colors.zinc.100}",
                _dark: "{colors.zinc.900}",
              },
            },
            accent: {
              value: {
                base: "{colors.zinc.800}",
                _dark: "{colors.zinc.100}",
              },
            },
          },
          border: {
            value: {
              base: "{colors.zinc.200}",
              _dark: "{colors.zinc.800}",
            },
          },
          outline: {
            value: {
              base: "{colors.zinc.400}",
              _dark: "{colors.zinc.600}",
            },
          },
        },
      },
    },
  },
  conditions: {
    light: "[data-color-scheme=light] &",
    dark: "[data-color-scheme=dark] &",
    extend: {
      groupRequired:
        ".group:is(:required, [required], [data-required], [aria-required]) &",
    },
  },
  globalCss: defineGlobalStyles({
    "html, body, div#app": {
      height: "100%",
    },
    body: {
      backgroundColor: "background",
      color: "foreground",
    },
    "*": {
      borderColor: "zinc.600",
    },
  }),
  outdir: "styled-system",
})
