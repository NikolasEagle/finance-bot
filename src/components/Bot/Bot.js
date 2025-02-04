import styles from "./Bot.module.scss";

export default function Bot({ name }) {
  return (
    <div className={styles.Bot}>
      <img src={`/${name}.svg`} />
      <h5>{name.toUpperCase().replace("_", " ")}</h5>
      <h5>-8.2%</h5>
    </div>
  );
}
