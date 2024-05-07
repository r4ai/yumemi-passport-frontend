import { ComponentPropsWithoutRef, ElementType } from "react"
import { cva, cx, RecipeVariantProps } from "styled-system/css"

export type ButtonProps<Element extends ElementType> =
  ComponentPropsWithoutRef<Element> &
    RecipeVariantProps<typeof button> & {
      as?: Element
      disabled?: boolean
      className?: string
    }

export const Button = <Element extends ElementType = "button">({
  className,
  variant,
  size,
  as: As,
  ...props
}: ButtonProps<Element>) => {
  const Element = As ?? "button"
  return (
    <Element className={cx(button({ variant, size }), className)} {...props} />
  )
}

const button = cva({
  base: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    whiteSpace: "nowrap",
    rounded: "lg",
    paddingY: "2",
    paddingX: "4",
    transition: "colors",
    cursor: "pointer",
    outlineOffset: "0.2rem",
    outlineColor: "outline",
    _disabled: {
      pointerEvents: "none",
      opacity: 0.5,
    },
  },
  variants: {
    variant: {
      solid: {
        color: "foreground.accent",
        backgroundColor: "background.accent",
        _hover: {
          backgroundColor: "background.accent/90",
        },
      },
      outline: {
        color: "foreground",
        backgroundColor: "transparent",
        borderColor: "border",
        borderWidth: 1,
        borderStyle: "solid",
        outlineOffset: "0.3rem",
        _hover: {
          backgroundColor: "background.muted",
        },
      },
      ghost: {
        color: "foreground",
        backgroundColor: "transparent",
        _hover: {
          backgroundColor: "background.muted",
        },
      },
      link: {
        color: "foreground",
        backgroundColor: "transparent",
        _hover: {
          textDecoration: "underline",
        },
        _focus: {
          textDecoration: "underline",
        },
      },
    },
    size: {
      sm: {
        fontSize: "xs",
        paddingX: "2.5",
        paddingY: "1",
      },
      md: {
        fontSize: "sm",
      },
      lg: {
        fontSize: "md",
      },
      xl: {
        fontSize: "lg",
      },
      icon: {
        fontSize: "sm",
        paddingX: "2",
        paddingY: "2",
      },
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
})
