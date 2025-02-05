import { AppContext } from "../../App";
import styles from "./FilterButton.module.scss";

import { useContext } from "react";

export default function FilterButton({ active, text }) {
  const context = useContext(AppContext);

  const { getData } = context;

  async function handleClick(event) {
    await getData(event.target.textContent);
  }

  return (
    <button
      onClick={(event) => {
        handleClick(event);
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
