import { FC } from "react"
import { sva } from "styled-system/css"

import { Loader } from "~/components/elements/loader"

export const Loading: FC = () => {
  const styles = loading()
  return (
    <div className={styles.root}>
      <Loader />
      <p>都道府県一覧を取得中です...</p>
    </div>
  )
}

const loading = sva({
  slots: ["root"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "6",
    },
  },
})
