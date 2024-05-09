import { FallbackProps } from "react-error-boundary"
import { sva } from "styled-system/css"

export const Error = (props: FallbackProps) => {
  const styles = error()
  return (
    <div className={styles.root}>
      <p className={styles.title}>人口構成データの取得に失敗しました</p>
      <pre className={styles.message}>{props.error.message}</pre>
    </div>
  )
}

const error = sva({
  slots: ["root", "title", "message"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "6",
    },
    title: {
      fontSize: "xl",
      fontWeight: "bold",
    },
    message: {
      fontSize: "md",
      fontFamily: "mono",
    },
  },
})
