import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routing } from "./components/routes";
import MockQuizRepository from "./services/quizRepository";
import { vocabularyAction } from "./store";

const App = () => {
  const dispatch = useDispatch();

  const api = async () => {
    try {
      let data = await new MockQuizRepository().getElements();

      if (data.length) {
        dispatch(vocabularyAction.onFetchElements(data));
        dispatch(vocabularyAction.onLoading(false));
      }
    } catch (error) {
      console.log(error);
      dispatch(vocabularyAction.onLoading(false));
    }
  };

  useEffect(() => {
    api();
  }, []);

  return <Routing />;
};

export default App;
