import { FC } from "react"
import { cx, sva } from "styled-system/css"

import { Prefecture, Prefectures } from "~/api/resas"
import { Checkbox } from "~/components/elements"

export type PresenterProps = {
  className?: string
  prefectures: Prefectures
  selectedPrefectures: Prefectures
  onSelectPrefecture: (prefecture: Prefecture) => void
  onDeselectPrefecture: (prefecture: Prefecture) => void
}

export const Presenter: FC<PresenterProps> = ({
  className,
  prefectures,
  selectedPrefectures,
  onSelectPrefecture,
  onDeselectPrefecture,
}) => {
  const styles = prefecturesCheckboxGroup()
  return (
    <div className={cx(styles.root, className)}>
      <h2 className={styles.title}>都道府県</h2>
      <div className={styles.checkboxes}>
        {prefectures.map((prefecture) => (
          <Checkbox
            key={prefecture.prefCode}
            label={prefecture.prefName}
            checked={
              selectedPrefectures.find(
                (p) => p.prefCode === prefecture.prefCode,
              ) != null
            }
            onCheckedChange={(checked) =>
              checked
                ? onSelectPrefecture(prefecture)
                : onDeselectPrefecture(prefecture)
            }
          />
        ))}
      </div>
    </div>
  )
}

const prefecturesCheckboxGroup = sva({
  slots: ["root", "title", "checkboxes"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "3",
    },
    title: {
      fontSize: "xl",
      fontWeight: "bold",
      textAlign: "center",
    },
    checkboxes: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
      gap: "2",
      width: "100%",
      maxWidth: "breakpoint-md",
      margin: "auto",
    },
  },
})
