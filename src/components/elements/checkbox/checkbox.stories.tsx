import type { Meta, StoryObj } from "@storybook/react"
import { expect, fn, userEvent, within } from "@storybook/test"
import { useState } from "react"

import { Checkbox } from "./checkbox"

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    defaultChecked: false,
    onCheckedChange: fn(),
  },
} satisfies Meta<typeof Checkbox>
export default meta

type Story = StoryObj<typeof meta>

const testCheckbox: Story["play"] = async ({ args, canvasElement, step }) => {
  const canvas = within(canvasElement)
  const checkbox = await canvas.findByRole("checkbox")

  await step("checkboxを正常にクリックできること", async () => {
    await userEvent.click(checkbox)
    await expect(checkbox).toHaveAttribute("aria-checked", "true")
    await expect(args.onCheckedChange).toHaveBeenCalledWith(
      !args.defaultChecked,
    )

    await userEvent.click(checkbox)
    await expect(checkbox).toHaveAttribute("aria-checked", "false")
    await expect(args.onCheckedChange).toHaveBeenCalledWith(args.defaultChecked)
  })

  await step("checkboxがフォーカスできること", async () => {
    checkbox.focus()
    await expect(checkbox).toHaveFocus()
    await userEvent.tab({ shift: true })
    await expect(checkbox).not.toHaveFocus()
    await userEvent.tab()
    await expect(checkbox).toHaveFocus()
    checkbox.blur()
  })

  await step("checkboxがキーボードで操作できること", async () => {
    checkbox.focus()
    await userEvent.keyboard("[Space]")
    await expect(checkbox).toHaveAttribute("aria-checked", "true")
    await expect(args.onCheckedChange).toHaveBeenCalledWith(
      !args.defaultChecked,
    )

    await userEvent.keyboard("[Enter]")
    await expect(checkbox).toHaveAttribute("aria-checked", "true")
    await expect(args.onCheckedChange).toHaveBeenCalledWith(
      !args.defaultChecked,
    )

    await userEvent.keyboard("[Space]")
    await expect(checkbox).toHaveAttribute("aria-checked", "false")
    await expect(args.onCheckedChange).toHaveBeenCalledWith(args.defaultChecked)
    checkbox.blur()
  })
}

const testDisabledCheckbox: Story["play"] = async ({
  args,
  canvasElement,
  step,
}) => {
  const canvas = within(canvasElement)
  const checkbox = await canvas.findByRole("checkbox")

  await step("checkboxがクリックできないこと", async () => {
    await userEvent.click(checkbox)
    await expect(checkbox).toHaveAttribute("aria-checked", "false")
    await expect(args.onCheckedChange).not.toHaveBeenCalled()
  })

  await step("checkboxがフォーカスできないこと", async () => {
    checkbox.focus()
    await expect(checkbox).not.toHaveFocus()
  })

  await step("checkboxがキーボードで操作できないこと", async () => {
    checkbox.focus()
    await userEvent.keyboard("[Space]")
    await expect(checkbox).toHaveAttribute("aria-checked", "false")
    await expect(args.onCheckedChange).not.toHaveBeenCalled()
  })
}

export const WithoutLabel: Story = {
  args: {
    id: "check-me",
    defaultChecked: false,
  },
  play: testCheckbox,
}

export const WithLabel: Story = {
  args: {
    label: "Check me!",
    id: "check-me",
    defaultChecked: false,
  },
  play: testCheckbox,
}

export const Disabled: Story = {
  args: {
    label: "Check me!",
    id: "check-me",
    disabled: true,
  },
  play: testDisabledCheckbox,
}

export const Required: Story = {
  args: {
    label: "Check me!",
    id: "check-me",
    defaultChecked: false,
    required: true,
  },
  play: testCheckbox,
}

const ControlledCheckbox = (args: Story["args"]) => {
  const [checked, setChecked] = useState(true)
  return (
    <Checkbox
      {...args}
      id="check-me"
      checked={checked}
      onCheckedChange={setChecked}
      label={checked ? "Checked" : "Unchecked"}
    />
  )
}

export const Controlled: Story = {
  render: ControlledCheckbox,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const checkbox = await canvas.findByRole("checkbox")

    await step("checkboxが正常に操作できること", async () => {
      await userEvent.click(checkbox)
      await expect(checkbox).toHaveAttribute("aria-checked", "false")
      await expect(checkbox).toHaveTextContent("Unchecked")

      await userEvent.click(checkbox)
      await expect(checkbox).toHaveAttribute("aria-checked", "true")
      await expect(checkbox).toHaveTextContent("Checked")
    })
  },
}
