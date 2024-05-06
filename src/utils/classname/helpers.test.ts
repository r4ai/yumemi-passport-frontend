import { describe, expect, test } from "vitest"

import { unique } from "./helpers"

describe(unique.name, () => {
  test("空の配列を渡すと空の配列が返ること", () => {
    expect(unique([])).toEqual([])
  })

  test("重複がない場合はそのまま返すこと", () => {
    expect(unique(["a", "b", "c"])).toEqual(["a", "b", "c"])
    expect(unique([1, 2, 3])).toEqual([1, 2, 3])
    expect(unique([true, false, 1, 0, null, undefined])).toEqual([
      true,
      false,
      1,
      0,
      null,
      undefined,
    ])
  })

  test("重複がある場合は重複を削除して返すこと", () => {
    expect(unique(["a", "b", "a", "c", "b"])).toEqual(["a", "b", "c"])
    expect(unique([1, 2, 1, 3, 2])).toEqual([1, 2, 3])
    expect(
      unique([true, false, true, 1, 0, null, 1, undefined, "", false]),
    ).toEqual([true, false, 1, 0, null, undefined, ""])
  })
})
