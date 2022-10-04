import { Button, Input } from "@material-tailwind/react";
import React from "react";
import { useData } from "./useData";
import styles from "./CreateWordPage.module.scss";

export const CreateWordPage = () => {
  const { handleSubmit, setValueUa, valueUa, valueEn, setValueEn } = useData();

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputWrapper}>
          <Input
            className="w-40 text-black placeholder:text-white;"
            variant="static"
            label="English word"
            placeholder="English"
            value={valueEn}
            onChange={(e) => setValueEn(e.target.value)}
          />
          <Input
            className="w-40 text-black placeholder:text-white;"
            variant="static"
            label="Ukraine word"
            placeholder="Ukraine"
            value={valueUa}
            onChange={(e) => setValueUa(e.target.value)}
          />
        </div>
        <Button type="submit" className={styles.button} variant="filled">
          Create
        </Button>
      </form>
    </div>
  );
};
