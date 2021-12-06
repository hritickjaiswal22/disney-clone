import { useSelector } from "react-redux";
import Header from "../components/Header";
import styles from "../styles/Home.module.scss";
import Slider from "../components/Slider";
import Viewer from "../components/Viewer";
import Recommends from "../components/Recommends";

function Home({ moviesData }) {
  moviesData = moviesData.movies;
  return (
    <main className={styles.main}>
      <Header />
      <article className={styles.content}>
        <Slider />
        <Viewer />
        <Recommends
          movieList={
            Object.keys(moviesData).length > 0
              ? [
                  moviesData["1"],
                  moviesData["2"],
                  moviesData["3"],
                  moviesData["4"],
                ]
              : null
          }
          title="Recommended for you"
        />
        <Recommends
          movieList={
            Object.keys(moviesData).length > 0
              ? [
                  moviesData["5"],
                  moviesData["6"],
                  moviesData["7"],
                  moviesData["8"],
                ]
              : null
          }
          title="New to Disney+"
        />
        <Recommends
          movieList={
            Object.keys(moviesData).length > 0
              ? [
                  moviesData["9"],
                  moviesData["10"],
                  moviesData["11"],
                  moviesData["12"],
                ]
              : null
          }
          title="Originals"
        />
        <Recommends
          movieList={
            Object.keys(moviesData).length > 0
              ? [
                  moviesData["13"],
                  moviesData["14"],
                  moviesData["15"],
                  moviesData["16"],
                ]
              : null
          }
          title="Trending"
        />
      </article>
    </main>
  );
}

export default Home;

export async function getStaticProps(context) {
  const response = await fetch("https://jsonkeeper.com/b/2EUP");
  const moviesData = await response.json();
  return {
    props: { moviesData },
  };
}
