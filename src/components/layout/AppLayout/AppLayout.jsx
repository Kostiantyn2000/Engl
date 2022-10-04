import React from "react";
import { Outlet } from "react-router-dom";
import { NavBarLayout } from "../NavBarLayout/NavBarLayout";
import styles from "./AppLayout.module.scss";

export const AppLayout = () => {
  return (
    <div>
      <header className={styles.header}>
        <NavBarLayout />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};
