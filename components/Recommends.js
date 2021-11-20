import React from "react";
import Image from "next/image";

import styles from "./Recommends.module.scss";
import disney from "../public/images/viewers-disney.png";

function Recommends({ title }) {
  return (
    <section className={styles.recommendSection}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.recommendsContainer}>
        <div className={styles.recommendsContainer__item}>
          <Image
            className={styles.recommendsContainer__image}
            src={disney}
            layout="fill"
          />
        </div>
        <div className={styles.recommendsContainer__item}>
          <Image
            className={styles.recommendsContainer__image}
            src={disney}
            layout="fill"
          />
        </div>
        <div className={styles.recommendsContainer__item}>
          <Image
            className={styles.recommendsContainer__image}
            src={disney}
            layout="fill"
          />
        </div>
        <div className={styles.recommendsContainer__item}>
          <Image
            className={styles.recommendsContainer__image}
            src={disney}
            layout="fill"
          />
        </div>
      </div>
    </section>
  );
}

export default Recommends;
