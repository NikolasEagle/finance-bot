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
      onClick={() => {
        handleClick();
      }}
      className={
        active
          ? [styles["FilterButton"], styles["active"]].join(" ")
          : styles["FilterButton"]
      }
    >
      <b>{text}</b>
    </button>
  );
}
