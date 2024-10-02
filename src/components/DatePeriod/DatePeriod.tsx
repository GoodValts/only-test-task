"use client";

import { mockedData } from "@/lib/mockedData";
import styles from "./DatePeriod.module.scss";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const DatePeriod = () => {
  const [firstDate, setFirstDate] = useState(mockedData[0].dates[0].year);
  const [secondDate, setSecondDate] = useState(
    mockedData[0].dates[mockedData[0].dates.length - 1].year,
  );

  const targetF = 2000;
  const targetS = 2005;

  const changeDates = (
    currentDate: number,
    targetDate: number,
    setStateDispatch: Dispatch<SetStateAction<number>>,
  ) => {
    const fps = 25;
    const ms = 500;

    let steps = targetDate - currentDate;
    if (steps > fps) steps = fps;

    const delta = (targetDate - currentDate) / steps;

    const updateDate = () => {
      if (currentDate >= targetDate) return;

      currentDate += delta;
      setStateDispatch(Math.round(currentDate));

      setTimeout(updateDate, ms / steps);
    };

    updateDate();
  };

  useEffect(() => {
    console.log(firstDate);
  }, [firstDate]);

  return (
    <div className={styles.container}>
      <p
        className={styles.date}
        onClick={() => {
          changeDates(firstDate, targetF, setFirstDate);
          changeDates(secondDate, targetS, setSecondDate);
        }}
      >
        <span className={styles.firstDate}>{firstDate}</span>{" "}
        <span className={styles.secondDate}>{secondDate}</span>
      </p>
    </div>
  );
};
