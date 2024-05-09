import { describe, expect, test } from "vitest"

import { PresenterProps } from "../../-components/population-graph/presenter"
import { transformPopulationDataForGraph } from "./transform"

describe(transformPopulationDataForGraph.name, () => {
  test("正常にデータが変換されること", () => {
    const actual = transformPopulationDataForGraph([
      {
        prefCode: 1,
        prefName: "北海道",
        populationCompositionPerYear: [
          {
            label: "総人口",
            data: [
              {
                year: 1960,
                value: 5039206,
              },
              {
                year: 1965,
                value: 5171800,
              },
              {
                year: 1970,
                value: 5184287,
              },
              {
                year: 1975,
                value: 5338206,
              },
              {
                year: 1980,
                value: 5575989,
              },
              {
                year: 1985,
                value: 5679439,
              },
              {
                year: 1990,
                value: 5643647,
              },
              {
                year: 1995,
                value: 5692321,
              },
              {
                year: 2000,
                value: 5683062,
              },
              {
                year: 2005,
                value: 5627737,
              },
              {
                year: 2010,
                value: 5506419,
              },
              {
                year: 2015,
                value: 5381733,
              },
              {
                year: 2020,
                value: 5224614,
              },
              {
                year: 2025,
                value: 5016554,
              },
              {
                year: 2030,
                value: 4791592,
              },
              {
                year: 2035,
                value: 4546357,
              },
              {
                year: 2040,
                value: 4280427,
              },
              {
                year: 2045,
                value: 4004973,
              },
            ],
          },
          {
            label: "年少人口",
            data: [
              {
                year: 1960,
                value: 1681479,
                rate: 33.37,
              },
              {
                year: 1965,
                value: 1462123,
                rate: 28.27,
              },
              {
                year: 1970,
                value: 1309487,
                rate: 25.26,
              },
              {
                year: 1975,
                value: 1312611,
                rate: 24.59,
              },
              {
                year: 1980,
                value: 1298324,
                rate: 23.28,
              },
              {
                year: 1985,
                value: 1217959,
                rate: 21.45,
              },
              {
                year: 1990,
                value: 1034251,
                rate: 18.33,
              },
              {
                year: 1995,
                value: 898673,
                rate: 15.79,
              },
              {
                year: 2000,
                value: 792352,
                rate: 13.94,
              },
              {
                year: 2005,
                value: 719057,
                rate: 12.78,
              },
              {
                year: 2010,
                value: 657312,
                rate: 11.94,
              },
              {
                year: 2015,
                value: 608296,
                rate: 11.3,
              },
              {
                year: 2020,
                value: 555804,
                rate: 10.64,
              },
              {
                year: 2025,
                value: 511677,
                rate: 10.2,
              },
              {
                year: 2030,
                value: 465307,
                rate: 9.71,
              },
              {
                year: 2035,
                value: 423382,
                rate: 9.31,
              },
              {
                year: 2040,
                value: 391086,
                rate: 9.14,
              },
              {
                year: 2045,
                value: 360177,
                rate: 8.99,
              },
            ],
          },
          {
            label: "生産年齢人口",
            data: [
              {
                year: 1960,
                value: 3145664,
                rate: 62.42,
              },
              {
                year: 1965,
                value: 3460359,
                rate: 66.91,
              },
              {
                year: 1970,
                value: 3575731,
                rate: 68.97,
              },
              {
                year: 1975,
                value: 3657884,
                rate: 68.52,
              },
              {
                year: 1980,
                value: 3823808,
                rate: 68.58,
              },
              {
                year: 1985,
                value: 3910729,
                rate: 68.86,
              },
              {
                year: 1990,
                value: 3924717,
                rate: 69.54,
              },
              {
                year: 1995,
                value: 3942868,
                rate: 69.27,
              },
              {
                year: 2000,
                value: 3832902,
                rate: 67.44,
              },
              {
                year: 2005,
                value: 3696064,
                rate: 65.68,
              },
              {
                year: 2010,
                value: 3482169,
                rate: 63.24,
              },
              {
                year: 2015,
                value: 3190804,
                rate: 59.29,
              },
              {
                year: 2020,
                value: 2945727,
                rate: 56.38,
              },
              {
                year: 2025,
                value: 2781175,
                rate: 55.44,
              },
              {
                year: 2030,
                value: 2594718,
                rate: 54.15,
              },
              {
                year: 2035,
                value: 2394230,
                rate: 52.66,
              },
              {
                year: 2040,
                value: 2140781,
                rate: 50.01,
              },
              {
                year: 2045,
                value: 1931265,
                rate: 48.22,
              },
            ],
          },
          {
            label: "老年人口",
            data: [
              {
                year: 1960,
                value: 212063,
                rate: 4.21,
              },
              {
                year: 1965,
                value: 249318,
                rate: 4.82,
              },
              {
                year: 1970,
                value: 299069,
                rate: 5.77,
              },
              {
                year: 1975,
                value: 366651,
                rate: 6.87,
              },
              {
                year: 1980,
                value: 451727,
                rate: 8.1,
              },
              {
                year: 1985,
                value: 549487,
                rate: 9.68,
              },
              {
                year: 1990,
                value: 674881,
                rate: 11.96,
              },
              {
                year: 1995,
                value: 844927,
                rate: 14.84,
              },
              {
                year: 2000,
                value: 1031552,
                rate: 18.15,
              },
              {
                year: 2005,
                value: 1205692,
                rate: 21.42,
              },
              {
                year: 2010,
                value: 1358068,
                rate: 24.66,
              },
              {
                year: 2015,
                value: 1558387,
                rate: 28.96,
              },
              {
                year: 2020,
                value: 1664023,
                rate: 31.85,
              },
              {
                year: 2025,
                value: 1723702,
                rate: 34.36,
              },
              {
                year: 2030,
                value: 1731567,
                rate: 36.14,
              },
              {
                year: 2035,
                value: 1728745,
                rate: 38.02,
              },
              {
                year: 2040,
                value: 1748560,
                rate: 40.85,
              },
              {
                year: 2045,
                value: 1713531,
                rate: 42.79,
              },
            ],
          },
        ],
      },
      {
        prefCode: 2,
        prefName: "青森県",
        populationCompositionPerYear: [
          {
            label: "総人口",
            data: [
              {
                year: 1960,
                value: 1426606,
              },
              {
                year: 1965,
                value: 1416591,
              },
              {
                year: 1970,
                value: 1427520,
              },
              {
                year: 1975,
                value: 1468646,
              },
              {
                year: 1980,
                value: 1523907,
              },
              {
                year: 1985,
                value: 1524448,
              },
              {
                year: 1990,
                value: 1482873,
              },
              {
                year: 1995,
                value: 1481663,
              },
              {
                year: 2000,
                value: 1475728,
              },
              {
                year: 2005,
                value: 1436657,
              },
              {
                year: 2010,
                value: 1373339,
              },
              {
                year: 2015,
                value: 1308265,
              },
              {
                year: 2020,
                value: 1237984,
              },
              {
                year: 2025,
                value: 1157332,
              },
              {
                year: 2030,
                value: 1076393,
              },
              {
                year: 2035,
                value: 993737,
              },
              {
                year: 2040,
                value: 908974,
              },
              {
                year: 2045,
                value: 823610,
              },
            ],
          },
          {
            label: "年少人口",
            data: [
              {
                year: 1960,
                value: 513397,
                rate: 35.99,
              },
              {
                year: 1965,
                value: 447068,
                rate: 31.56,
              },
              {
                year: 1970,
                value: 396883,
                rate: 27.8,
              },
              {
                year: 1975,
                value: 380218,
                rate: 25.89,
              },
              {
                year: 1980,
                value: 366454,
                rate: 24.05,
              },
              {
                year: 1985,
                value: 338554,
                rate: 22.21,
              },
              {
                year: 1990,
                value: 289082,
                rate: 19.49,
              },
              {
                year: 1995,
                value: 252414,
                rate: 17.04,
              },
              {
                year: 2000,
                value: 223141,
                rate: 15.12,
              },
              {
                year: 2005,
                value: 198959,
                rate: 13.85,
              },
              {
                year: 2010,
                value: 171842,
                rate: 12.51,
              },
              {
                year: 2015,
                value: 148208,
                rate: 11.33,
              },
              {
                year: 2020,
                value: 129112,
                rate: 10.43,
              },
              {
                year: 2025,
                value: 114024,
                rate: 9.85,
              },
              {
                year: 2030,
                value: 100253,
                rate: 9.31,
              },
              {
                year: 2035,
                value: 87648,
                rate: 8.82,
              },
              {
                year: 2040,
                value: 77258,
                rate: 8.5,
              },
              {
                year: 2045,
                value: 67472,
                rate: 8.19,
              },
            ],
          },
          {
            label: "生産年齢人口",
            data: [
              {
                year: 1960,
                value: 848838,
                rate: 59.5,
              },
              {
                year: 1965,
                value: 894521,
                rate: 63.15,
              },
              {
                year: 1970,
                value: 940235,
                rate: 65.86,
              },
              {
                year: 1975,
                value: 977541,
                rate: 66.56,
              },
              {
                year: 1980,
                value: 1022786,
                rate: 67.12,
              },
              {
                year: 1985,
                value: 1027329,
                rate: 67.39,
              },
              {
                year: 1990,
                value: 1000804,
                rate: 67.49,
              },
              {
                year: 1995,
                value: 991311,
                rate: 66.91,
              },
              {
                year: 2000,
                value: 964661,
                rate: 65.37,
              },
              {
                year: 2005,
                value: 910856,
                rate: 63.4,
              },
              {
                year: 2010,
                value: 843587,
                rate: 61.43,
              },
              {
                year: 2015,
                value: 757867,
                rate: 57.93,
              },
              {
                year: 2020,
                value: 676167,
                rate: 54.62,
              },
              {
                year: 2025,
                value: 618505,
                rate: 53.44,
              },
              {
                year: 2030,
                value: 555479,
                rate: 51.61,
              },
              {
                year: 2035,
                value: 494561,
                rate: 49.77,
              },
              {
                year: 2040,
                value: 428573,
                rate: 47.15,
              },
              {
                year: 2045,
                value: 370849,
                rate: 45.03,
              },
            ],
          },
          {
            label: "老年人口",
            data: [
              {
                year: 1960,
                value: 64371,
                rate: 4.51,
              },
              {
                year: 1965,
                value: 75002,
                rate: 5.29,
              },
              {
                year: 1970,
                value: 90402,
                rate: 6.33,
              },
              {
                year: 1975,
                value: 110752,
                rate: 7.54,
              },
              {
                year: 1980,
                value: 134516,
                rate: 8.83,
              },
              {
                year: 1985,
                value: 158547,
                rate: 10.4,
              },
              {
                year: 1990,
                value: 191776,
                rate: 12.93,
              },
              {
                year: 1995,
                value: 236745,
                rate: 15.98,
              },
              {
                year: 2000,
                value: 287099,
                rate: 19.45,
              },
              {
                year: 2005,
                value: 326562,
                rate: 22.73,
              },
              {
                year: 2010,
                value: 352768,
                rate: 25.69,
              },
              {
                year: 2015,
                value: 390940,
                rate: 29.88,
              },
              {
                year: 2020,
                value: 412943,
                rate: 33.36,
              },
              {
                year: 2025,
                value: 424803,
                rate: 36.71,
              },
              {
                year: 2030,
                value: 420661,
                rate: 39.08,
              },
              {
                year: 2035,
                value: 411528,
                rate: 41.41,
              },
              {
                year: 2040,
                value: 403143,
                rate: 44.35,
              },
              {
                year: 2045,
                value: 385289,
                rate: 46.78,
              },
            ],
          },
        ],
      },
    ])
    const expected: PresenterProps = {
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
    }
    expect(actual).toEqual(expected)
  })
})
