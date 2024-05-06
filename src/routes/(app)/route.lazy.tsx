import { useSuspenseQuery } from "@tanstack/react-query"
import { createLazyFileRoute } from "@tanstack/react-router"
import { css } from "styled-system/css"

export const Page = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["helloworld"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return "Hello World!"
    },
  })

  return (
    <div className={css({ padding: "2" })}>
      <h3>{data}</h3>
    </div>
  )
}

export const Route = createLazyFileRoute("/(app)")({
  component: Page,
})
