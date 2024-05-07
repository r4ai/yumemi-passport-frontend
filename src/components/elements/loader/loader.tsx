import { FC } from "react"
import { cx, RecipeVariantProps, sva } from "styled-system/css"

export type LoaderProps = RecipeVariantProps<typeof loader> & {
  className?: string
}

export const Loader: FC<LoaderProps> = ({ className, ...props }) => {
  const styles = loader(props)
  return (
    <div className={cx(styles.root, className)}>
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className={styles.dot}
          style={{ animationDelay: `${i * 120}ms` }}
        />
      ))}
    </div>
  )
}

const loader = sva({
  slots: ["root", "dot"],
  variants: {
    size: {
      md: {
        root: {
          gap: "3",
        },
        dot: {
          gap: "2",
          width: "2",
          height: "2",
        },
      },
      lg: {
        root: {
          gap: "3",
        },
        dot: {
          width: "3",
          height: "3",
        },
      },
    },
  },
  base: {
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    },
    dot: {
      borderRadius: "full",
      backgroundColor: "foreground",
      animation: "ping",
    },
  },
  defaultVariants: {
    size: "md",
  },
})
