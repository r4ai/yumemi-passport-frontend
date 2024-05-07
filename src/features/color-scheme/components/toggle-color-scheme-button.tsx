import { MoonIcon, SunIcon } from "lucide-react"
import { FC } from "react"

import { Button, ButtonProps } from "~/components/elements"

import { useColorScheme } from "../hooks/use-color-scheme"
import { ResolvedColorScheme } from "../utils/color-scheme"

export type ToggleColorSchemeButtonProps = ButtonProps<"button">

export const ToggleColorSchemeButton: FC<ToggleColorSchemeButtonProps> = ({
  onClick,
  ...props
}) => {
  const { resolvedColorScheme, setResolvedColorScheme } = useColorScheme()

  const toggle = (resolvedColorScheme: ResolvedColorScheme) =>
    resolvedColorScheme === "light" ? "dark" : "light"

  const toggleResolvedColorScheme = () => setResolvedColorScheme(toggle)

  return (
    <Button
      size="icon"
      variant="outline"
      onClick={(event) => {
        toggleResolvedColorScheme()
        onClick?.(event)
      }}
      aria-label={`Change color scheme to ${toggle(resolvedColorScheme)}`}
      {...props}
    >
      {resolvedColorScheme === "dark" ? <MoonIcon /> : <SunIcon />}
    </Button>
  )
}
