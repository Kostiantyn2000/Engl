import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  elements: [],
  questions: [],
  answers: [],
  isLoading: true,
  hasError: false,
  entities: [],
};

const slice = createSlice({
  name: "vocabulary",
  initialState,
  reducers: {
    onFetchElements: (state, action) => {
      state.elements = action.payload;
    },
    onAddElements: (state, action) => {
      state.elements = [...state.elements, action.payload];
    },
    onToggleElements: (state, action) => {
      state.elements = action.payload;
    },
    onAddQuestions: (state, action) => {
      state.questions = [
        ...state.questions,
        {
          id: action.payload.id,
          question: action.payload.native,
          correctAnswer: {
            id: action.payload.id,
            value: action.payload.value,
          },
        },
      ];
    },
    onAddAnswers: (state, action) => {
      state.answers = [
        ...state.answers,
        {
          id: action.payload.id,
          native: action.payload.native,
          value: action.payload.value,
        },
      ];
    },
    onClearQuestion: (state, action) => {
      state.questions = action.payload;
    },
    onClearAnswers: (state, action) => {
      state.answers = action.payload;
    },
    onLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export default slice.reducer;
export const vocabularyAction = {
  ...slice.actions,
};
