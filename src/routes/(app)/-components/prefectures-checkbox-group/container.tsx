import { useSuspenseQuery } from "@tanstack/react-query"
import { FC } from "react"

import { fetchPrefectures } from "~/api/resas"

import { Presenter, PresenterProps } from "./presenter"

export type Container = Omit<PresenterProps, "prefectures">

export const Container: FC<Container> = (props) => {
  const { data: prefectures } = useSuspenseQuery({
    queryKey: ["prefectures"],
    queryFn: fetchPrefectures,
  })
  return <Presenter prefectures={prefectures} {...props} />
}
