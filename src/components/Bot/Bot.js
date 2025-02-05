import { useContext } from "react";
import styles from "./Bot.module.scss";
import { AppContext } from "../../App";

export default function Bot({ active, name, percent }) {
  const context = useContext(AppContext);

  const { getData, timeRange } = context;

  async function handleClick() {
    await getData(timeRange, name);
  }

  return (
    <div
      onClick={() => handleClick()}
      tabIndex={0}
      className={
        active ? [styles["Bot"], styles["active"]].join(" ") : styles.Bot
      }
    >
      <img src={`/${name}.svg`} />
      <h5>{name.toUpperCase().replace("_", " ")}</h5>
      <h5
        style={percent > 0 ? { color: "#5ea853" } : { color: "#f2427e" }}
        className={styles.percent}
      >
        {percent > 0 ? `+${percent}` : percent}%
      </h5>
    </div>
  );
}
