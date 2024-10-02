"use client";

import { MockedDataType } from "@/lib/mockedData";
import styles from "./HistoryPoints.module.scss";
import { useEffect, useState } from "react";

const calculatePosition = (index: number, angle: number) => {
  const radius = 530 / 2;
  const halfCircleDeg = 180;
  const x =
    radius *
    Number(Math.cos((index * angle * Math.PI) / halfCircleDeg).toFixed(3));
  const y =
    radius *
    Number(Math.sin((index * angle * Math.PI) / halfCircleDeg).toFixed(3));
  return { x: x, y: y };
};

export const HistoryPoints = ({ data }: { data: MockedDataType }) => {
  const [active, setActive] = useState(0);

  const angle = 360 / data.length;

  const initialAngle = angle > 45 && angle <= 90 ? angle : 60;

  const [circleAngle, setCircleAngle] = useState(initialAngle + 720);

  const rotate = (index: number) => {
    const degInCircle = 360;

    const current = circleAngle % degInCircle;
    const target = initialAngle + index * angle;

    let delta = target - current;

    if (delta > degInCircle / 2) {
      delta -= degInCircle;
    }
    if (delta < -degInCircle / 2) {
      delta += degInCircle;
    }

    console.log("index=", index);
    setActive(index);
    setCircleAngle(circleAngle + delta);
  };

  useEffect(() => {
    console.log("circleAngle=", circleAngle);
    console.log("=");
  }, [circleAngle]);

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
          key={el.name}
          style={{
            transform: `translate(${calculatePosition(index, angle).x}px, ${calculatePosition(index, angle).y}px)`,
          }}
        >
          <p
            className={
              index === active
                ? `${styles.pointNumber} ${styles.pointNumber_active}`
                : styles.pointNumber
            }
            style={{ transform: `rotate(${circleAngle}deg)` }}
            onClick={() => {
              rotate(index);
            }}
          >
            {index + 1}
          </p>
        </div>
      ))}
    </div>
  );
};
