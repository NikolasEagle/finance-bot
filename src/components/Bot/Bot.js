import styles from "./Bot.module.scss";

export default function Bot({ name, percent }) {
  return (
    <div className={styles.Bot}>
      <img src={`/${name}.svg`} />
      <h5>{name.toUpperCase().replace("_", " ")}</h5>
      <h5>{percent}%</h5>
    </div>
  );
}
