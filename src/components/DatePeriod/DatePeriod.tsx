"use client";

import styles from "./DatePeriod.module.scss";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { PointDataType } from "@/lib/types/types";

type PropsType = {
  index: number;
  data: PointDataType[];
};

export const DatePeriod = ({
  index: pointIndex,
  data: pointsData,
}: PropsType) => {
  const [firstDate, setFirstDate] = useState(
    pointsData[pointIndex].dates[0].year
  );
  const [secondDate, setSecondDate] = useState(
    pointsData[pointIndex].dates[pointsData[pointIndex].dates.length - 1].year
  );

  const changeDates = (
    currentDate: number,
    targetDate: number,
    setStateDispatch: Dispatch<SetStateAction<number>>
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
    changeDates(firstDate, pointsData[pointIndex].dates[0].year, setFirstDate);
    changeDates(
      secondDate,
      pointsData[pointIndex].dates[pointsData[pointIndex].dates.length - 1]
        .year,
      setSecondDate
    );
  }, [pointIndex]);

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
