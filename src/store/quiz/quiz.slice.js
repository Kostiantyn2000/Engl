import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  elements: [],
  resultQuiz: 0,
  isLoading: false,
  hasError: false,
};

const slice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    onAddElements: (state, action) => {
      state.elements = action.payload;
    },
    onClearQuiz: (state, action) => {
      state.elements = action.payload;
    },
    onResultQuiz: (state, action) => {
      state.resultQuiz = action.payload;
    },
  },
});

export default slice.reducer;
export const quizAction = {
  ...slice.actions,
};
