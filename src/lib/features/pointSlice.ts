import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
export interface Event {
  year: number;
  event: string;
}

export interface PointDataType {
  name: string;
  dates: Event[];
}

interface PointType {
  currentPoint: number;
}

const initialState: PointType = {
  currentPoint: 0,
};

export const pointSlice = createSlice({
  name: "searchParams",
  initialState,
  reducers: {
    setPoint: (state, action: PayloadAction<PointType["currentPoint"]>) => {
      state.currentPoint = action.payload;
    },
  },
});

export const { setPoint } = pointSlice.actions;

export const selectPoint = (state: RootState) => state.pointSlice.currentPoint;

const PointReducer = pointSlice.reducer;
export default PointReducer;
