"use client";

import styles from "./DatePeriod.module.scss";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { selectPoint } from "@/lib/features/pointSlice";
import { getPointData } from "@/lib/common/getPointData";
import { useAppSelector } from "@/lib/hooks";

export const DatePeriod = () => {
  const index = useAppSelector(selectPoint);

  const [firstDate, setFirstDate] = useState(getPointData(index).dates[0].year);
  const [secondDate, setSecondDate] = useState(
    getPointData(index).dates[getPointData(index).dates.length - 1].year,
  );

  const changeDates = (
    currentDate: number,
    targetDate: number,
    setStateDispatch: Dispatch<SetStateAction<number>>,
  ) => {
    const fps = 25;
    const ms = 500;

    let steps = Math.abs(targetDate - currentDate);
    if (steps > fps) steps = fps;

    const delta = (targetDate - currentDate) / steps;

    const updateDate = () => {
      if (delta > 0) {
        setStateDispatch(targetDate);
        if (currentDate >= targetDate) return;
      } else {
        setStateDispatch(targetDate);
        if (currentDate <= targetDate) return;
      }

      currentDate += delta;
      setStateDispatch(Math.round(currentDate));

      setTimeout(updateDate, ms / steps);
    };

    updateDate();
  };

  useEffect(() => {
    changeDates(firstDate, getPointData(index).dates[0].year, setFirstDate);
    changeDates(
      secondDate,
      getPointData(index).dates[getPointData(index).dates.length - 1].year,
      setSecondDate,
    );
  }, [index]);

  return (
    <div className={styles.container}>
      <p
        className={styles.date}
        onClick={() => {
          changeDates(firstDate, 2022, setFirstDate);
          changeDates(secondDate, 2022, setSecondDate);
        }}
      >
        <span className={styles.firstDate}>{firstDate}</span>
        {"  "}
        <span className={styles.secondDate}>{secondDate}</span>
      </p>
    </div>
  );
};
