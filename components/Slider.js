import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-slick";
import Image from "next/image";
import scale from "../public/images/slider-scale.jpg";
import badag from "../public/images/slider-badag.jpg";
import scales from "../public/images/slider-scales.jpg";

import styles from "./Slider.module.scss";

function Slider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    automatic: true,
  };
  return (
    <div className={styles.sliderContainer}>
      <Carousel className={styles.carousel} {...settings}>
        <div className={styles.carousel__wrap}>
          <a className={styles.carousel__wrapHelper}>
            <Image src={scales} />
          </a>
        </div>
        <div className={styles.carousel__wrap}>
          <a className={styles.carousel__wrapHelper}>
            <Image src={badag} />
          </a>
        </div>
        <div className={styles.carousel__wrap}>
          <a className={styles.carousel__wrapHelper}>
            <Image src={scale} />
          </a>
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
