import styles from "./Bot.module.scss";

export default function Bot({ name, percent }) {
  return (
    <div tabIndex={0} className={styles.Bot}>
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
