import { createLazyFileRoute } from "@tanstack/react-router"
import { css } from "styled-system/css"

export const Page = () => {
  return (
    <div className={css({ padding: "2" })}>
      <h3>Welcome Home!</h3>
    </div>
  )
}

export const Route = createLazyFileRoute("/(app)")({
  component: Page,
})
