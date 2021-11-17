import React from "react";
import Image from "next/image";

import styles from "./Header.module.scss";
import logo from "../public/images/logo.svg";
import homeIcon from "../public/images/home-icon.svg";
import searchIcon from "../public/images/search-icon.svg";
import watchlistIcon from "../public/images/watchlist-icon.svg";
import seriesIcon from "../public/images/series-icon.svg";
import movieIcon from "../public/images/movie-icon.svg";
import Button from "./Button";

function Header() {
  return (
    <header className={styles.header}>
      <Image className={styles.logo} src={logo} width="70" height="40" />
      <nav className={styles.navbar}>
        <ul className={styles.navbar__list}>
          <li className={styles.navbar__listItem}>
            <Image
              className={styles.navbar__listIcon}
              src={homeIcon}
              width={20}
              height={20}
            />
            home
          </li>
          <li className={styles.navbar__listItem}>
            <Image
              className={styles.navbar__listIcon}
              src={searchIcon}
              width={20}
              height={20}
            />
            search
          </li>
          <li className={styles.navbar__listItem}>
            <Image
              className={styles.navbar__listIcon}
              src={watchlistIcon}
              width={20}
              height={20}
            />
            watchlist
          </li>
          <li className={styles.navbar__listItem}>
            <Image
              className={styles.navbar__listIcon}
              src={seriesIcon}
              width={20}
              height={20}
            />
            series
          </li>
          <li className={styles.navbar__listItem}>
            <Image
              className={styles.navbar__listIcon}
              src={movieIcon}
              width={20}
              height={20}
            />
            movies
          </li>
        </ul>
      </nav>
      <Button content="LOGIN" className="btn--transparent" />
    </header>
  );
}

export default Header;
