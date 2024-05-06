import { describe, expect, test } from "vitest"

import { merge } from "./merge"

describe(merge.name, () => {
  test("空の引数を渡すと空の文字列を返すこと", () => {
    expect(merge()).toEqual("")
  })

  test("nullやundefinedや空文字列等を除外すること", () => {
    expect(merge(null, undefined, "", false, NaN)).toEqual("")
    expect(merge(null, undefined, "", false, NaN, "a", "b", "c")).toEqual(
      "a b c",
    )
  })

  test("重複を削除しつつ結合すること", () => {
    expect(merge("a", "b", "a", "c")).toEqual("a b c")
    expect(merge("a", "b", "c", "b", "a", "c")).toEqual("a b c")
    expect(merge(1, 5, "a", false, "ba", "ba", "a", NaN)).toEqual("1 5 a ba")
  })
})
