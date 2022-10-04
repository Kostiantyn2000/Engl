import { useSelector } from "react-redux/es";

export const useData = () => {
  const history = useSelector((state) => state.history.elements);

  const averageActivity = (history.length / 100) * 100;

  return { history, averageActivity };
};
