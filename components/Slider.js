import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-slick";
import Image from "next/image";
import scale from "../public/images/slider-scale.jpg";
import badag from "../public/images/slider-badag.jpg";
import scales from "../public/images/slider-scales.jpg";
import badging from "../public/images/slider-badging.jpg";

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
            <Image priority={true} src={scales} alt="Slider Image" />
          </a>
        </div>
        <div className={styles.carousel__wrap}>
          <a className={styles.carousel__wrapHelper}>
            <Image priority={true} src={badag} alt="Slider Image" />
          </a>
        </div>
        <div className={styles.carousel__wrap}>
          <a className={styles.carousel__wrapHelper}>
            <Image priority={true} src={scale} alt="Slider Image" />
          </a>
        </div>
        <div className={styles.carousel__wrap}>
          <a className={styles.carousel__wrapHelper}>
            <Image priority={true} src={badging} alt="Slider Image" />
          </a>
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
