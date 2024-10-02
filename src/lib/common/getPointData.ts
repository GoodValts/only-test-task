import data from "../data.json";

export const getPointData = (index: number) => {
  const dates = data[index].dates.sort((a, b) => a.year - b.year);
  return { ...data[index], dates: dates };
};

export const getPointNames = () => {
  return data.map((el) => el.name);
};
