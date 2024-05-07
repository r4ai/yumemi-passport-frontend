import { useState } from "react"

import { Prefecture, Prefectures } from "~/api/resas"

export const useSelectedPrefectures = (
  defaultSelectedPrefectures?: Prefectures,
) => {
  const [selectedPrefectures, setSelectedPrefectures] = useState<Prefectures>(
    defaultSelectedPrefectures ?? [],
  )

  const selectPrefecture = (prefecture: Prefecture) =>
    setSelectedPrefectures((prev) => [...prev, prefecture])
  const deselectPrefecture = (prefecture: Prefecture) =>
    setSelectedPrefectures((prev) =>
      prev.filter((p) => p.prefCode !== prefecture.prefCode),
    )

  return {
    selectedPrefectures,
    selectPrefecture,
    deselectPrefecture,
  }
}
