import React from "react";
import { Typography } from "@material-tailwind/react";
import { useData } from "./useData";
import styles from "./ResultPage.module.scss";

export const ResultPage = () => {
  const { result } = useData();

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <Typography variant="h1">Result {result}</Typography>
      </div>
    </div>
  );
};
