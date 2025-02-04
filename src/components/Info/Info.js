import { useEffect } from "react";
import styles from "./Info.module.scss";

export default function Info() {
  return (
    <div className={styles.Info}>
      <div className={styles.header}>
        <h3>TRADING CAPITAL</h3>
      </div>
      <div className={styles.main}>
        <div className={styles.capital}>
          <p>
            {1.00865} {"BTC"}
          </p>
        </div>
        <div className={styles.deposit}>
          <div className={styles.balance}>
            <h3>BALANCE: </h3>
            <p>10850</p>
          </div>
          <div className={styles.hold}>
            <h3>ON HOLD: </h3>
            <p>24000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
