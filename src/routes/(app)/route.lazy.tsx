import { createLazyFileRoute } from "@tanstack/react-router"
import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { css } from "styled-system/css"

import * as PopulationGraph from "./-components/population-graph"
import * as PrefecturesCheckboxGroup from "./-components/prefectures-checkbox-group"
import { useSelectedPrefectures } from "./-hooks/use-selected-prefectures"

export const Page = () => {
  const { selectedPrefectures, selectPrefecture, deselectPrefecture } =
    useSelectedPrefectures([{ prefCode: 13, prefName: "東京都" }])

  return (
    <div
      className={css({
        padding: "4",
        display: "flex",
        flexDirection: "column",
        gap: "8",
        width: "100%",
      })}
    >
      <Suspense fallback={<PrefecturesCheckboxGroup.Loading />}>
        <ErrorBoundary fallbackRender={PrefecturesCheckboxGroup.Error}>
          <PrefecturesCheckboxGroup.Container
            selectedPrefectures={selectedPrefectures}
            onSelectPrefecture={selectPrefecture}
            onDeselectPrefecture={deselectPrefecture}
          />
        </ErrorBoundary>
      </Suspense>
      <Suspense fallback={<PopulationGraph.Loading />}>
        <ErrorBoundary fallbackRender={PopulationGraph.Error}>
          <PopulationGraph.Container
            selectedPrefectures={selectedPrefectures}
          />
        </ErrorBoundary>
      </Suspense>
    </div>
  )
}

export const Route = createLazyFileRoute("/(app)")({
  component: Page,
})
