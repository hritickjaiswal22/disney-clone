import React from "react";

import { useSelector } from "react-redux";
import Header from "../components/Header";
import styles from "../styles/Home.module.scss";
import Slider from "../components/Slider";
import Viewer from "../components/Viewer";

function Home() {
  console.log(useSelector((state) => state.authState));
  return (
    <main className={styles.main}>
      <Header />
      <article className={styles.content}>
        <Slider />
        <Viewer />
      </article>
    </main>
  );
}

export default Home;
