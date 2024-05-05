import { FC } from "react"
import { css } from "styled-system/css"

export const App: FC = () => {
  return (
    <div>
      <h1 className={css({ fontSize: "2xl", fontWeight: "bold" })}>
        Hello Vite + React!
      </h1>
    </div>
  )
}
