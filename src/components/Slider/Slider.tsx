"use client";

import { Event, mockedData } from "@/lib/mockedData";
import styles from "./Slider.module.scss";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Slider = () => {
  const eventArr = mockedData[1].dates;

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={80}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      navigation
      pagination={{ clickable: true }}
    >
      {eventArr.map((event) => (
        <SwiperSlide>
          <p className={styles.year}>{event.year}</p>
          <p className={styles.event}>{event.event}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
