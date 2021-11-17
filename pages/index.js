import styles from "../styles/Login.module.scss";
import Header from "../components/Header";
import LoginContent from "../components/LoginContent";

export default function Login() {
  return (
    <main className={styles.main}>
      <Header />
      <article className={styles.container}>
        <LoginContent />
      </article>
    </main>
  );
}
