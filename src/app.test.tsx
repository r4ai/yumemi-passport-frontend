import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { App } from "./app"

describe(App.name, () => {
  test("innerTextを持っていること", () => {
    const { getByRole } = render(<App />)
    expect(getByRole("heading").innerText).toBe("Hello Vite + React!")
  })
})
