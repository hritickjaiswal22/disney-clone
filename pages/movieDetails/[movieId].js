import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

import styles from "../../styles/MovieDetails.module.scss";
import Header from "../../components/Header";

function MovieDetails({ movie }) {
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

export async function getStaticPaths() {
  const indexArray = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
  ];

  return {
    paths: indexArray.map((index) => {
      return {
        params: { movieId: index },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { movieId } = params;

  const response = await fetch("https://jsonkeeper.com/b/2EUP");
  const moviesData = await response.json();
  const { movies } = moviesData;

  const movie = movies[movieId];

  return {
    props: { movie },
  };
}
