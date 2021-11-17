import React from "react";

import styles from "./Button.module.scss";

function Button({ className, onClick, content }) {
  return (
    <button className={`${styles.btn} ${styles[className]}`}>{content}</button>
  );
}

export default Button;
