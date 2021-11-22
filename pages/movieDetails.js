import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

import styles from "../styles/MovieDetails.module.scss";
import Header from "../components/Header";

function MovieDetails() {
  const { movie } = useSelector((state) => state.selectedMovieState);
  console.log(movie);
  return (
    <main>
      <Header />
      <article
        style={{ backgroundImage: "url(" + movie.backgroundImg + ")" }}
        className={styles.mainContent}
      >
        <div
          className={`${styles.mainContent__imageTitleBox} ${styles.fromLeft}`}
        >
          <Image src={movie.titleImg} layout="fill" al4="Movie Title" />
        </div>
        <h2 className={styles.mainContent__metaData}>{movie.subTitle}</h2>
        <p className={styles.mainContent__description}>{movie.description}</p>
      </article>
    </main>
  );
}

export default MovieDetails;
