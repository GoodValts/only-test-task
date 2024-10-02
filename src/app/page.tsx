import { HistoryPoints } from "@/components/HistoryPoints/HistoryPoints";
import styles from "./page.module.scss";
import { DatePeriod } from "@/components/DatePeriod/DatePeriod";
import { Slider } from "@/components/Slider/Slider";
import { PointController } from "@/components/PointController/PointController";
import StoreProvider from "./StoreProvider";

export default function Home() {
  return (
    <StoreProvider index={0}>
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.header}>
            <div className={styles.headerRectangle}></div>
            <h1 className={styles.headerText}>Исторические даты</h1>
          </div>
          <div className={styles.verticalAxis}></div>
          <div className={styles.ellipse}>
            <div className={styles.horizontalAxis}></div>
            <HistoryPoints />
            <DatePeriod />
          </div>
          <div>
            <PointController />
            <Slider />
          </div>
        </main>
      </div>
    </StoreProvider>
  );
}
