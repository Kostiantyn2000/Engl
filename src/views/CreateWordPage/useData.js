import { useState } from "react";
import { useDispatch } from "react-redux";
import { vocabularyAction } from "../../store";

export const useData = () => {
  const dispatch = useDispatch();

  const [valueUa, setValueUa] = useState("");
  const [valueEn, setValueEn] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      vocabularyAction.onAddElements({
        id: Math.random() * 300,
        native: valueEn,
        value: valueUa,
        isCheck: false,
      })
    );
    setValueUa("");
    setValueEn("");
  };

  return { valueUa, setValueUa, valueEn, setValueEn, handleSubmit };
};
