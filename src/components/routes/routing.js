import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  CreateWordPage,
  RepeatWordsPage,
  ResultPage,
  HistoryPage,
} from "../../views";
import { AppLayout } from "../layout";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/create_word" element={<CreateWordPage />} />
        <Route path="/repeat_words" element={<RepeatWordsPage />} />
        <Route path="/history_repeat" element={<HistoryPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Route>
    </Routes>
  );
};
