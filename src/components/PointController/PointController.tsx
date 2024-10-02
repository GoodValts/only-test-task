"use client";
import { getPointNames } from "@/lib/common/getPointData";
import styles from "./PointController.module.scss";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectPoint, setPoint } from "@/lib/features/pointSlice";
import { formatIndicatorValue } from "@/lib/common/caclulateIndicatorString";

export const PointController = () => {
  const dispatch = useAppDispatch();
  const total = getPointNames().length;
  const current = useAppSelector(selectPoint);

  return (
    <div className={styles.container}>
      <p
        className={styles.indicator}
      >{`${formatIndicatorValue(current + 1)}/${formatIndicatorValue(total)}`}</p>
      <p
        className={styles.prevButton}
        onClick={() => {
          if (current > 0) dispatch(setPoint(current - 1));
        }}
      >
        {"<"}
      </p>
      <p
        className={styles.nextButton}
        onClick={() => {
          if (current < total - 1) dispatch(setPoint(current + 1));
        }}
      >
        {">"}
      </p>
    </div>
  );
};
