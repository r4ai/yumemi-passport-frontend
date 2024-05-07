import { fetchResasApi } from "../helpers"

export type Prefecture = {
  /** 都道府県コード */
  prefCode: number
  /** 都道府県名 */
  prefName: string
}

export type Prefectures = Prefecture[]

/**
 * 都道府県一覧を取得する
 * @see https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
 */
export const fetchPrefectures = () =>
  fetchResasApi<Prefectures>("/api/resas/v1/prefectures")
