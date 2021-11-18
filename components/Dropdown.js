import React from "react";

import styles from "./Dropdown.module.scss";

function Dropdown({ children, onClick }) {
  return (
    <div className={styles.dropdown}>
      {children}
      <div onClick={onClick} className={styles.dropdown__content}>
        LOGOUT
      </div>
    </div>
  );
}

export default Dropdown;
