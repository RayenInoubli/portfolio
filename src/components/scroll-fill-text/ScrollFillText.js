import styles from "./ScrollFillText.module.css";

// Paragraph whose words fill in one after another as it scrolls into view.
export default function ScrollFillText({ text, className = "" }) {
  const words = text.split(" ");

  return (
    <p className={`${styles.fill} ${className}`}>
      {words.map((word, i) => (
        <span key={i} className={styles.word} style={{ "--i": i, "--n": words.length }}>
          {i < words.length - 1 ? `${word} ` : word}
        </span>
      ))}
    </p>
  );
}
