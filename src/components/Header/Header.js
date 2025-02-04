import styles from "./Header.module.scss";

import Title from "../Title/Title";

export default function Header() {
  return (
    <div className={styles.Header}>
      <Title />
    </div>
  );
}
