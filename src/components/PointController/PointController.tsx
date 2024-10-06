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
};

export const PointController = ({
  data: pointsData,
  index: pointIndex,
  setIndex: setPointIndex,
}: PropsType) => {
  const total = pointsData.length;
  const current = pointIndex;

  return (
    <div className={styles.container}>
      <p className={styles.indicator}>
        {`${formatIndicatorValue(current + 1)}/${formatIndicatorValue(total)}`}
      </p>
      <p
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
      </p>
      <p
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
      </p>
    </div>
  );
};
