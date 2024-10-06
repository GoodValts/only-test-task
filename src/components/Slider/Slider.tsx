"use client";

import styles from "./Slider.module.scss";
import "swiper/scss";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import { PointDataType } from "@/lib/types/types";
import { Bebas_Neue } from "next/font/google";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import sliderIcon from "../../assets/slider-arrow-icon.svg";
import Image from "next/image";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

type PropsType = {
  data: PointDataType[];
  index: number;
  slideNumber: number;
  setSlideNumber: Dispatch<SetStateAction<number>>;
};

export const Slider = ({
  data: pointsData,
  index: pointIndex,
  slideNumber: slideNumber,
  setSlideNumber: setSlideNumber,
}: PropsType) => {
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

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
  const slideIndex = (index: number) => {
    // console.log("index=", index);
    swiperRef.current?.slideTo(index);
    setSlideNumber(index);
  };

  useEffect(() => {
    slideIndex(slideNumber);
  }, [slideNumber]);

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
          spaceBetween={80}
          slidesPerView={3}
          onSlideChange={(swiper) => {
            if (swiper.realIndex !== 0) setIsStart(false);
            if (swiper.realIndex !== eventArr.length - 3) setIsEnd(false);
          }}
          onReachBeginning={() => {
            // console.log("Reach start");
            setIsStart(true);
          }}
          onReachEnd={() => {
            // console.log("Reach end");
            setIsEnd(true);
          }}
        >
          {eventArr.map((event) => (
            <SwiperSlide key={event.event}>
              <p className={`${styles.year} ${bebas.className}`}>
                {event.year}
              </p>
              <p className={styles.event}>{event.event}</p>
            </SwiperSlide>
          ))}
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
