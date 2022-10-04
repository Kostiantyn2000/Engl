import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { quizAction, vocabularyAction } from "../../store";

export const useData = () => {
  const dispatch = useDispatch();

  const words = useSelector((state) => state.vocabulary.elements);
  const questions = useSelector((state) => state.vocabulary.questions);
  const answers = useSelector((state) => state.vocabulary.answers);
  const isLoading = useSelector((state) => state.vocabulary.isLoading);

  const handleAddWordQuiz = (id) => {
    const element = words.find((item) => item.id === id);

    if (questions.length <= 9) {
      dispatch(vocabularyAction.onAddQuestions(element));
      dispatch(vocabularyAction.onAddAnswers(element));
    }
  };

  const handleToggleWords = (id) => {
    let newWords = words.map((item) => {
      if (item.id !== id) {
        return item;
      }
      return {
        ...item,
        isCheck: !item.isCheck,
      };
    });
    if (questions.length <= 9) {
      dispatch(vocabularyAction.onToggleElements(newWords));
    }
  };

  useEffect(() => {
    const shuffle = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    };

    const newAnswersRandom = shuffle([...answers]);

    const updateAnswers = newAnswersRandom
      .map((item) => {
        return item;
      })
      .slice(0, 3);

    const newQuestions = questions.map((item) => {
      return {
        ...item,
        answers: shuffle([...updateAnswers, item.correctAnswer]),
      };
    });

    if (questions.length === 10) {
      dispatch(quizAction.onAddElements(newQuestions));
    }
  }, [questions, answers]);

  return { words, handleAddWordQuiz, handleToggleWords, isLoading, questions };
};
