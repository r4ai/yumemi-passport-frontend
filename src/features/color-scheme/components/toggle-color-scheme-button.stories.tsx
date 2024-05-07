import { Meta, StoryObj } from "@storybook/react"
import { expect, userEvent, within } from "@storybook/test"

import { ColorSchemeProvider } from "../contexts/color-scheme-context"
import { ToggleColorSchemeButton } from "./toggle-color-scheme-button"

const meta = {
  title: "Features/ColorScheme/ToggleColorSchemeButton",
  component: () => (
    <ColorSchemeProvider
      initialColorScheme="light"
      initialResolvedColorScheme="light"
    >
      <ToggleColorSchemeButton />
    </ColorSchemeProvider>
  ),
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Button",
  },
} satisfies Meta<typeof ToggleColorSchemeButton>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole("button")

    await userEvent.click(button)
    await expect(
      document.documentElement.getAttribute("data-color-scheme"),
    ).toBe("dark")

    await userEvent.click(button)
    await expect(
      document.documentElement.getAttribute("data-color-scheme"),
    ).toBe("light")
  },
}
