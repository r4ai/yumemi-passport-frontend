import { createLazyFileRoute } from "@tanstack/react-router"
import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { css } from "styled-system/css"

import * as PrefecturesCheckboxGroup from "./-components/prefectures-checkbox-group"
import { useSelectedPrefectures } from "./-hooks/use-selected-prefectures"

export const Page = () => {
  const { selectedPrefectures, selectPrefecture, deselectPrefecture } =
    useSelectedPrefectures()

  return (
    <div className={css({ padding: "2" })}>
      <Suspense fallback={<PrefecturesCheckboxGroup.Loading />}>
        <ErrorBoundary fallbackRender={PrefecturesCheckboxGroup.Error}>
          <PrefecturesCheckboxGroup.Container
            selectedPrefectures={selectedPrefectures}
            onSelectPrefecture={selectPrefecture}
            onDeselectPrefecture={deselectPrefecture}
          />
        </ErrorBoundary>
      </Suspense>
    </div>
  )
}

export const Route = createLazyFileRoute("/(app)")({
  component: Page,
})
