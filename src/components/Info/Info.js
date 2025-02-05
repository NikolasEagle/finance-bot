import { useContext } from "react";

import { AppContext } from "../../App";

import styles from "./Info.module.scss";

export default function Info() {
  const context = useContext(AppContext);

  const { trading_capital, trading_capital_currency, balance, on_hold } =
    context.data;

  return (
    <div className={styles.Info}>
      <div className={styles.header}>
        <h4>TRADING CAPITAL</h4>
      </div>
      <div className={styles.main}>
        <div className={styles.capital}>
          <p>
            {trading_capital && trading_capital.toFixed(5)}{" "}
            {trading_capital_currency && trading_capital_currency.toUpperCase()}
          </p>
        </div>
        <div className={styles.deposit}>
          <div className={styles.names}>
            <h4>BALANCE:</h4>
            <h4>ON HOLD:</h4>
          </div>
          <div className={styles.values}>
            <h4>{balance}</h4>
            <h4>{on_hold}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
