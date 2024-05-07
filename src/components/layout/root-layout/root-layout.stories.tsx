import type { Meta, StoryObj } from "@storybook/react"
import { css } from "styled-system/css"

import { RootLayout } from "./root-layout"

const meta = {
  title: "Layout/RootLayout",
  tags: ["autodocs"],
  component: (props) => (
    <div className={css({ height: "xl" })}>
      <RootLayout {...props} />
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
  args: {
    children: <div>children</div>,
  },
} satisfies Meta<typeof RootLayout>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
