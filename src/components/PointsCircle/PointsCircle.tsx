"use client";

import styles from "./PointsCircle.module.scss";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { calculateCirclePosition } from "@/lib/common/calculateCirclePosition";
import { getPointNames } from "@/lib/common/getPointsData";
import { PointDataType } from "@/lib/types/types";

type PropsType = {
  data: PointDataType[];
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
};

export const PointsCircle = ({
  data: pointsData,
  index: pointIndex,
  setIndex: setPointIndex,
}: PropsType) => {
  const data = getPointNames(pointsData);
  const angle = 360 / data.length;
  const initialAngle = angle > 45 && angle <= 90 ? angle : 60;

  const [circleAngle, setCircleAngle] = useState(
    initialAngle + angle * pointIndex,
  );

  const rotate = useCallback(
    (index: number) => {
      const degInCircle = 360;

      const current = circleAngle % degInCircle;
      const target = initialAngle + index * angle;

      let delta = target - current;
      if (delta > degInCircle / 2) delta -= degInCircle;
      if (delta < -degInCircle / 2) delta += degInCircle;

      setCircleAngle(circleAngle + delta);
    },
    [angle, circleAngle, initialAngle],
  );

  useEffect(() => {
    rotate(pointIndex);
  }, [pointIndex, rotate]);

  return (
    <div
      className={styles.container}
      style={{
        transform: `rotate(${-circleAngle}deg)`,
      }}
    >
      {data.map((el, index) => (
        <div
          className={styles.block}
          key={el}
          style={{
            transform: `translate(${calculateCirclePosition(index, angle).x}px, ${calculateCirclePosition(index, angle).y}px)`,
          }}
        >
          <p
            className={
              index === pointIndex
                ? `${styles.pointNumber} ${styles.pointNumber_active}`
                : styles.pointNumber
            }
            style={{ transform: `rotate(${circleAngle}deg)` }}
            onClick={() => {
              setPointIndex(index);
            }}
          >
            {index + 1}
          </p>
          <div
            className={styles.nameContainer}
            style={{ transform: `rotate(${circleAngle}deg)` }}
          >
            <p
              className={
                index === pointIndex
                  ? `${styles.pointName} ${styles.pointName_active}`
                  : styles.pointName
              }
            >
              {el}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
