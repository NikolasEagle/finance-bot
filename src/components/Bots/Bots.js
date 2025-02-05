import styles from "./Bots.module.scss";

import Bot from "../Bot/Bot";

import { AppContext } from "../../App";

import { useContext } from "react";

export default function Bots() {
  const context = useContext(AppContext);

  const { bots } = context.data;
  return (
    <div className={styles.Bots}>
      {bots &&
        bots.map((bot) => (
          <Bot
            name={bot.name}
            percent={bot[localStorage.getItem("time_range")]}
          />
        ))}
    </div>
  );
}
