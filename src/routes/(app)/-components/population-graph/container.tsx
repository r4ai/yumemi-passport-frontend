import { useSuspenseQueries } from "@tanstack/react-query"
import { FC } from "react"

import { fetchPopulationCompositionPerYear, Prefectures } from "~/api/resas"

import { transformPopulationDataForGraph } from "../../-utils/population-composition-per-year"
import { Presenter } from "./presenter"

export type ContainerProps = {
  selectedPrefectures: Prefectures
}

export const Container: FC<ContainerProps> = ({ selectedPrefectures }) => {
  const results = useSuspenseQueries({
    queries: selectedPrefectures.map(({ prefCode, prefName }) => ({
      queryKey: ["population-composition-per-year", prefCode],
      queryFn: () =>
        fetchPopulationCompositionPerYear(prefCode, "-").then(({ data }) => ({
          prefCode,
          prefName,
          populationCompositionPerYear: data,
        })),
    })),
  })

  return (
    <Presenter
      {...transformPopulationDataForGraph(results.map(({ data }) => data))}
    />
  )
}
