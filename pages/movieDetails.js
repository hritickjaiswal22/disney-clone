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
      <article className={styles.mainContent}>
        <Image src={movie.backgroundImg} layout="fill" alt="Background Image" />
        Hello
      </article>
    </main>
  );
}

export default MovieDetails;
