import type { Meta, StoryObj } from "@storybook/react"

import { Loading } from "./loading"

const meta = {
  title: "Routes/(App)/PrefecturesCheckboxGroup/Loading",
  tags: ["autodocs"],
  component: Loading,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Loading>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
