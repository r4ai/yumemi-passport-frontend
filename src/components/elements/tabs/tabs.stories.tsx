import type { Meta, StoryObj } from "@storybook/react"
import { expect, userEvent, within } from "@storybook/test"
import { css } from "styled-system/css"

import { Tabs } from "./tabs"

const meta = {
  title: "UI/Tabs",
  tags: ["autodocs"],
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  args: {
    tabs: [
      {
        id: "tab1",
        tab: "Tab 1",
        tabPanel: "Panel 1",
      },
      {
        id: "tab2",
        tab: "Tab 2",
        tabPanel: "Panel 2",
      },
    ],
  },
} satisfies Meta<typeof Tabs>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement)

    const [tab1, tab2] = canvas.getAllByRole("tab")
    const panel = canvas.getByRole("tabpanel")

    // @see https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-automatic/#kbd_label
    await step("キーボードショートカットが正常に動作すること", async () => {
      // Tab
      await userEvent.tab()
      await expect(tab1).toHaveFocus()
      await userEvent.tab()
      await expect(panel).toHaveFocus()

      // Right Arrow
      tab1.focus()
      await userEvent.keyboard("[ArrowRight]")
      await expect(tab2).toHaveFocus()
      await userEvent.keyboard("[ArrowRight]")
      await expect(tab1).toHaveFocus()

      // Left Arrow
      tab1.focus()
      await userEvent.keyboard("[ArrowLeft]")
      await expect(tab2).toHaveFocus()
      await userEvent.keyboard("[ArrowLeft]")
      await expect(tab1).toHaveFocus()

      // Home
      tab2.focus()
      await userEvent.keyboard("[Home]")
      await expect(tab1).toHaveFocus()

      // End
      tab1.focus()
      await userEvent.keyboard("[End]")
      await expect(tab2).toHaveFocus()
    })

    await step("タブを切り替えることができること", async () => {
      await userEvent.click(tab2)
      const panel2 = canvas.getByRole("tabpanel")
      await expect(panel2).toHaveTextContent(args.tabs[1].tabPanel!.toString())

      await userEvent.click(tab1)
      const panel1 = canvas.getByRole("tabpanel")
      await expect(panel1).toHaveTextContent(args.tabs[0].tabPanel!.toString())
    })
  },
}

const Panel = ({ title }: { title: string }) => {
  return (
    <div
      className={css({ display: "flex", flexDirection: "column", gap: "2" })}
    >
      <h2 className={css({ fontSize: "xl", fontWeight: "bold" })}>{title}</h2>
      <p>Here is the content of the panel.</p>
      <blockquote
        className={css({
          borderLeft: "solid 4px",
          borderColor: "border",
          paddingLeft: "3",
        })}
      >
        Done is better than perfect.
      </blockquote>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  )
}

export const Complicated: Story = {
  args: {
    tabs: [
      {
        id: "tab1",
        tab: "Tab 1",
        tabPanel: <Panel title="Panel 1" />,
      },
      {
        id: "tab2",
        tab: "Tab 2",
        tabPanel: <Panel title="Panel 2" />,
      },
      {
        id: "tab3",
        tab: "Tab 3",
        tabPanel: <Panel title="Panel 3" />,
      },
    ],
    align: "center",
  },
}
