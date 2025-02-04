import styles from "./Bots.module.scss";

import Bot from "../Bot/Bot";

export default function Bots() {
  return <div className={styles.Bots}>{<Bot />}</div>;
}
