import React from "react";

import { useSelector } from "react-redux";
import Header from "../components/Header";
import styles from "../styles/Home.module.scss";
import Slider from "../components/Slider";

function Home() {
  console.log(useSelector((state) => state.authState));
  return (
    <main className={styles.main}>
      <Header />
      <article className={styles.content}>
        <Slider />
      </article>
    </main>
  );
}

export default Home;
