import { act, renderHook } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { useSelectedPrefectures } from "./use-selected-prefectures"

describe(useSelectedPrefectures.name, () => {
  test("defaultSelectedPrefecturesが指定されていない時に空の配列が返ること", () => {
    const { result } = renderHook(() => useSelectedPrefectures())
    expect(result.current.selectedPrefectures).toEqual([])
  })

  test("defaultSelectedPrefecturesが指定されている時にその値が返ること", () => {
    const defaultSelectedPrefectures = [{ prefCode: 1, prefName: "北海道" }]
    const { result } = renderHook(() =>
      useSelectedPrefectures(defaultSelectedPrefectures),
    )
    expect(result.current.selectedPrefectures).toEqual(
      defaultSelectedPrefectures,
    )
  })

  test("selectPrefectureで選択した都道府県がselectedPrefecturesに追加されること", () => {
    const { result } = renderHook(() => useSelectedPrefectures())

    const prefecture1 = { prefCode: 1, prefName: "北海道" }
    act(() => result.current.selectPrefecture(prefecture1))
    expect(result.current.selectedPrefectures).toEqual([prefecture1])

    const prefecture2 = { prefCode: 2, prefName: "青森県" }
    act(() => result.current.selectPrefecture(prefecture2))
    expect(result.current.selectedPrefectures).toEqual([
      prefecture1,
      prefecture2,
    ])
  })

  test("deselectPrefectureで選択解除した都道府県がselectedPrefecturesから削除されること", () => {
    const { result } = renderHook(() =>
      useSelectedPrefectures([
        { prefCode: 1, prefName: "北海道" },
        { prefCode: 2, prefName: "青森県" },
      ]),
    )

    act(() =>
      result.current.deselectPrefecture({ prefCode: 1, prefName: "北海道" }),
    )
    expect(result.current.selectedPrefectures).toEqual([
      { prefCode: 2, prefName: "青森県" },
    ])

    act(() =>
      result.current.deselectPrefecture({ prefCode: 2, prefName: "青森県" }),
    )
    expect(result.current.selectedPrefectures).toEqual([])
  })
})
