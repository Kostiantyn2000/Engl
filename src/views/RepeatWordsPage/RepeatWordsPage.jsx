import React from "react";
import { Button } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import { useData } from "./useData";
import { useNavigate } from "react-router-dom";
import styles from "./RepeatWordsPage.module.scss";

export const RepeatWordsPage = () => {
  const { quizzes, questions, handleClickAnswer, showScore } = useData();

  const navigate = useNavigate();

  return (
    <>
      {showScore ? (
        navigate("/result")
      ) : (
        <div className={styles.wrapper}>
          <div>
            <Typography variant="h3">
              Test {questions + 1} with {quizzes?.length}
            </Typography>
            <div>
              <Typography variant="h5">
                {quizzes[questions]?.question}
              </Typography>
              <div className={styles.buttons}>
                {quizzes[questions]?.answers.map((item, index) => {
                  return (
                    <Button
                      key={index}
                      className={styles.button}
                      onClick={() =>
                        handleClickAnswer(
                          quizzes[questions]?.correctAnswer,
                          item.value,
                          quizzes[questions]
                        )
                      }
                      name="type"
                    >
                      {item.value}
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
