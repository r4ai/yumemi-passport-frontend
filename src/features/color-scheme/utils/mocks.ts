import { act } from "@testing-library/react"
import { vi } from "vitest"

import { ResolvedColorScheme } from "./color-scheme"

export const mockMatchMedia = (systemColorScheme: ResolvedColorScheme) => {
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: query === `(prefers-color-scheme: ${systemColorScheme})`,
    media: query,
    onchange: null,
    addEventListener: vi.fn().mockImplementation((_, callback) => {
      // @ts-expect-error `this` is `MediaQueryList`
      this.onchange = callback
    }),
    removeEventListener: vi.fn().mockImplementation(() => {
      // @ts-expect-error `this` is `MediaQueryList`
      this.onchange = null
    }),
    dispatchEvent: vi.fn().mockImplementation((event) => {
      // @ts-expect-error `this` is `MediaQueryList`
      this.onchange?.(event)
    }),
  }))
}

export const changeSystemColorScheme = (
  systemColorScheme: ResolvedColorScheme,
) => {
  mockMatchMedia(systemColorScheme)
  act(() => {
    window
      .matchMedia(`(prefers-color-scheme: ${systemColorScheme})`)
      .dispatchEvent(new Event("change"))
  })
}
