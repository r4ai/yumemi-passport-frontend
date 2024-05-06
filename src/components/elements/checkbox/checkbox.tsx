import { CheckIcon } from "lucide-react"
import { ComponentPropsWithoutRef, FC, ReactNode } from "react"
import { cx, sva } from "styled-system/css"

import { useControlledState } from "~/hooks/use-controlled-state"

export type CheckboxProps = ComponentPropsWithoutRef<"button"> & {
  defaultChecked?: boolean
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  required?: boolean
  disabled?: boolean
  id?: string
  label?: ReactNode
  labelProps?: ComponentPropsWithoutRef<"label">
}

export const Checkbox: FC<CheckboxProps> = ({
  checked: checkedProp,
  defaultChecked = false,
  onCheckedChange = () => {},
  onClick = () => {},
  required,
  disabled,
  id = crypto.randomUUID(),
  className,
  label,
  labelProps: { className: labelClassName, ...labelProps } = {},
  ...props
}) => {
  const [checked, setChecked] = useControlledState(defaultChecked, checkedProp)
  const styles = checkbox({ status: checked ? "checked" : "unchecked" })

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checkedProp ?? checked}
      aria-required={required}
      disabled={disabled}
      onKeyDown={(event) => {
        // Prevent toggling the checkbox when pressing Enter
        // See: https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/examples/checkbox/#kbd_label
        if (event.key === "Enter") {
          event.preventDefault()
        }
      }}
      onClick={(event) => {
        const next = !checked
        setChecked(next)
        onCheckedChange(next)
        onClick(event)
      }}
      className={cx("group", styles.root, className)}
      {...props}
    >
      <span className={styles.control}>
        {(checked ?? checkedProp) && (
          <CheckIcon
            width="100%"
            height="100%"
            strokeWidth={3}
            className={styles.icon}
          />
        )}
      </span>
      {label && (
        <label
          htmlFor={id}
          className={cx(styles.label, labelClassName)}
          {...labelProps}
        >
          {label}
        </label>
      )}
    </button>
  )
}

const checkbox = sva({
  slots: ["root", "control", "icon", "label"],
  base: {
    root: {
      display: "flex",
      flexDirection: "row",
      placeItems: "center",
      gap: "1.5",
      padding: "1",
      _disabled: {
        opacity: "0.5",
      },
    },
    control: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "4",
      height: "4",
      borderColor: "zinc.950",
      borderWidth: "1",
      borderStyle: "solid",
      borderRadius: "sm",
      cursor: "pointer",
      transition: "background",
      _focusVisible: {
        outlineColor: "zinc.500",
        outlineOffset: "1",
        outlineWidth: "1",
      },
      _groupDisabled: {
        cursor: "not-allowed",
      },
      _dark: {
        borderColor: "zinc.50",
      },
    },
    icon: {
      color: "zinc.50",
      width: "100%",
      height: "100%",
      _dark: {
        color: "zinc.950",
      },
    },
    label: {
      cursor: "pointer",
      _groupDisabled: {
        cursor: "not-allowed",
      },
      _groupRequired: {
        _after: {
          content: "'*'",
          marginLeft: "1",
        },
      },
    },
  },
  variants: {
    status: {
      unchecked: {
        control: {
          backgroundColor: "transparent",
          _dark: {
            backgroundColor: "transparent",
          },
        },
      },
      checked: {
        control: {
          backgroundColor: "zinc.950",
          _dark: {
            backgroundColor: "zinc.50",
          },
        },
      },
    },
  },
})
