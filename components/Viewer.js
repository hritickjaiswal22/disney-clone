import React from "react";
import Image from "next/image";

import styles from "./Viewer.module.scss";
import disney from "../public/images/viewers-disney.png";
import marvel from "../public/images/viewers-marvel.png";
import national from "../public/images/viewers-national.png";
import pixar from "../public/images/viewers-pixar.png";
import starwars from "../public/images/viewers-starwars.png";

function Viewer() {
  return (
    <section className={styles.container}>
      <div className={styles.container__item}>
        <Image src={disney} layout="fill" />
      </div>
      <div className={styles.container__item}>
        <Image src={marvel} layout="fill" />
      </div>
      <div className={styles.container__item}>
        <Image src={national} layout="fill" />
      </div>
      <div className={styles.container__item}>
        <Image src={pixar} layout="fill" />
      </div>
      <div className={styles.container__item}>
        <Image src={starwars} layout="fill" />
      </div>
    </section>
  );
}

export default Viewer;
