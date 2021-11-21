import React from "react";
import Image from "next/image";

import styles from "./Recommends.module.scss";
import disney from "../public/images/viewers-disney.png";

function Recommends({ title, movieList }) {
  console.log(movieList);
  return (
    <section className={styles.recommendSection}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.recommendsContainer}>
        <div className={styles.recommendsContainer__item}>
          <Image
            className={styles.recommendsContainer__image}
            src={movieList ? movieList[0].cardImg : disney}
            layout="fill"
            alt={movieList ? movieList[0].title : ""}
          />
        </div>
        <div className={styles.recommendsContainer__item}>
          <Image
            className={styles.recommendsContainer__image}
            src={movieList ? movieList[1].cardImg : disney}
            layout="fill"
            alt={movieList ? movieList[1].title : ""}
          />
        </div>
        <div className={styles.recommendsContainer__item}>
          <Image
            className={styles.recommendsContainer__image}
            src={movieList ? movieList[2].cardImg : disney}
            layout="fill"
            alt={movieList ? movieList[2].title : ""}
          />
        </div>
        <div className={styles.recommendsContainer__item}>
          <Image
            className={styles.recommendsContainer__image}
            src={movieList ? movieList[3].cardImg : disney}
            layout="fill"
            alt={movieList ? movieList[3].title : ""}
          />
        </div>
      </div>
    </section>
  );
}

export default Recommends;
