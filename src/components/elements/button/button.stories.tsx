import { Meta, StoryObj } from "@storybook/react"
import { expect, fn, userEvent } from "@storybook/test"

import { Button } from "./button"

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Button",
    onClick: fn(),
  },
} satisfies Meta<typeof Button>
export default meta

type Story = StoryObj<typeof meta>

export const Solid: Story = {
  play: async ({ args, canvasElement, step }) => {
    const button = canvasElement.querySelector("button")!

    await step("Button が存在すること", async () => {
      await expect(button).toBeInTheDocument()
      await expect(button?.tagName.toLocaleLowerCase()).toBe("button")
      await expect(button).toHaveTextContent(args.children)
    })

    await step("Button がクリックできること", async () => {
      await userEvent.click(button)
      await expect(button).toHaveFocus()
      await expect(args.onClick).toHaveBeenCalled()
    })
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
}

export const Link: Story = {
  args: {
    variant: "link",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
