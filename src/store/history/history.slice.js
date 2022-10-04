import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  elements: [],
};

const slice = createSlice({
  name: "words",
  initialState,
  reducers: {
    onHistoryElements: (state, action) => {
      console.log("history", action.payload);
      state.elements = [...state.elements, action.payload];
    },
  },
});

export default slice.reducer;
export const historyAction = {
  ...slice.actions,
};
