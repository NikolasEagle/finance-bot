import styles from "./FilterPanel.module.scss";

import FilterButton from "../FilterButton/FilterButton";

import { AppContext } from "../../App";

import { useContext } from "react";

export default function FilterPanel() {
  const context = useContext(AppContext);

  const { bots } = context.data;
  return (
    <div className={styles.FilterPanel}>
      <h4>Time Range:</h4>
      {bots &&
        Object.keys(bots[0])
          .slice(2)
          .map((time) => {
            if (time === "all_time") {
              return <FilterButton text={time.replace("_", " ")} />;
            }

            return <FilterButton text={time} />;
          })}
    </div>
  );
}
