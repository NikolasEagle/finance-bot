import { useContext } from "react";

import { AppContext } from "../../App";

import styles from "./Info.module.scss";

export default function Info() {
  const context = useContext(AppContext);

  console.log(context);

  const { trading_capital, trading_capital_currency, balance, on_hold } =
    context.data;

  return (
    <div className={styles.Info}>
      <div className={styles.header}>
        <h3>TRADING CAPITAL</h3>
      </div>
      <div className={styles.main}>
        <div className={styles.capital}>
          <p>
            {trading_capital && trading_capital.toFixed(5)}{" "}
            {trading_capital_currency && trading_capital_currency.toUpperCase()}
          </p>
        </div>
        <div className={styles.deposit}>
          <div className={styles.balance}>
            <h3>BALANCE: </h3>
            <p>{balance}</p>
          </div>
          <div className={styles.hold}>
            <h3>ON HOLD: </h3>
            <p>{on_hold}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
