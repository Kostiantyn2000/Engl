import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { useData } from "./useData";
import styles from "./HistoryPage.module.scss";
import format from "date-fns/format";

export const HistoryPage = () => {
  const { history, averageActivity } = useData();

  console.log(history);

  return (
    <div className={styles.wrapper}>
      <Typography variant="h3" color="blue-gray" className={styles.title}>
        Medium activity {averageActivity}%
      </Typography>
      <div className={styles.sectionCard}>
        {history.map((quizzes, index) => {
          return (
            <div key={index} className={styles.cardContent}>
              <Typography
                variant="h4"
                color="blue-gray"
                className={styles.title}
              >
                {format(new Date(), "MM/dd/yyyy")}
              </Typography>
              {quizzes.map((quiz, index) => {
                return (
                  <div>
                    <Typography
                      variant="h4"
                      color="blue-gray"
                      className={styles.title}
                    >
                      Test {index + 1}
                    </Typography>
                    <Typography
                      variant="h4"
                      color="blue-gray"
                      className="font-medium"
                      textGradient
                    >
                      Question {quiz.question}
                    </Typography>
                    <Typography
                      color="blue"
                      className="font-medium"
                      textGradient
                    >
                      Correct answer {quiz.correctAnswer.value}
                    </Typography>
                    {quiz.answers.map((answer, index) => {
                      return (
                        <Card key={index} className={styles.card}>
                          <CardBody
                            className={styles.cardBody}
                            style={{
                              background:
                                answer.value === quiz.correctAnswer.value
                                  ? "#86af49"
                                  : "#c94c4c",
                            }}
                          >
                            <Typography
                              variant="h4"
                              color="purple"
                              className="font-bold"
                              textGradient
                            >
                              {answer.value}
                            </Typography>
                          </CardBody>
                        </Card>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
