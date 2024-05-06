import { unique } from "./helpers"

export const merge = (...classNames: unknown[]) =>
  unique(classNames.filter(Boolean)).join(" ")
