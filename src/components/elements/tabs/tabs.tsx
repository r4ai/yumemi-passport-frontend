import {
  ComponentPropsWithoutRef,
  FC,
  KeyboardEvent,
  ReactNode,
  useId,
  useRef,
  useState,
} from "react"
import { cx, RecipeVariantProps, sva } from "styled-system/css"

type Tab = {
  id: string
  tab: ReactNode
  tabClassName?: string
  tabPanel: ReactNode
  tabPanelClassName?: string
}

export type TabsProps = ComponentPropsWithoutRef<"div"> &
  RecipeVariantProps<typeof tabsStyles> & {
    tabs: Tab[]
    defaultActiveTabId?: string
  }

export const Tabs: FC<TabsProps> = ({
  tabs,
  defaultActiveTabId = tabs[0].id,
  className,
  align = "left",
  ...props
}) => {
  const styles = tabsStyles({ align })
  const [activeTabId, setActiveTabId] = useState(defaultActiveTabId)
  const baseId = useId()
  const tabsRef = useRef<HTMLButtonElement[]>([])

  /**
   * キーボード操作によるタブの切り替え
   * @see https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-automatic/#kbd_label
   */
  const handleKeyDown =
    (i: number) => (event: KeyboardEvent<HTMLButtonElement>) => {
      switch (event.key) {
        case "ArrowRight": {
          event.preventDefault()
          const nextTab = tabs.at(i + 1) ?? tabs[0]
          const nextTabRef = tabsRef.current.at(i + 1) ?? tabsRef.current[0]
          nextTabRef.focus()
          setActiveTabId(nextTab.id)
          break
        }
        case "ArrowLeft": {
          event.preventDefault()
          const prevTab = tabs.at(i - 1) ?? tabs[tabs.length - 1]
          const prevTabRef =
            tabsRef.current.at(i - 1) ?? tabsRef.current[tabs.length - 1]
          prevTabRef.focus()
          setActiveTabId(prevTab.id)
          break
        }
        case "Home": {
          event.preventDefault()
          tabsRef.current[0].focus()
          setActiveTabId(tabs[0].id)
          break
        }
        case "End": {
          event.preventDefault()
          tabsRef.current[tabs.length - 1].focus()
          setActiveTabId(tabs[tabs.length - 1].id)
          break
        }
      }
    }

  return (
    <div {...props} className={cx(styles.root, className)}>
      <div role="tablist" className={styles.tablist}>
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            id={`${baseId}-tab-${tab.id}`}
            className={cx(styles.tab, tab.tabClassName)}
            role="tab"
            aria-selected={activeTabId === tab.id}
            aria-controls={`${baseId}-panel-${tab.id}`}
            tabIndex={activeTabId === tab.id ? 0 : -1}
            onClick={() => setActiveTabId(tab.id)}
            ref={(node) => {
              if (!node) return
              tabsRef.current[i] = node
            }}
            onKeyDown={handleKeyDown(i)}
          >
            {tab.tab}
          </button>
        ))}
      </div>
      {tabs.map((tab) =>
        tab.id === activeTabId ? (
          <div
            key={tab.id}
            id={`${baseId}-panel-${tab.id}`}
            className={cx(styles.tabpanel, tab.tabPanelClassName)}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${tab.id}`}
            tabIndex={0}
          >
            {tab.tabPanel}
          </div>
        ) : null,
      )}
    </div>
  )
}

const tabsStyles = sva({
  slots: ["root", "tablist", "tab", "tabpanel"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "2",
    },
    tablist: {
      display: "flex",
      flexDirection: "row",
      gap: "1",
    },
    tab: {
      paddingX: "4",
      paddingY: "2",
      rounded: "full",
      cursor: "pointer",
      transition: "colors",
      color: "foreground.muted",
      _hover: {
        color: "foreground",
        backgroundColor: "background.muted",
      },
      "&:is([aria-selected=true])": {
        color: "foreground",
        fontWeight: "bold",
        backgroundColor: "zinc.200",
        _dark: {
          backgroundColor: "zinc.800",
        },
      },
    },
  },
  variants: {
    align: {
      left: {
        tablist: {
          justifyContent: "flex-start",
        },
      },
      center: {
        tablist: {
          justifyContent: "center",
        },
      },
      right: {
        tablist: {
          justifyContent: "flex-end",
        },
      },
    },
  },
})
