import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { historyAction, quizAction } from "../../store";

export const useData = () => {
  const dispatch = useDispatch();

  const [questions, setQuestions] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const quizzes = useSelector((state) => state.quizzes.elements);

  const handleClickAnswer = (valueOne, valueTwo) => {
    if (valueOne.value.toLowerCase() === valueTwo.toLowerCase()) {
      setScore(score + 1);
    }

    const nextQuestion = questions + 1;

    if (nextQuestion < quizzes.length) {
      setQuestions(nextQuestion);
    } else {
      setShowScore(true);
      dispatch(quizAction.onClearQuiz([]));
      dispatch(historyAction.onHistoryElements(quizzes));
    }
  };

  useEffect(() => {
    const result = (score * 100) / 10;
    dispatch(quizAction.onResultQuiz(result));
  }, [score]);

  return {
    quizzes,
    setQuestions,
    questions,
    handleClickAnswer,
    showScore,
  };
};
