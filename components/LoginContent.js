import React from "react";
import Image from "next/image";

import cta from "../public/images/cta-logo-one.svg";
import cta2 from "../public/images/cta-logo-two.png";
import Button from "./Button";

import styles from "./LoginContent.module.scss";

function LoginContent() {
  return (
    <div className={styles.content}>
      <div className={styles.content__imageBox}>
        <Image priority src={cta} alt="CTA logos" layout="fill" />
      </div>
      <Button content="GET ALL THERE" className="btn--blue" />
      <p className={styles.content__description}>
        Get Premier Access to Raya and the Last Dragon for an additional fee
        with Disney+ subscription.As of 26/3/21, the price of Dinsey+ and bundle
        will increase by $1.
      </p>
      <div priority className={styles.content__imageBox2}>
        <Image src={cta2} alt="CTA logos" layout="fill" />
      </div>
    </div>
  );
}

export default LoginContent;
