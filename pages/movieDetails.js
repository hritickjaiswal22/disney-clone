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
        Hello
      </article>
    </main>
  );
}

export default MovieDetails;
