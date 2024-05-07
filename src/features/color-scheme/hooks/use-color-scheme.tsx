import { useContext } from "react"

import { ColorSchemeContext } from "../contexts/color-scheme-context"

export const useColorScheme = () => {
  const colorSchemeContext = useContext(ColorSchemeContext)
  if (colorSchemeContext == null) {
    throw new Error("useColorScheme must be used within a ColorSchemeProvider")
  }
  return colorSchemeContext
}
