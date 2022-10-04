import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux/es";
import { vocabularyAction } from "../../store";

export const useData = () => {
  const dispatch = useDispatch();

  const resultQuiz = useSelector((state) => state.quizzes.resultQuiz);
  const words = useSelector((state) => state.vocabulary.elements);

  const newWords = useMemo(() => {
    return words.map((item) => {
      return {
        ...item,
        isCheck: false,
      };
    });
  }, [resultQuiz]);

  useEffect(() => {
    dispatch(vocabularyAction.onToggleElements(newWords));
    dispatch(vocabularyAction.onClearQuestion([]));
    dispatch(vocabularyAction.onClearAnswers([]));
  }, []);

  let result;
  if (resultQuiz === 100) {
    result = `${resultQuiz}%  - all words are correct`;
  } else if (resultQuiz === 0) {
    result = `${resultQuiz}% - all words are correct`;
  } else {
    result = `${resultQuiz}%`;
  }

  return { result };
};
