"use client";
import { getPointNames } from "@/lib/common/getPointData";
import styles from "./PointController.module.scss";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectPoint, setPoint } from "@/lib/features/pointSlice";
import { formatIndicatorValue } from "@/lib/common/calculateIndicatorString";
import arrowIcon from "../../assets/arrow-icon.svg";
import Image from "next/image";

export const PointController = () => {
  const dispatch = useAppDispatch();
  const total = getPointNames().length;
  const current = useAppSelector(selectPoint);

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
          if (current > 0) dispatch(setPoint(current - 1));
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
          if (current < total - 1) dispatch(setPoint(current + 1));
        }}
      >
        <Image src={arrowIcon} alt="next_button" />
      </p>
    </div>
  );
};
