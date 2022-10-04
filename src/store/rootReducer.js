import { combineReducers, configureStore } from "@reduxjs/toolkit";
import historySlice from "./history/history.slice";
import quizSlice from "./quiz/quiz.slice";
import vocabularySlice from "./vocabulary/vocabulary.slice";

const rootReducer = combineReducers({
  history: historySlice,
  vocabulary: vocabularySlice,
  quizzes: quizSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
