export type MockedDataType = {
  name: string;
  dates: { year: number; event: string }[];
}[];

export const mockedData = [
  {
    name: "Наука",
    dates: [
      { year: 1900, event: "Учёные нового столетия открыли шампанское" },
      { year: 2000, event: "Учёные нового тысячелетия открыли шампанское" },
    ],
  },
  {
    name: "История",
    dates: [
      { year: 0, event: "Рождество Христово" },
      { year: 998, event: "Крещение Руси" },
      { year: 1917, event: "Крушение Руси" },
      { year: 2007, event: "Вася тут был" },
    ],
  },
  {
    name: "Литература",
    dates: [
      { year: 1895, event: "Умер Дантес" },
      { year: 1799, event: "Родился Пушкин" },
      { year: 1837, event: "Пушкин умер" },
    ],
  },
  {
    name: "Ещё что-то",
    dates: [
      { year: 1895, event: "Умер Дантес" },
      { year: 1799, event: "Родился Пушкин" },
      { year: 1837, event: "Пушкин умер" },
    ],
  },
  {
    name: "s",
    dates: [
      { year: 1895, event: "Умер Дантес" },
      { year: 1799, event: "Родился Пушкин" },
      { year: 1837, event: "Пушкин умер" },
    ],
  },
];
