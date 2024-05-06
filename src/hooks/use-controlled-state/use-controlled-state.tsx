import { Dispatch, SetStateAction, useState } from "react"

export const useControlledState = <S,>(
  defaultValue: S,
  value?: S,
  setValue?: Dispatch<SetStateAction<S>>,
) => {
  const [state, setState] = useState(defaultValue)
  const isControlled = value != null
  if (isControlled) {
    return [value, setValue ?? (() => {})] as const
  }
  return [state, setState] as const
}
