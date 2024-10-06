import { PointDataType } from "../types/types";

export const getPointNames = (data: PointDataType[]) => {
  return data.map((el) => el.name);
};

export const formatData = (data: PointDataType[]) => {
  return data.map((el) => ({
    ...el,
    dates: el.dates.sort((a, b) => a.year - b.year),
  }));
};
