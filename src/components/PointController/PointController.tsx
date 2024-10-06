"use client";

import styles from "./PointController.module.scss";
import { PointDataType } from "@/lib/types/types";
import { formatIndicatorValue } from "@/lib/common/calculateIndicatorString";
import arrowIcon from "../../assets/arrow-icon.svg";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

type PropsType = {
  data: PointDataType[];
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  slideNumber: number;
  setSlideNumber: Dispatch<SetStateAction<number>>;
};

export const PointController = ({
  data: pointsData,
  index: pointIndex,
  setIndex: setPointIndex,
  slideNumber: slideNumber,
  setSlideNumber: setSlideNumber,
}: PropsType) => {
  const total = pointsData.length;
  const current = pointIndex;
  const eventArr = pointsData[current].dates;

  return (
    <div className={styles.container}>
      <div className={styles.pointsController}>
        <p className={styles.indicator}>
          {`${formatIndicatorValue(current + 1)}/${formatIndicatorValue(total)}`}
        </p>
        <button
          className={
            current === 0
              ? `${styles.button} ${styles.button_disabled}`
              : styles.button
          }
          onClick={() => {
            if (current > 0) setPointIndex(current - 1);
          }}
        >
          <Image src={arrowIcon} alt="prev_button" />
        </button>
        <button
          className={
            current === total - 1
              ? `${styles.button} ${styles.button_reflect} ${styles.button_disabled}`
              : `${styles.button} ${styles.button_reflect}`
          }
          onClick={() => {
            if (current < total - 1) setPointIndex(current + 1);
          }}
        >
          <Image src={arrowIcon} alt="next_button" />
        </button>
      </div>
      <div className={styles.sliderController}>
        {Array.from({ length: eventArr.length }).map((_, index) => (
          <button
            key={index}
            className={
              slideNumber === index
                ? `${styles.slidePagination} ${styles.slidePagination_active}`
                : styles.slidePagination
            }
            onClick={() => setSlideNumber(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};
