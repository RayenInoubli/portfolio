import styles from "./SectionLabel.module.css";

export default function SectionLabel({ id, children }) {
  return (
    <h2 id={id} className={`${styles.label} label parallax`} style={{ "--speed": "24px" }}>
      {children}
    </h2>
  );
}
