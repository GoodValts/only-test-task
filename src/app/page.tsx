import { HistoryPoints } from "@/components/HistoryPoints/HistoryPoints";
import styles from "./page.module.scss";
import { mockedData } from "@/lib/mockedData";
import { DatePeriod } from "@/components/DatePeriod/DatePeriod";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.header}>Исторические даты</h1>
        <div className={styles.verticalAxis}></div>
        <div className={styles.ellipse}>
          <div className={styles.horizontalAxis}></div>
          <HistoryPoints data={mockedData} />
          <DatePeriod />
        </div>
      </main>
    </div>
  );
}
