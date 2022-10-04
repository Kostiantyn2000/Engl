import { useDispatch } from "react-redux";
import { quizAction } from "../../../store";

export const useData = () => {
  const dispatch = useDispatch();

  const handleClearQuiz = () => {
    dispatch(quizAction.onElementsClear([]));
  };

  return { handleClearQuiz };
};
