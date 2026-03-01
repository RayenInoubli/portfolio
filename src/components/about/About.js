import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={`${styles.about} container`}>
      <p className={styles.mainText}>
        I build <span className={styles.accent}>Next-Generation</span>{" "}
        Technologies.
      </p>
      <p className={styles.subText}>
        With a passion for{" "}
        <span className={styles.highlight}>problem-solving</span> and a flair
        for innovation <br/>
        I specialize in{" "} <span className={styles.focus}>full-stack development</span>, AI
        integration, and interactive media.
      </p>
    </section>
  );
}
