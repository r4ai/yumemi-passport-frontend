import { fetchResasApi } from "../helpers"

type Data = {
  label: string
  data: {
    /** 年 */
    year: number
    /** 人口 */
    value: number
    /** 割合 */
    rate: number
  }[]
}

export type PopulationCompositionPerYear = {
  /** 実績値と推計値の区切り年 */
  boundaryYear: number
  data: [
    Omit<Data, "data"> & {
      label: "総人口"
      data: Omit<Data["data"][number], "rate">[]
    },
    Data & { label: "年少人口" },
    Data & { label: "生産年齢人口" },
    Data & { label: "老年人口" },
  ]
}

/**
 * 人口構成データを取得する
 * @param prefCode 都道府県コード
 * @param cityCode 市区町村コード (すべての市区町村を選択する場合は"-"を指定)
 * @param addArea 追加エリアコード
 * @see https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html
 */
export const fetchPopulationCompositionPerYear = (
  prefCode: number,
  cityCode: number | "-",
  addArea?: string,
) => {
  const params = new URLSearchParams({
    prefCode: prefCode.toString(),
    cityCode: cityCode.toString(),
  })
  if (addArea) {
    params.append("addArea", addArea)
  }
  return fetchResasApi<PopulationCompositionPerYear>(
    `/api/resas/v1/population/composition/perYear?${params}`,
  )
}
