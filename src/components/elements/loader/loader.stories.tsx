import type { Meta, StoryObj } from "@storybook/react"

import { Loader } from "./loader"

const meta = {
  title: "UI/Loader",
  tags: ["autodocs"],
  component: Loader,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Loader>
export default meta

type Story = StoryObj<typeof meta>

export const Medium: Story = {}

export const Large: Story = {
  args: {
    size: "lg",
  },
}
