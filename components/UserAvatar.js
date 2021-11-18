import React from "react";
import Image from "next/image";

import styles from "./UserAvatar.module.scss";

function UserAvatar({ photoURL }) {
  return (
    <div className={styles.avatarBox}>
      <Image
        className={styles.avatarBox__avatar}
        src={photoURL}
        alt="User Avatar"
        layout="fill"
      />
    </div>
  );
}

export default UserAvatar;
