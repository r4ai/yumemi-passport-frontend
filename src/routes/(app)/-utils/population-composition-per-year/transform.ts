import { PopulationCompositionPerYear } from "~/api/resas"
import { PresenterProps } from "~/routes/(app)/-components/population-graph/presenter"

export const transformPopulationDataForGraph = (
  data: {
    populationCompositionPerYear: PopulationCompositionPerYear["data"]
    prefCode: number
    prefName: string
  }[],
): PresenterProps => {
  const prefectures = data.map(({ prefCode, prefName }) => ({
    prefCode,
    prefName,
  }))
  const transformedData: PresenterProps["data"] = {
    年少人口: [],
    生産年齢人口: [],
    老年人口: [],
    総人口: [],
  }
  for (const { populationCompositionPerYear, prefCode } of data) {
    for (const { label, data } of populationCompositionPerYear) {
      for (const { year, value } of data) {
        const dataInYear = transformedData[label].find((d) => d.year === year)
        if (dataInYear) {
          dataInYear.populationPerPrefecture[prefCode] = value
        } else {
          transformedData[label].push({
            year,
            populationPerPrefecture: { [prefCode]: value },
          })
        }
      }
    }
  }
  return { data: transformedData, prefectures }
}
