import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import styles from "./Recommends.module.scss";
import disney from "../public/images/viewers-disney.png";
import { saveMovie } from "../slices/movieSlice";

function Recommends({ title, movieList }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const selectHandler = (event) => {
    if (
      event.target.parentElement.parentElement.className.includes(
        "recommendsContainer"
      )
    ) {
      dispatch(
        saveMovie(
          movieList[
            Number(event.target.parentElement.parentElement.dataset.index)
          ]
        )
      );
      router.push("/movieDetails");
    }
  };

  return (
    <section className={styles.recommendSection}>
      <h1 className={styles.title}>{title}</h1>
      <div onClick={selectHandler} className={styles.recommendsContainer}>
        <div data-index="0" className={styles.recommendsContainer__item}>
          <Image
            className={styles.recommendsContainer__image}
            src={movieList ? movieList[0].cardImg : disney}
            layout="fill"
            alt={movieList ? movieList[0].title : ""}
          />
        </div>
        <div data-index="1" className={styles.recommendsContainer__item}>
          <Image
            className={styles.recommendsContainer__image}
            src={movieList ? movieList[1].cardImg : disney}
            layout="fill"
            alt={movieList ? movieList[1].title : ""}
          />
        </div>
        <div data-index="2" className={styles.recommendsContainer__item}>
          <Image
            className={styles.recommendsContainer__image}
            src={movieList ? movieList[2].cardImg : disney}
            layout="fill"
            alt={movieList ? movieList[2].title : ""}
          />
        </div>
        <div data-index="3" className={styles.recommendsContainer__item}>
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
