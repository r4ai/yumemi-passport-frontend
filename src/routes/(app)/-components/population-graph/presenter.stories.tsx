import type { Meta, StoryObj } from "@storybook/react"

import { Presenter } from "./presenter"

const meta = {
  title: "Routes/(App)/PopulationGraph/Presenter",
  tags: ["autodocs"],
  component: Presenter,
  parameters: {},
  args: {
    data: {
      年少人口: [
        {
          year: 1960,
          populationPerPrefecture: { "1": 1681479, "2": 513397 },
        },
        {
          year: 1965,
          populationPerPrefecture: { "1": 1462123, "2": 447068 },
        },
        {
          year: 1970,
          populationPerPrefecture: { "1": 1309487, "2": 396883 },
        },
        {
          year: 1975,
          populationPerPrefecture: { "1": 1312611, "2": 380218 },
        },
        {
          year: 1980,
          populationPerPrefecture: { "1": 1298324, "2": 366454 },
        },
        {
          year: 1985,
          populationPerPrefecture: { "1": 1217959, "2": 338554 },
        },
        {
          year: 1990,
          populationPerPrefecture: { "1": 1034251, "2": 289082 },
        },
        { year: 1995, populationPerPrefecture: { "1": 898673, "2": 252414 } },
        { year: 2000, populationPerPrefecture: { "1": 792352, "2": 223141 } },
        { year: 2005, populationPerPrefecture: { "1": 719057, "2": 198959 } },
        { year: 2010, populationPerPrefecture: { "1": 657312, "2": 171842 } },
        { year: 2015, populationPerPrefecture: { "1": 608296, "2": 148208 } },
        { year: 2020, populationPerPrefecture: { "1": 555804, "2": 129112 } },
        { year: 2025, populationPerPrefecture: { "1": 511677, "2": 114024 } },
        { year: 2030, populationPerPrefecture: { "1": 465307, "2": 100253 } },
        { year: 2035, populationPerPrefecture: { "1": 423382, "2": 87648 } },
        { year: 2040, populationPerPrefecture: { "1": 391086, "2": 77258 } },
        { year: 2045, populationPerPrefecture: { "1": 360177, "2": 67472 } },
      ],
      生産年齢人口: [
        {
          year: 1960,
          populationPerPrefecture: { "1": 3145664, "2": 848838 },
        },
        {
          year: 1965,
          populationPerPrefecture: { "1": 3460359, "2": 894521 },
        },
        {
          year: 1970,
          populationPerPrefecture: { "1": 3575731, "2": 940235 },
        },
        {
          year: 1975,
          populationPerPrefecture: { "1": 3657884, "2": 977541 },
        },
        {
          year: 1980,
          populationPerPrefecture: { "1": 3823808, "2": 1022786 },
        },
        {
          year: 1985,
          populationPerPrefecture: { "1": 3910729, "2": 1027329 },
        },
        {
          year: 1990,
          populationPerPrefecture: { "1": 3924717, "2": 1000804 },
        },
        {
          year: 1995,
          populationPerPrefecture: { "1": 3942868, "2": 991311 },
        },
        {
          year: 2000,
          populationPerPrefecture: { "1": 3832902, "2": 964661 },
        },
        {
          year: 2005,
          populationPerPrefecture: { "1": 3696064, "2": 910856 },
        },
        {
          year: 2010,
          populationPerPrefecture: { "1": 3482169, "2": 843587 },
        },
        {
          year: 2015,
          populationPerPrefecture: { "1": 3190804, "2": 757867 },
        },
        {
          year: 2020,
          populationPerPrefecture: { "1": 2945727, "2": 676167 },
        },
        {
          year: 2025,
          populationPerPrefecture: { "1": 2781175, "2": 618505 },
        },
        {
          year: 2030,
          populationPerPrefecture: { "1": 2594718, "2": 555479 },
        },
        {
          year: 2035,
          populationPerPrefecture: { "1": 2394230, "2": 494561 },
        },
        {
          year: 2040,
          populationPerPrefecture: { "1": 2140781, "2": 428573 },
        },
        {
          year: 2045,
          populationPerPrefecture: { "1": 1931265, "2": 370849 },
        },
      ],
      老年人口: [
        { year: 1960, populationPerPrefecture: { "1": 212063, "2": 64371 } },
        { year: 1965, populationPerPrefecture: { "1": 249318, "2": 75002 } },
        { year: 1970, populationPerPrefecture: { "1": 299069, "2": 90402 } },
        { year: 1975, populationPerPrefecture: { "1": 366651, "2": 110752 } },
        { year: 1980, populationPerPrefecture: { "1": 451727, "2": 134516 } },
        { year: 1985, populationPerPrefecture: { "1": 549487, "2": 158547 } },
        { year: 1990, populationPerPrefecture: { "1": 674881, "2": 191776 } },
        { year: 1995, populationPerPrefecture: { "1": 844927, "2": 236745 } },
        {
          year: 2000,
          populationPerPrefecture: { "1": 1031552, "2": 287099 },
        },
        {
          year: 2005,
          populationPerPrefecture: { "1": 1205692, "2": 326562 },
        },
        {
          year: 2010,
          populationPerPrefecture: { "1": 1358068, "2": 352768 },
        },
        {
          year: 2015,
          populationPerPrefecture: { "1": 1558387, "2": 390940 },
        },
        {
          year: 2020,
          populationPerPrefecture: { "1": 1664023, "2": 412943 },
        },
        {
          year: 2025,
          populationPerPrefecture: { "1": 1723702, "2": 424803 },
        },
        {
          year: 2030,
          populationPerPrefecture: { "1": 1731567, "2": 420661 },
        },
        {
          year: 2035,
          populationPerPrefecture: { "1": 1728745, "2": 411528 },
        },
        {
          year: 2040,
          populationPerPrefecture: { "1": 1748560, "2": 403143 },
        },
        {
          year: 2045,
          populationPerPrefecture: { "1": 1713531, "2": 385289 },
        },
      ],
      総人口: [
        {
          year: 1960,
          populationPerPrefecture: { "1": 5039206, "2": 1426606 },
        },
        {
          year: 1965,
          populationPerPrefecture: { "1": 5171800, "2": 1416591 },
        },
        {
          year: 1970,
          populationPerPrefecture: { "1": 5184287, "2": 1427520 },
        },
        {
          year: 1975,
          populationPerPrefecture: { "1": 5338206, "2": 1468646 },
        },
        {
          year: 1980,
          populationPerPrefecture: { "1": 5575989, "2": 1523907 },
        },
        {
          year: 1985,
          populationPerPrefecture: { "1": 5679439, "2": 1524448 },
        },
        {
          year: 1990,
          populationPerPrefecture: { "1": 5643647, "2": 1482873 },
        },
        {
          year: 1995,
          populationPerPrefecture: { "1": 5692321, "2": 1481663 },
        },
        {
          year: 2000,
          populationPerPrefecture: { "1": 5683062, "2": 1475728 },
        },
        {
          year: 2005,
          populationPerPrefecture: { "1": 5627737, "2": 1436657 },
        },
        {
          year: 2010,
          populationPerPrefecture: { "1": 5506419, "2": 1373339 },
        },
        {
          year: 2015,
          populationPerPrefecture: { "1": 5381733, "2": 1308265 },
        },
        {
          year: 2020,
          populationPerPrefecture: { "1": 5224614, "2": 1237984 },
        },
        {
          year: 2025,
          populationPerPrefecture: { "1": 5016554, "2": 1157332 },
        },
        {
          year: 2030,
          populationPerPrefecture: { "1": 4791592, "2": 1076393 },
        },
        {
          year: 2035,
          populationPerPrefecture: { "1": 4546357, "2": 993737 },
        },
        {
          year: 2040,
          populationPerPrefecture: { "1": 4280427, "2": 908974 },
        },
        {
          year: 2045,
          populationPerPrefecture: { "1": 4004973, "2": 823610 },
        },
      ],
    },
    prefectures: [
      { prefCode: 1, prefName: "北海道" },
      { prefCode: 2, prefName: "青森県" },
    ],
  },
} satisfies Meta<typeof Presenter>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const SmartPhone: Story = {
  args: {},
}
