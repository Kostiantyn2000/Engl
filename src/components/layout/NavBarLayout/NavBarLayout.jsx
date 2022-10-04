import React from "react";
import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { NAV_BAR_LINKS } from "../../../utils/Constants";
import { Link } from "react-router-dom";
import styles from "./NavBarLayout.module.scss";

export const NavBarLayout = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className={styles.navBarWrapper}>
      <div className={styles.container_}>
        <Link to="/">
          <Typography as="a" href="#" variant="small" className={styles.logo}>
            <span>English Learn</span>
          </Typography>
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            {NAV_BAR_LINKS.map(({ id, title, route }) => {
              return (
                <Link key={id} to={route}>
                  <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className={styles.title}
                  >
                    {title}
                  </Typography>
                </Link>
              );
            })}
          </ul>
        </nav>
        <Link to="/repeat_words">
          <Button variant="gradient" size="sm" className={styles.button}>
            Repeat Words
          </Button>
        </Link>
        <IconButton
          variant="text"
          className={styles.iconButton}
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className={styles.svgIcon}
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.svgIcon}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <Link to="/repeat_words">
          <Button
            variant="gradient"
            size="sm"
            fullWidth
            className={styles.buttonMobile}
          >
            Repeat Words
          </Button>
        </Link>
      </MobileNav>
    </Navbar>
  );
};
