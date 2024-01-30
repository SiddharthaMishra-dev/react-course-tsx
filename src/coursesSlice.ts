import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import DATA from "./data";
type courseType = typeof DATA | null;

interface Courses {
  value: courseType;
}

const initialState: Courses = {
  value: null,
};

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<courseType>) => {
      state.value = action.payload;
    },
  },
});

export const { add } = coursesSlice.actions;
export default coursesSlice.reducer;
