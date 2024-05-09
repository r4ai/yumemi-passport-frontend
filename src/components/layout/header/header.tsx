import { GithubIcon } from "lucide-react"
import { FC } from "react"
import { cx, sva } from "styled-system/css"

import { Button } from "~/components/elements"
import { ToggleColorSchemeButton } from "~/features/color-scheme"

export type HeaderProps = {
  className?: string
}

export const Header: FC<HeaderProps> = ({ className }) => {
  const styles = header()

  return (
    <header className={cx(styles.root, className)}>
      <div className={styles.container}>
        <Button variant="ghost" as="a" href="/" className={styles.title}>
          都道府県別の総人口推移グラフ
        </Button>
      </div>
      <div className={styles.container}>
        <Button
          variant="outline"
          size="icon"
          as="a"
          href="https://github.com/r4ai/yumemi-passport-frontend"
        >
          <GithubIcon />
        </Button>
        <ToggleColorSchemeButton />
      </div>
    </header>
  )
}

const header = sva({
  slots: ["root", "container", "title"],
  base: {
    root: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingY: "2",
      paddingX: "2",
      gap: "3",
      backgroundColor: "background",
      borderBottomColor: "border",
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
      sm: {
        paddingX: "2",
      },
      md: {
        paddingX: "6",
      },
    },
    container: {
      display: "flex",
      alignItems: "center",
      gap: "3",
    },
    title: {
      fontWeight: "bold",
      fontSize: "md",
      whiteSpace: "wrap",
    },
  },
})
