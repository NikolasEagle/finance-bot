import { AppContext } from "../../App";
import styles from "./FilterButton.module.scss";

import { useContext } from "react";

export default function FilterButton({ active, text }) {
  const context = useContext(AppContext);

  const { getData, kindBot } = context;

  async function handleClick() {
    await getData(text, kindBot);
  }

  return (
    <button
      style={text === "all_time" ? { width: "85px" } : null}
      onClick={() => {
        handleClick();
      }}
      className={
        active
          ? [styles["FilterButton"], styles["active"]].join(" ")
          : styles["FilterButton"]
      }
    >
      <b>
        {text === "all_time"
          ? `${text[0].toUpperCase()}${text.slice(1)}`.replace("_", " ")
          : text}
      </b>
    </button>
  );
}
