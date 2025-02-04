import styles from "./FilterButton.module.scss";

export default function FilterButton({ text }) {
  return <button className={styles.FilterButton}>{text}</button>;
}
