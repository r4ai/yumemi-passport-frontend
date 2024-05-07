import { FC, ReactNode } from "react"
import { cx, sva } from "styled-system/css"

import { Footer } from "../footer"
import { Header } from "../header"

export type RootLayoutProps = {
  className?: string
  children?: ReactNode
}

export const RootLayout: FC<RootLayoutProps> = ({ className, children }) => {
  const styles = rootLayout()
  return (
    <div className={cx(styles.root, className)}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

const rootLayout = sva({
  slots: ["root", "main"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100%",
    },
    main: {
      flex: "1",
    },
  },
})
