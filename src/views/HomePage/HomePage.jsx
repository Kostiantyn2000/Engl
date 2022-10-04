import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { useData } from "./useData";
import styles from "./HomePage.module.scss";
import checkImage from "../../assets/images/check.png";
import { Loading } from "../../components/forms";

export const HomePage = () => {
  const { words, handleAddWordQuiz, handleToggleWords, isLoading, questions } =
    useData();

  console.log(words);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={styles.wrapper}>
      <Typography variant="h3" color="blue">
        To start the test you need to choose 10 words / {questions.length}
      </Typography>
      <ul className={styles.list}>
        {words.map(({ id, native, value, isCheck }) => {
          return (
            <Card
              className={styles.cardItem}
              key={id}
              onClick={() => {
                handleAddWordQuiz(id);
                handleToggleWords(id);
              }}
            >
              {isCheck && (
                <img className={styles.images} src={checkImage} alt="check" />
              )}
              <CardBody className={styles.cardBody}>
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className={styles.title}
                >
                  {native}
                </Typography>
                <Typography
                  color="blue-gray"
                  className={styles.subTitle}
                  textGradient
                >
                  {value}
                </Typography>
              </CardBody>
            </Card>
          );
        })}
      </ul>
    </div>
  );
};
