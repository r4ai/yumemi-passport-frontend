import { act, renderHook } from "@testing-library/react"
import * as fc from "fast-check"
import { afterEach, describe, expect, test, vi } from "vitest"

import { ColorSchemeProvider } from "../contexts/color-scheme-context"
import {
  LOCAL_STORAGE_KEY_COLOR_SCHEME,
  resolveColorScheme,
  ResolvedColorScheme,
} from "../utils/color-scheme"
import { changeSystemColorScheme, mockMatchMedia } from "../utils/mocks"
import { useColorScheme } from "./use-color-scheme"

describe(useColorScheme.name, () => {
  afterEach(() => {
    vi.resetAllMocks()
    localStorage.clear()
  })

  test("ColorSchemeProviderの外でuseColorSchemeを呼び出すとエラーが発生すること", () => {
    // eslint-disable-next-line no-console
    console.error = vi.fn()
    expect(() => {
      renderHook(() => useColorScheme())
    }).toThrow()
  })

  test("setColorSchemeでcolorSchemeとresolvedColorSchemeが更新されること", () => {
    for (const systemColorScheme of ["light", "dark"] as const) {
      mockMatchMedia(systemColorScheme)
      const { result } = renderHook(() => useColorScheme(), {
        wrapper: ColorSchemeProvider,
      })
      expect(result.current.colorScheme).toBe("system")
      expect(result.current.resolvedColorScheme).toBe(systemColorScheme)
      expect(localStorage.getItem(LOCAL_STORAGE_KEY_COLOR_SCHEME)).toBe(
        "system",
      )
      expect(document.documentElement.dataset.colorScheme).toBe(
        systemColorScheme,
      )

      act(() => {
        result.current.setColorScheme("dark")
      })
      expect(result.current.colorScheme).toBe("dark")
      expect(result.current.resolvedColorScheme).toBe("dark")
      expect(localStorage.getItem(LOCAL_STORAGE_KEY_COLOR_SCHEME)).toBe("dark")
      expect(document.documentElement.dataset.colorScheme).toBe("dark")

      act(() => {
        result.current.setColorScheme("light")
      })
      expect(result.current.colorScheme).toBe("light")
      expect(result.current.resolvedColorScheme).toBe("light")
      expect(localStorage.getItem(LOCAL_STORAGE_KEY_COLOR_SCHEME)).toBe("light")
      expect(document.documentElement.dataset.colorScheme).toBe("light")

      act(() => {
        result.current.setColorScheme("system")
      })
      expect(result.current.colorScheme).toBe("system")
      expect(result.current.resolvedColorScheme).toBe(systemColorScheme)
      expect(localStorage.getItem(LOCAL_STORAGE_KEY_COLOR_SCHEME)).toBe(
        "system",
      )
      expect(document.documentElement.dataset.colorScheme).toBe(
        systemColorScheme,
      )

      localStorage.clear()
    }
  })

  test("localStorageにcolor-schemeが保存されている時に、colorSchemeとresolvedColorSchemeがそれに基づいた値になること", () => {
    for (const colorScheme of ["light", "dark", "system"] as const) {
      for (const systemColorScheme of ["light", "dark"] as const) {
        mockMatchMedia(systemColorScheme)
        localStorage.setItem(LOCAL_STORAGE_KEY_COLOR_SCHEME, colorScheme)
        const { result } = renderHook(() => useColorScheme(), {
          wrapper: ColorSchemeProvider,
        })
        expect(result.current.colorScheme).toBe(colorScheme)
        expect(result.current.resolvedColorScheme).toBe(
          resolveColorScheme(colorScheme),
        )
        expect(localStorage.getItem(LOCAL_STORAGE_KEY_COLOR_SCHEME)).toBe(
          colorScheme,
        )
        expect(document.documentElement.dataset.colorScheme).toBe(
          resolveColorScheme(colorScheme),
        )
      }
    }
  })

  test("system-color-schemeが変更された時に、resolvedColorSchemeを更新すること", () => {
    for (const systemColorScheme of ["light", "dark"] as const) {
      mockMatchMedia(systemColorScheme)
      const { result } = renderHook(() => useColorScheme(), {
        wrapper: ColorSchemeProvider,
      })
      expect(result.current.colorScheme).toBe("system")
      expect(result.current.resolvedColorScheme).toBe(systemColorScheme)
      expect(localStorage.getItem(LOCAL_STORAGE_KEY_COLOR_SCHEME)).toBe(
        "system",
      )
      expect(document.documentElement.dataset.colorScheme).toBe(
        systemColorScheme,
      )

      mockMatchMedia("light")
      act(() => {
        window
          .matchMedia("(prefers-color-scheme: light)")
          .dispatchEvent(new Event("change"))
      })
      expect(result.current.colorScheme).toBe("system")
      expect(result.current.resolvedColorScheme).toBe("light")
      expect(localStorage.getItem(LOCAL_STORAGE_KEY_COLOR_SCHEME)).toBe(
        "system",
      )
      expect(document.documentElement.dataset.colorScheme).toBe("light")

      changeSystemColorScheme("dark")
      expect(result.current.colorScheme).toBe("system")
      expect(result.current.resolvedColorScheme).toBe("dark")
      expect(localStorage.getItem(LOCAL_STORAGE_KEY_COLOR_SCHEME)).toBe(
        "system",
      )
      expect(document.documentElement.dataset.colorScheme).toBe("dark")

      // colorSchemeがdarkの時にsystem-color-schemeが変更されてもresolvedColorSchemeは更新されないこと
      act(() => {
        result.current.setColorScheme("dark")
      })
      expect(result.current.colorScheme).toBe("dark")
      expect(result.current.resolvedColorScheme).toBe("dark")
      expect(localStorage.getItem(LOCAL_STORAGE_KEY_COLOR_SCHEME)).toBe("dark")
      expect(document.documentElement.dataset.colorScheme).toBe("dark")
      changeSystemColorScheme("light")
      expect(result.current.colorScheme).toBe("dark")
      expect(result.current.resolvedColorScheme).toBe("dark")
      expect(localStorage.getItem(LOCAL_STORAGE_KEY_COLOR_SCHEME)).toBe("dark")
      expect(document.documentElement.dataset.colorScheme).toBe("dark")

      // colorSchemeがlightの時にsystem-color-schemeが変更されてもresolvedColorSchemeは更新されないこと
      act(() => {
        result.current.setColorScheme("light")
      })
      expect(result.current.colorScheme).toBe("light")
      expect(result.current.resolvedColorScheme).toBe("light")
      expect(localStorage.getItem(LOCAL_STORAGE_KEY_COLOR_SCHEME)).toBe("light")
      expect(document.documentElement.dataset.colorScheme).toBe("light")
      changeSystemColorScheme("dark")
      expect(result.current.colorScheme).toBe("light")
      expect(result.current.resolvedColorScheme).toBe("light")
      expect(localStorage.getItem(LOCAL_STORAGE_KEY_COLOR_SCHEME)).toBe("light")
      expect(document.documentElement.dataset.colorScheme).toBe("light")

      localStorage.clear()
    }
  })

  test("ColorSchemeContextがunmountされた時に、system-color-schemeの監視が解除されること", () => {
    mockMatchMedia("light")
    const { result, unmount } = renderHook(() => useColorScheme(), {
      wrapper: ColorSchemeProvider,
    })
    expect(result.current.colorScheme).toBe("system")
    expect(result.current.resolvedColorScheme).toBe("light")
    expect(localStorage.getItem(LOCAL_STORAGE_KEY_COLOR_SCHEME)).toBe("system")
    expect(document.documentElement.dataset.colorScheme).toBe("light")

    unmount()
    changeSystemColorScheme("dark")
    expect(result.current.colorScheme).toBe("system")
    expect(result.current.resolvedColorScheme).toBe("light")
    expect(localStorage.getItem(LOCAL_STORAGE_KEY_COLOR_SCHEME)).toBe("system")
    expect(document.documentElement.dataset.colorScheme).toBe("light")
  })

  test("system-color-schemeの取得に失敗した際に、initialResolvedColorSchemeが使用されること", () => {
    const arbitaries = [
      fc.constantFrom<ResolvedColorScheme>("light", "dark"),
      fc.string().filter((str) => !["light", "dark"].includes(str)),
    ] as const
    const predicate = (
      initialResolvedColorScheme: ResolvedColorScheme,
      systemColorScheme: string,
    ) => {
      mockMatchMedia(systemColorScheme as ResolvedColorScheme)
      const { result } = renderHook(() => useColorScheme(), {
        wrapper: (props) => (
          <ColorSchemeProvider
            {...props}
            initialColorScheme="system"
            initialResolvedColorScheme={initialResolvedColorScheme}
          />
        ),
      })
      expect(result.current.colorScheme).toBe("system")
      expect(result.current.resolvedColorScheme).toBe(
        initialResolvedColorScheme,
      )
      expect(localStorage.getItem(LOCAL_STORAGE_KEY_COLOR_SCHEME)).toBe(
        "system",
      )
      expect(document.documentElement.dataset.colorScheme).toBe(
        initialResolvedColorScheme,
      )
    }
    fc.assert(
      fc.property(...arbitaries, predicate).afterEach(() => {
        vi.resetAllMocks()
        localStorage.clear()
      }),
    )
  })

  test("system-color-schemeを'light'もしくは'dark'以外の値へ変更した際に何もしないこと", () => {
    const arbitraries = [
      fc.string().filter((str) => !["light", "dark"].includes(str)),
    ] as const
    const predicate = (systemColorScheme: string) => {
      mockMatchMedia("light")
      const { result } = renderHook(() => useColorScheme(), {
        wrapper: ColorSchemeProvider,
      })
      expect(result.current.colorScheme).toBe("system")
      expect(result.current.resolvedColorScheme).toBe("light")
      expect(localStorage.getItem(LOCAL_STORAGE_KEY_COLOR_SCHEME)).toBe(
        "system",
      )
      expect(document.documentElement.dataset.colorScheme).toBe("light")

      changeSystemColorScheme(systemColorScheme as ResolvedColorScheme)
      expect(result.current.colorScheme).toBe("system")
      expect(result.current.resolvedColorScheme).toBe("light")
      expect(localStorage.getItem(LOCAL_STORAGE_KEY_COLOR_SCHEME)).toBe(
        "system",
      )
      expect(document.documentElement.dataset.colorScheme).toBe("light")
    }
    fc.assert(
      fc.property(...arbitraries, predicate).afterEach(() => {
        vi.resetAllMocks()
        localStorage.clear()
      }),
    )
  })
})
