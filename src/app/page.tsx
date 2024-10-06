import { formatData } from "@/lib/common/getPointsData";
import styles from "./page.module.scss";
import { HistoricalDates } from "@/components/HistoricalDates/HistoricalDates";

import data from "../lib/data.json";

export default function Home() {
  return (
    <div className={styles.page}>
      <HistoricalDates data={formatData(data)} />
    </div>
  );
}
