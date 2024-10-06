"use client";

import styles from "./Slider.module.scss";
import "swiper/scss";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import { PointDataType } from "@/lib/types/types";
import { Bebas_Neue } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import sliderIcon from "../../assets/slider-arrow-icon.svg";
import Image from "next/image";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

type PropsType = {
  data: PointDataType[];
  index: number;
};

export const Slider = ({ data: pointsData, index: pointIndex }: PropsType) => {
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const [slideNumber, setSlideNumber] = useState(0);

  const [width, setWidth] = useState(1600);

  const eventArr = pointsData[pointIndex].dates;

  const swiperRef = useRef<SwiperClass | null>(null);

  const slideNext = () => {
    swiperRef.current?.slideNext();
    setSlideNumber(slideNumber + 1);
    setIsStart(false);
  };
  const slidePrev = () => {
    swiperRef.current?.slidePrev();
    setSlideNumber(slideNumber - 1);
    setIsEnd(false);
  };

  useEffect(() => {
    setWidth(window.innerWidth);

    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsStart(true);
    if (pointsData[pointIndex].dates.length > 3) {
      setIsEnd(false);
    } else {
      setIsEnd(true);
    }
  }, [pointIndex, pointsData]);

  return (
    <>
      <div className={styles.container}>
        {!isStart && (
          <button
            onClick={slidePrev}
            className={`${styles.slideButton} ${styles.slideButton_prev}`}
          >
            <Image src={sliderIcon} alt="prev-slider" />
          </button>
        )}

        <Swiper
          className={styles.slider}
          onInit={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={width > 1599.98 ? 80 : 25}
          slidesPerView={width > 1599.98 ? 3 : 2}
          onSlideChange={(swiper) => {
            if (swiper.realIndex !== 0) setIsStart(false);
            if (swiper.realIndex !== eventArr.length - 3) setIsEnd(false);
          }}
          onReachBeginning={() => setIsStart(true)}
          onReachEnd={() => setIsEnd(true)}
        >
          {eventArr.map((event) => (
            <SwiperSlide key={event.event}>
              <p className={`${styles.year} ${bebas.className}`}>
                {event.year}
              </p>
              <p className={styles.event}>{event.event}</p>
            </SwiperSlide>
          ))}
          {width < 1599.98 && <SwiperSlide></SwiperSlide>}
        </Swiper>

        {!isEnd && (
          <button onClick={slideNext} className={styles.slideButton}>
            <Image src={sliderIcon} alt="next-slider" />
          </button>
        )}
      </div>
    </>
  );
};
