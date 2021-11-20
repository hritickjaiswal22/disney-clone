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
        <video
          className={styles.container__video}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="videos/disney.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.container__item}>
        <Image src={marvel} layout="fill" />
        <video
          className={styles.container__video}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="videos/marvel.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.container__item}>
        <Image src={national} layout="fill" />
        <video
          className={styles.container__video}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="videos/national-geographic.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.container__item}>
        <Image src={pixar} layout="fill" />
        <video
          className={styles.container__video}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="videos/pixar.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.container__item}>
        <Image src={starwars} layout="fill" />
        <video
          className={styles.container__video}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="videos/star-wars.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default Viewer;
