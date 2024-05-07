import { FC } from "react"
import { cx, sva } from "styled-system/css"

export type FooterProps = {
  className?: string
}

export const Footer: FC<FooterProps> = ({ className }) => {
  const styles = footer()
  return (
    <footer className={cx(styles.root, className)}>
      <p className={styles.text}>
        Copyright &copy; 2024 r4ai - All rights reserved
      </p>
    </footer>
  )
}

const footer = sva({
  slots: ["root", "text"],
  base: {
    root: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingY: "4",
      backgroundColor: "background",
      borderTopColor: "border",
      borderTopWidth: 1,
      borderTopStyle: "solid",
    },
    text: {
      fontSize: "sm",
    },
  },
})
