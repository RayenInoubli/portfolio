import styles from "./SectionLabel.module.css";

export default function SectionLabel({ id, index, children }) {
  return (
    <h2 id={id} className={`${styles.label} label parallax`} style={{ "--speed": "24px" }}>
      {index && <span className={styles.index}>{index}</span>}
      {children}
    </h2>
  );
}
