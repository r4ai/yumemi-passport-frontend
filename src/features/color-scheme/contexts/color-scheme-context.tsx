import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useState,
} from "react"

import {
  ColorScheme,
  loadColorScheme,
  resolveColorScheme,
  ResolvedColorScheme,
  saveColorScheme,
  subscribeSystemColorSchemeChange,
} from "../utils/color-scheme"

export type ColorSchemeContext = {
  colorScheme: ColorScheme
  resolvedColorScheme: ResolvedColorScheme
  setColorScheme: Dispatch<SetStateAction<ColorScheme>>
  setResolvedColorScheme: Dispatch<SetStateAction<ResolvedColorScheme>>
}

export const ColorSchemeContext = createContext<ColorSchemeContext | undefined>(
  undefined,
)

export type ColorSchemeProviderProps = {
  /**
   * 初めてアクセスしたユーザーに対して適用されるcolor-schemeの値
   */
  initialColorScheme?: ColorScheme
  /**
   * system-color-schemeの取得に失敗した場合に適用されるcolor-schemeの値
   */
  initialResolvedColorScheme?: ResolvedColorScheme
  children: ReactNode
}

export const ColorSchemeProvider: FC<ColorSchemeProviderProps> = ({
  initialColorScheme = "system",
  initialResolvedColorScheme = "light",
  children,
}) => {
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(initialColorScheme)
  const [resolvedColorScheme, setResolvedColorScheme] =
    useState<ResolvedColorScheme>(initialResolvedColorScheme)

  useLayoutEffect(() => {
    // localStorageにcolor-schemeが保存されている場合はその値を読み込む
    const storedColorScheme = loadColorScheme()
    if (storedColorScheme != null) {
      setColorScheme(storedColorScheme)
    }

    // 初期値のcolor-schemeを解決してresolvedColorSchemeに保存する
    setResolvedColorScheme(
      resolveColorScheme(storedColorScheme ?? colorScheme) ??
        initialResolvedColorScheme,
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // system-color-schemeが変更されたときにresolvedColorSchemeを更新する
  useEffect(() => {
    const unsubscribe = subscribeSystemColorSchemeChange(
      (systemColorScheme) => {
        const colorScheme = loadColorScheme()
        if (colorScheme !== "system") return
        setResolvedColorScheme(systemColorScheme)
      },
    )
    return () => unsubscribe?.()
  }, [])

  // color-schemeが変更されたときにlocalStorageに保存し、resolvedColorSchemeを更新する
  useEffect(() => {
    saveColorScheme(colorScheme)
    setResolvedColorScheme((prev) => resolveColorScheme(colorScheme) ?? prev)
  }, [colorScheme])

  // resolvedColorSchemeが変更されたときに、root要素に対してdata-color-scheme属性を設定する
  useEffect(() => {
    document.documentElement.dataset.colorScheme = resolvedColorScheme
  }, [resolvedColorScheme])

  return (
    <ColorSchemeContext.Provider
      value={{
        colorScheme,
        resolvedColorScheme,
        setColorScheme,
        setResolvedColorScheme,
      }}
    >
      {children}
    </ColorSchemeContext.Provider>
  )
}
