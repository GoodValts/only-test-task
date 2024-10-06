"use client";

import styles from "./HistoricalDates.module.scss";
import { PointsCircle } from "../PointsCircle/PointsCircle";
import { DatePeriod } from "../DatePeriod/DatePeriod";
import { PointController } from "../PointController/PointController";
import { Slider } from "../Slider/Slider";
import { PointDataType } from "@/lib/types/types";
import { useState } from "react";

export const HistoricalDates = ({
  data: pointsData,
}: {
  data: PointDataType[];
}) => {
  const [pointIndex, setPointIndex] = useState(0);
  const [slideNumber, setSlideNumber] = useState(0);

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.headerRectangle}></div>
        <h1 className={styles.headerText}>Исторические даты</h1>
      </div>
      <div className={styles.verticalAxis}></div>
      <div className={styles.ellipse}>
        <div className={styles.horizontalAxis}></div>
        <PointsCircle
          data={pointsData}
          index={pointIndex}
          setIndex={setPointIndex}
        />
        <DatePeriod data={pointsData} index={pointIndex} />
      </div>
      <div className={styles.info}>
        <PointController
          data={pointsData}
          index={pointIndex}
          setIndex={setPointIndex}
          slideNumber={slideNumber}
          setSlideNumber={setSlideNumber}
        />
        <Slider
          data={pointsData}
          index={pointIndex}
          slideNumber={slideNumber}
          setSlideNumber={setSlideNumber}
        />
      </div>
    </main>
  );
};
