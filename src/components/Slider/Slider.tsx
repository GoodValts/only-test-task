"use client";

import styles from "./Slider.module.scss";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getPointData } from "@/lib/common/getPointData";
import { useAppSelector } from "@/lib/hooks";
import { selectPoint } from "@/lib/features/pointSlice";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export const Slider = () => {
  const index = useAppSelector(selectPoint);
  const eventArr = getPointData(index).dates;

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={80}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      allowSlidePrev={false}
      navigation
      pagination={{ clickable: true }}
      className={styles.slider}
    >
      {eventArr.map((event) => (
        <SwiperSlide key={event.event}>
          <p className={`${styles.year} ${bebas.className}`}>{event.year}</p>
          <p className={styles.event}>{event.event}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
