import { FC } from "react"
import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  ResponsiveContainerProps,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { css, cx } from "styled-system/css"
import { token } from "styled-system/tokens"

import {
  PopulationCompositionPerYear,
  Prefecture,
  Prefectures,
} from "~/api/resas"
import { Tabs } from "~/components/elements/tabs/tabs"

export type PresenterProps = Partial<ResponsiveContainerProps> & {
  data: Record<
    PopulationCompositionPerYear["data"][number]["label"],
    GraphProps["data"]
  >
  prefectures: GraphProps["prefectures"]
  className?: string
}

export const Presenter: FC<PresenterProps> = ({
  data,
  prefectures,
  ...props
}) => {
  return (
    <Tabs
      tabs={Object.entries(data).map(([label, data]) => ({
        id: label,
        tab: label,
        tabPanel: <Graph data={data} prefectures={prefectures} {...props} />,
        tabPanelClassName: css({ overflowX: "auto" }),
      }))}
      defaultActiveTabId="総人口"
      align="center"
    />
  )
}

type GraphProps = Partial<ResponsiveContainerProps> & {
  data: {
    year: number
    populationPerPrefecture: Record<Prefecture["prefCode"], number>
  }[]
  prefectures: Prefectures
  className?: string
}

const Graph: FC<GraphProps> = ({ data, prefectures, className, ...props }) => {
  return (
    <ResponsiveContainer
      height={360}
      width="100%"
      minWidth={500}
      className={cx(
        css({
          maxWidth: "breakpoint-md",
          marginX: "auto",
        }),
        className,
      )}
      {...props}
    >
      <LineChart
        data={data}
        margin={{ top: 20, right: 40, left: 50, bottom: 30 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke={token("colors.border")} />
        <XAxis dataKey="year" tick={{ fill: token("colors.foreground.muted") }}>
          <Label
            value="年度 (年)"
            position="bottom"
            color={token("colors.foreground.muted")}
            style={{ fill: token("colors.foreground.muted") }}
          />
        </XAxis>
        <YAxis
          tickFormatter={(value) =>
            new Intl.NumberFormat().format(Number(value))
          }
          tick={{ fill: token("colors.foreground.muted") }}
        >
          <Label
            value="人口 (人)"
            position="left"
            angle={-90}
            dx={-30}
            style={{ fill: token("colors.foreground.muted") }}
          />
        </YAxis>
        <Tooltip
          labelFormatter={(year) => `${year}年`}
          formatter={(value, name) => [
            new Intl.NumberFormat().format(Number(value)),
            name,
          ]}
          contentStyle={{
            backgroundColor: token("colors.background"),
            borderColor: token("colors.border"),
          }}
          cursor={{
            stroke: token("colors.outline"),
          }}
        />
        <Legend verticalAlign="top" />
        {prefectures.map(({ prefCode }, i) => (
          <Line
            key={prefCode}
            dataKey={`populationPerPrefecture.${prefCode}`}
            name={
              prefectures.find((prefecture) => prefecture.prefCode === prefCode)
                ?.prefName
            }
            unit=" 人"
            stroke={getStrokeColor(i)}
            dot={{
              fill: token("colors.background"),
            }}
            activeDot={{
              stroke: token("colors.background"),
            }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  )
}

const getStrokeColor = (index: number) => {
  const colors = [
    token("colors.red.400"),
    token("colors.sky.500"),
    token("colors.lime.600"),
    token("colors.amber.600"),
    token("colors.purple.400"),
    token("colors.blue.400"),
    token("colors.emerald.600"),
    token("colors.fuchsia.400"),
    token("colors.green.500"),
    token("colors.orange.500"),
    token("colors.cyan.500"),
    token("colors.pink.400"),
    token("colors.violet.400"),
    token("colors.indigo.400"),
    token("colors.teal.600"),
    token("colors.yellow.600"),
    token("colors.rose.400"),
    token("colors.zinc.500"),
  ]
  return colors[index % colors.length]
}
