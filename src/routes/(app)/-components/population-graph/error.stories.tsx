import type { Meta, StoryObj } from "@storybook/react"

import { Error } from "./error"

const meta = {
  title: "Routes/(App)/PopulationGraph/Error",
  tags: ["autodocs"],
  component: Error,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Error>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    error: {
      message: "403 Forbidden",
    },
    resetErrorBoundary: () => {},
  },
}
